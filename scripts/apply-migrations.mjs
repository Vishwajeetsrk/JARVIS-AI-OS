// Applies pending SQL migrations in supabase/migrations/ to the remote DB
// using DATABASE_URL, tracking versions exactly like `supabase db push`
// (supabase_migrations.schema_migrations). Safe to re-run.
import { readFileSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import pg from "pg";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const migrationsDir = join(root, "supabase", "migrations");

const connectionString =
  process.env.DATABASE_URL ||
  readEnv("DATABASE_URL") ||
  process.env.SUPABASE_DB_URL;

if (!connectionString) {
  console.error("Missing DATABASE_URL in .env");
  process.exit(1);
}

function readEnv(key) {
  try {
    const line = readFileSync(join(root, ".env"), "utf8")
      .split(/\r?\n/)
      .find((l) => l.trim().startsWith(`${key}=`));
    if (!line) return undefined;
    return line.slice(key.length + 1).replace(/^["']|["']$/g, "");
  } catch {
    return undefined;
  }
}

function parseSql(sql) {
  const trimmed = sql.trim();
  return trimmed.endsWith(";") ? trimmed : `${trimmed};`;
}

async function main() {
  const client = new pg.Client({ connectionString });
  await client.connect();

  await client.query(`
    CREATE SCHEMA IF NOT EXISTS supabase_migrations;
    CREATE TABLE IF NOT EXISTS supabase_migrations.schema_migrations (
      version text PRIMARY KEY,
      statements text[] DEFAULT '{}',
      name text
    );
  `);
  const { rows } = await client.query(
    "SELECT version FROM supabase_migrations.schema_migrations",
  );
  const applied = new Set(rows.map((r) => r.version));

  const files = readdirSync(migrationsDir)
    .filter((f) => f.endsWith(".sql"))
    .sort();

  const forgetIdx = process.argv.indexOf("--forget");
  if (forgetIdx !== -1) {
    const version = process.argv[forgetIdx + 1];
    await client.query(
      "DELETE FROM supabase_migrations.schema_migrations WHERE version = $1",
      [version],
    );
    console.log(`Forgot tracking for ${version}.`);
    await client.end();
    return;
  }

  if (process.argv.includes("--baseline")) {    let marked = 0;
    for (const file of files) {
      if (file === files[files.length - 1]) {
        console.log(`skip  ${file} (baseline leaves newest pending)`);
        continue;
      }
      const version = file.split("_")[0];
      if (applied.has(version)) continue;
      await client.query(
        "INSERT INTO supabase_migrations.schema_migrations (version, name) VALUES ($1, $2) ON CONFLICT (version) DO NOTHING",
        [version, file],
      );
      marked++;
    }
    console.log(`Baselined ${marked} migration(s) as already applied.`);
    await client.end();
    return;
  }

  let changed = 0;

  for (const file of files) {
    const version = file.split("_")[0];
    if (applied.has(version)) {
      console.log(`skip  ${file} (already applied)`);
      continue;
    }
    const sql = parseSql(readFileSync(join(migrationsDir, file), "utf8"));
    console.log(`apply ${file}`);
    await client.query("BEGIN");
    try {
      await client.query(sql);
      await client.query(
        "INSERT INTO supabase_migrations.schema_migrations (version, name) VALUES ($1, $2)",
        [version, file],
      );
      await client.query("COMMIT");
      changed++;
    } catch (err) {
      await client.query("ROLLBACK");
      console.error(`FAIL  ${file}: ${err.message}`);
      process.exit(1);
    }
  }

  console.log(changed ? `Applied ${changed} migration(s).` : "Nothing to apply.");
  await client.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

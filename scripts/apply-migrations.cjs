const fs = require('fs');
const path = require('path');
const { Client } = require('pg');

const connectionString = 'postgresql://postgres:%23KingKhan15112003@db.tupgfxqkefgntrpgakxk.supabase.co:5432/postgres';
const client = new Client({ connectionString, ssl: { rejectUnauthorized: false } });

async function runMigrations() {
  await client.connect();
  console.log('Connected to PostgreSQL successfully!');

  const migrationsDir = path.join(__dirname, '..', 'supabase', 'migrations');
  const files = fs.readdirSync(migrationsDir).filter(f => f.endsWith('.sql')).sort();

  for (const file of files) {
    const filePath = path.join(migrationsDir, file);
    const sql = fs.readFileSync(filePath, 'utf8');
    try {
      await client.query(sql);
      console.log('✓ Migration executed:', file);
    } catch (err) {
      console.log('ℹ Notice on ' + file + ':', err.message);
    }
  }

  // Reload PostgREST schema cache
  try {
    await client.query("NOTIFY pgrst, 'reload schema';");
    console.log('✓ PostgREST schema cache reloaded successfully!');
  } catch (err) {
    console.error('Error reloading schema cache:', err.message);
  }

  await client.end();
}

runMigrations().catch(console.error);

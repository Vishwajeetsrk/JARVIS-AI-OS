import { describe, expect, it } from "vitest";
import { isSensitive } from "../src/functions/replay.js";

describe("isSensitive path guard", () => {
  it("blocks .env and common secret filenames", () => {
    expect(isSensitive("/Users/x/project/.env")).toBe(true);
    expect(isSensitive("/Users/x/project/.env.local")).toBe(true);
    expect(isSensitive("/tmp/credentials.json")).toBe(true);
    expect(isSensitive("/home/alice/.ssh/id_rsa")).toBe(true);
    expect(isSensitive("/srv/app/secret.key")).toBe(true);
    expect(isSensitive("/srv/app/access_token.txt")).toBe(true);
    expect(isSensitive("/srv/app/private_key.pem")).toBe(true);
  });

  it("does not false-positive on project names containing substrings", () => {
    expect(isSensitive("/Users/dev/jsonwebtoken-demo/transcript.jsonl")).toBe(false);
    expect(isSensitive("/repos/secrethandshake-lib/a.jsonl")).toBe(false);
    expect(isSensitive("/opt/tokeniser/out.jsonl")).toBe(false);
    expect(isSensitive("/Users/alice/.claude/projects/myapp/abc.jsonl")).toBe(false);
  });
});

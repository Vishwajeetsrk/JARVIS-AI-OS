/**
 * Minimal ZIP writer (STORE method, no compression) — zero dependencies.
 * Produces a valid ZIP archive that Windows/macOS/Linux can extract.
 */

const CRC_TABLE: number[] = (() => {
  const t: number[] = new Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

function crc32(buf: Uint8Array): number {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc = CRC_TABLE[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function encodeUtf8(s: string): Uint8Array {
  return new TextEncoder().encode(s);
}

function u16(n: number): Uint8Array {
  return new Uint8Array([n & 0xff, (n >>> 8) & 0xff]);
}

function u32(n: number): Uint8Array {
  return new Uint8Array([n & 0xff, (n >>> 8) & 0xff, (n >>> 16) & 0xff, (n >>> 24) & 0xff]);
}

export interface ZipEntry {
  /** Path inside the archive, e.g. "project/index.html" */
  path: string;
  /** UTF-8 text content (or Buffer-like bytes via Uint8Array) */
  content: string | Uint8Array;
}

/**
 * Build a ZIP archive from the given entries using the STORE method.
 * Returns the archive bytes (Buffer-compatible Uint8Array).
 */
export function buildZip(entries: ZipEntry[]): Uint8Array {
  const chunks: Uint8Array[] = [];
  const central: Uint8Array[] = [];
  let offset = 0;

  for (const entry of entries) {
    const nameBytes = encodeUtf8(entry.path);
    const data = typeof entry.content === "string" ? encodeUtf8(entry.content) : entry.content;
    const crc = crc32(data);

    // Local file header
    const local = new Uint8Array(30 + nameBytes.length);
    local.set(u32(0x04034b50), 0); // signature
    local.set(u16(20), 4); // version needed
    local.set(u16(0), 6); // flags
    local.set(u16(0), 8); // method: store
    local.set(u16(0), 10); // mod time
    local.set(u16(0x21), 12); // mod date (2026-01-01)
    local.set(u32(crc), 14);
    local.set(u32(data.length), 18);
    local.set(u32(data.length), 22);
    local.set(u16(nameBytes.length), 26);
    local.set(u16(0), 28); // extra len
    local.set(nameBytes, 30);

    chunks.push(local, data);

    // Central directory record
    const rec = new Uint8Array(46 + nameBytes.length);
    rec.set(u32(0x02014b50), 0); // signature
    rec.set(u16(20), 4); // version made by
    rec.set(u16(20), 6); // version needed
    rec.set(u16(0), 8); // flags
    rec.set(u16(0), 10); // method
    rec.set(u16(0), 12); // mod time
    rec.set(u16(0x21), 14); // mod date
    rec.set(u32(crc), 16);
    rec.set(u32(data.length), 20);
    rec.set(u32(data.length), 24);
    rec.set(u16(nameBytes.length), 28);
    rec.set(u16(0), 30); // extra len
    rec.set(u16(0), 32); // comment len
    rec.set(u16(0), 34); // disk start
    rec.set(u16(0), 36); // internal attrs
    rec.set(u32(0), 38); // external attrs
    rec.set(u32(offset), 42);
    rec.set(nameBytes, 46);
    central.push(rec);

    offset += 30 + nameBytes.length + data.length;
  }

  // End of central directory
  const centralSize = central.reduce((s, c) => s + c.length, 0);
  const eocd = new Uint8Array(22);
  eocd.set(u32(0x06054b50), 0); // signature
  eocd.set(u16(0), 4);
  eocd.set(u16(0), 6);
  eocd.set(u16(entries.length), 8);
  eocd.set(u16(entries.length), 10);
  eocd.set(u32(centralSize), 12);
  eocd.set(u32(offset), 16);
  eocd.set(u16(0), 20);

  const total = offset + centralSize + 22;
  const out = new Uint8Array(total);
  let pos = 0;
  for (const c of chunks) {
    out.set(c, pos);
    pos += c.length;
  }
  for (const c of central) {
    out.set(c, pos);
    pos += c.length;
  }
  out.set(eocd, pos);

  return out;
}

/** Convert zip bytes to a base64 data URL for download chips. */
export function zipToDataUrl(zip: Uint8Array): string {
  let binary = "";
  for (let i = 0; i < zip.length; i++) binary += String.fromCharCode(zip[i]);
  return `data:application/zip;base64,${btoa(binary)}`;
}
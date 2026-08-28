export interface InlineImage {
  data: string;       // base64, without the data: URI prefix
  mimeType: string;
}

// Source images can be very large (10MB+). Downscale before base64-encoding so
// requests stay well under the Express body limit and Gemini's inline-image cap.
const MAX_DIM = 1536;
const QUALITY = 0.85;

// Split a data: URL into the { data, mimeType } shape the server forwards to Gemini.
export function dataUrlToInline(dataUrl: string): InlineImage {
  const comma = dataUrl.indexOf(',');
  const header = dataUrl.slice(5, comma); // drop the leading "data:"
  return { mimeType: header.split(';')[0] || 'image/jpeg', data: dataUrl.slice(comma + 1) };
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

// Downscale any image source (asset URL, blob: URL or data: URL) to a JPEG data URL,
// capped at MAX_DIM on the longest edge. Transparent areas are flattened to white.
export async function downscaleToDataUrl(src: string, maxDim = MAX_DIM, quality = QUALITY): Promise<string> {
  const img = await loadImage(src);
  const scale = Math.min(1, maxDim / Math.max(img.naturalWidth, img.naturalHeight));
  const w = Math.max(1, Math.round(img.naturalWidth * scale));
  const h = Math.max(1, Math.round(img.naturalHeight * scale));
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, w, h);
  ctx.drawImage(img, 0, 0, w, h);
  return canvas.toDataURL('image/jpeg', quality);
}

// Read an uploaded File and downscale it to a JPEG data URL.
export async function fileToDownscaledDataUrl(file: File): Promise<string> {
  const url = URL.createObjectURL(file);
  try {
    return await downscaleToDataUrl(url);
  } finally {
    URL.revokeObjectURL(url);
  }
}

// Downscale + base64-encode a list of image sources for sending to the server.
export async function toInlineImages(urls: string[]): Promise<InlineImage[]> {
  return Promise.all(urls.map(async (url) => dataUrlToInline(await downscaleToDataUrl(url))));
}

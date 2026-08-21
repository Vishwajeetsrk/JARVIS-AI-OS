import fs from "node:fs";
import path from "node:path";

const base = "public/preset-sites";
const dirs = fs.readdirSync(base).filter(d => d.startsWith("aceternity-"));

for (const dir of dirs) {
  const p = path.join(base, dir, "index.html");
  if (!fs.existsSync(p)) continue;
  let html = fs.readFileSync(p, "utf8");

  // Fix 1: Back link href -> /design and /console/design, keep title full
  html = html.replace(/href="\/templates\/[^"]*"/g, 'href="/design"');

  // Fix 2: Make Code button functional (remove lock, add data attribute)
  // Original Code button has lock icon; we make it clickable and remove lock visual via JS
  // Replace the Code button's inner lock SVG with code icon? Keep as is but make clickable
  // We'll add IDs to buttons for JS handling
  html = html.replace(
    /<button class="flex items-center gap-1\.5 rounded-full px-2\.5 py-1\.5 text-sm font-medium transition-all sm:px-3 text-neutral-500 hover:text-neutral-900[^"]*" title="Code">/,
    '<button data-jarvis-tab="code" class="flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-sm font-medium transition-all sm:px-3 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white" title="Code">'
  );
  html = html.replace(
    /<button class="flex items-center gap-1\.5 rounded-full px-2\.5 py-1\.5 text-sm font-medium transition-all sm:px-3 bg-white text-neutral-900 shadow-sm[^"]*" title="Preview">/,
    '<button data-jarvis-tab="preview" class="flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-sm font-medium transition-all sm:px-3 bg-white text-neutral-900 shadow-sm dark:bg-neutral-700 dark:text-white" title="Preview">'
  );

  // Fix 3: Add IDs to device buttons and container for JS
  html = html.replace(
    '<div class="mx-auto h-screen transition-all duration-300 w-full">',
    '<div id="jarvis-preview-container" class="mx-auto h-screen transition-all duration-300 w-full">'
  );
  html = html.replace(
    'title="Desktop view"',
    'data-device="desktop" title="Desktop view"'
  );
  html = html.replace(
    'title="Tablet view"',
    'data-device="tablet" title="Tablet view"'
  );
  html = html.replace(
    'title="Mobile view"',
    'data-device="mobile" title="Mobile view"'
  );

  // Fix 4: All Access -> Recreate (link to /design)
  html = html.replace(/href="\/pricing"/g, 'href="/design"');
  html = html.replace(/>All Access</g, '>Recreate</');

  // Fix 5: Inject JS for toolbar functionality (device + Preview/Code toggle)
  const script = `
<script>
(function(){
  const container = document.getElementById('jarvis-preview-container');
  if(!container) return;
  const iframe = container.querySelector('iframe');
  const previewBtn = document.querySelector('[data-jarvis-tab="preview"]');
  const codeBtn = document.querySelector('[data-jarvis-tab="code"]');
  const deviceBtns = document.querySelectorAll('[data-device]');
  let codeEl = null;
  function showPreview(){
    if(iframe) iframe.style.display='block';
    if(codeEl) codeEl.style.display='none';
    if(previewBtn) { previewBtn.classList.add('bg-white','text-neutral-900','shadow-sm','dark:bg-neutral-700','dark:text-white'); previewBtn.classList.remove('text-neutral-500'); }
    if(codeBtn) { codeBtn.classList.remove('bg-white','text-neutral-900','shadow-sm','dark:bg-neutral-700','dark:text-white'); codeBtn.classList.add('text-neutral-500'); }
  }
  function showCode(){
    if(!codeEl){
      codeEl = document.createElement('pre');
      codeEl.style.cssText='display:block; width:100%; height:100%; overflow:auto; background:#0a0a0a; color:#e5e5e5; padding:16px; font-family:ui-monospace,monospace; font-size:12px; white-space:pre-wrap; word-break:break-all;';
      codeEl.textContent = document.documentElement.outerHTML.slice(0, 8000) + "\\n\\n... (full source available via View Source)";
      container.appendChild(codeEl);
    }
    if(iframe) iframe.style.display='none';
    codeEl.style.display='block';
    if(codeBtn) { codeBtn.classList.add('bg-white','text-neutral-900','shadow-sm','dark:bg-neutral-700','dark:text-white'); codeBtn.classList.remove('text-neutral-500'); }
    if(previewBtn) { previewBtn.classList.remove('bg-white','text-neutral-900','shadow-sm','dark:bg-neutral-700','dark:text-white'); previewBtn.classList.add('text-neutral-500'); }
  }
  if(previewBtn) previewBtn.addEventListener('click', showPreview);
  if(codeBtn) codeBtn.addEventListener('click', showCode);
  deviceBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      deviceBtns.forEach(b=>{ b.classList.remove('bg-white','text-neutral-900','shadow-sm','dark:bg-neutral-700','dark:text-white'); b.classList.add('text-neutral-500'); });
      btn.classList.add('bg-white','text-neutral-900','shadow-sm','dark:bg-neutral-700','dark:text-white'); btn.classList.remove('text-neutral-500');
      const d = btn.getAttribute('data-device');
      if(d==='mobile'){ container.style.maxWidth='390px'; container.style.margin='0 auto'; }
      else if(d==='tablet'){ container.style.maxWidth='768px'; container.style.margin='0 auto'; }
      else { container.style.maxWidth='100%'; }
    });
  });
})();
</script>`;

  // Inject before </body>
  if (!html.includes('jarvis-preview-container') || !html.includes('data-jarvis-tab')) {
    // already patched? skip re-inject
  } else {
    html = html.replace('</body>', script + '</body>');
  }

  fs.writeFileSync(p, html, "utf8");
  console.log(`fixed ${dir}`);
}
console.log("done");

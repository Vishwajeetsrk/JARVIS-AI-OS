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

  // Fix 2: Make Code button functional — unlock it (replace lock SVG with code SVG) and add data attribute
  html = html.replace(
    /<svg[^>]*><path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"><\/path><path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"><\/path><path d="M8 11v-4a4 4 0 1 1 8 0v4"><\/path><\/svg>/,
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>'
  );
  html = html.replace(
    /<button class="flex items-center gap-1\.5 rounded-full px-2\.5 py-1\.5 text-sm font-medium transition-all sm:px-3 text-neutral-500 hover:text-neutral-900[^"]*" title="Code">/,
    '<button data-jarvis-tab="code" class="flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-sm font-medium transition-all sm:px-3 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white" title="Code">'
  );
  html = html.replace(
    /<button class="flex items-center gap-1\.5 rounded-full px-2\.5 py-1\.5 text-sm font-medium transition-all sm:px-3 bg-white text-neutral-900 shadow-sm[^"]*" title="Preview">/,
    '<button data-jarvis-tab="preview" class="flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-sm font-medium transition-all sm:px-3 bg-white text-neutral-900 shadow-sm dark:bg-neutral-700 dark:text-white" title="Preview">'
  );

  // Fix 2b: Remove Shop (cart) button
  html = html.replace(/<div class="relative flex cursor-pointer items-center justify-center rounded-lg p-3 hover:bg-neutral-100 dark:hover:bg-neutral-800"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"[^>]*>[\s\S]*?<\/svg><\/div>/, '');

  // Fix 2c: Remove Dark Mode (sun) button
  html = html.replace(/<button class="rounded-full p-2 text-neutral-500 transition-all hover:bg-neutral-100 hover:text-neutral-900[^"]*" title="Toggle theme">[\s\S]*?<\/button>/, '');

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

  // Fix 4: All Access -> Blue Chat button (functional, opens chat with template context)
  html = html.replace(
    /<a class="cursor-pointer justify-center bg-neutral-900[^"]*" href="\/pricing">[\s\S]*?<span class="hidden sm:inline">All Access<\/span><\/a>/,
    '<button data-jarvis-chat="true" class="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-blue-600 px-3 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700 active:scale-95 transition-all sm:px-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg><span class="hidden sm:inline">Chat</span></button>'
  );
  html = html.replace(/href="\/pricing"/g, 'href="/design"');
  html = html.replace(/>All Access</g, '>Chat</');

  // Fix 5: Inject JS for toolbar functionality (device + Preview/Code toggle + Chat)
  const script = `
<script>
(function(){
  const container = document.getElementById('jarvis-preview-container');
  if(!container) return;
  const iframe = container.querySelector('iframe');
  const previewBtn = document.querySelector('[data-jarvis-tab="preview"]');
  const codeBtn = document.querySelector('[data-jarvis-tab="code"]');
  const deviceBtns = document.querySelectorAll('[data-device]');
  const chatBtn = document.querySelector('[data-jarvis-chat]');
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
      codeEl.textContent = document.documentElement.outerHTML.slice(0, 12000) + "\\n\\n... (full source via /preset-sites/.../index.html)";
      container.appendChild(codeEl);
    }
    if(iframe) iframe.style.display='none';
    codeEl.style.display='block';
    if(codeBtn) { codeBtn.classList.add('bg-white','text-neutral-900','shadow-sm','dark:bg-neutral-700','dark:text-white'); codeBtn.classList.remove('text-neutral-500'); }
    if(previewBtn) { previewBtn.classList.remove('bg-white','text-neutral-900','shadow-sm','dark:bg-neutral-700','dark:text-white'); previewBtn.classList.add('text-neutral-500'); }
  }
  if(previewBtn) previewBtn.addEventListener('click', showPreview);
  if(codeBtn) codeBtn.addEventListener('click', showCode);
  if(chatBtn) chatBtn.addEventListener('click', ()=>{
    const title = (document.title || 'this template').replace(' - Preview | Aceternity UI','').trim();
    const prompt = 'Help me recreate the ' + title + ' template. Show live preview, code, and explain the design tokens. Use the same style.';
    window.location.href = '/console?seed=' + encodeURIComponent(prompt);
  });
  deviceBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      deviceBtns.forEach(b=>{ b.classList.remove('bg-white','text-neutral-900','shadow-sm','dark:bg-neutral-700','dark:text-white'); b.classList.add('text-neutral-500'); });
      btn.classList.add('bg-white','text-neutral-900','shadow-sm','dark:bg-neutral-700','dark:text-white'); btn.classList.remove('text-neutral-500');
      const d = btn.getAttribute('data-device');
      if(d==='mobile'){ container.style.maxWidth='390px'; container.style.margin='0 auto'; container.style.boxShadow='0 0 0 1px #e5e7eb, 0 20px 40px rgba(0,0,0,0.15)'; }
      else if(d==='tablet'){ container.style.maxWidth='768px'; container.style.margin='0 auto'; container.style.boxShadow='0 0 0 1px #e5e7eb, 0 20px 40px rgba(0,0,0,0.15)'; }
      else { container.style.maxWidth='100%'; container.style.boxShadow='none'; }
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

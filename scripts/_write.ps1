$p = "D:\Team of Vishwajeet\Agent-Team-Skills\index.html"

# PART 1 - Head + CSS
$h1 = @"
<!DOCTYPE html><html lang="en"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Agent Team Skills — 19 AI Agents. One Prompt.</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="icon" type="image/svg+xml" href="dashboard/favicon.svg">
<link rel="manifest" href="dashboard/manifest.json">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
:root{--bg:#07080a;--surface:#0b0c0f;--sf2:#0f1013;--fg:#fff;--muted:#9c9c9d;--meta:#6b7280;--border:rgba(255,255,255,.05);--crimson:#ff2f3a;--coral:#ff6b4a;--amber:#ffb347;--a-sub:rgba(255,111,74,.08);--a-glow:rgba(255,111,74,.15);--fd:'Inter',system-ui,sans-serif;--fb:'Inter',system-ui,sans-serif;--fm:'JetBrains Mono',monospace;--r-sm:8px;--r-md:12px;--r-lg:16px;--r-xl:24px;--r-p:999px;--e-o:cubic-bezier(.16,1,.3,1);--c:1200px}
body{font-family:var(--fb);background:var(--bg);color:var(--fg);line-height:1.6;-webkit-font-smoothing:antialiased;overflow-x:hidden}
.c{max-width:var(--c);margin:0 auto;padding:0 32px;position:relative;z-index:1}
.aurora{position:fixed;inset:0;pointer-events:none;z-index:0;overflow:hidden;background:#07080a}
.aurora .grain{position:absolute;inset:0;z-index:3}
.aurora .v{position:absolute;inset:0;z-index:2;background:radial-gradient(ellipse at center,transparent 40%,#07080a 85%)}
.aurora .b{position:absolute;width:120vw;height:80vh;border-radius:50%;filter:blur(120px);mix-blend-mode:screen;will-change:transform,opacity}
.aurora .b1{background:linear-gradient(135deg,#ff2f3a 0%,#ff6b4a 40%,#ffb347 70%,transparent 100%);top:-30%;left:-10%;animation:d1 18s ease-in-out infinite;opacity:.5}
.aurora .b2{background:linear-gradient(225deg,#ff2f3a 0%,#ff6b4a 35%,#ffb347 65%,transparent 100%);bottom:-20%;right:-15%;animation:d2 22s ease-in-out infinite 2s;opacity:.4}
.aurora .b3{background:linear-gradient(180deg,#ff6b4a 0%,#ffb347 50%,transparent 100%);top:10%;right:-5%;animation:d3 20s ease-in-out infinite 5s;opacity:.35}
.aurora .b4{background:linear-gradient(0deg,#ff2f3a 0%,#ff6b4a 45%,transparent 100%);bottom:5%;left:-20%;animation:d4 16s ease-in-out infinite 8s;opacity:.3}
.aurora .b5{background:linear-gradient(90deg,#ffb347 0%,#ff6b4a 50%,#ff2f3a 100%);top:40%;left:30%;width:60vw;height:30vw;filter:blur(160px);animation:d5 25s ease-in-out infinite 3s;opacity:.25}
@keyframes d1{0%,100%{transform:translate(0,0)rotate(0deg)scale(1);opacity:.5}25%{transform:translate(40px,-30px)rotate(2deg)scale(1.05);opacity:.6}50%{transform:translate(-20px,20px)rotate(-1deg)scale(.95);opacity:.4}75%{transform:translate(30px,40px)rotate(1deg)scale(1.03);opacity:.55}}
@keyframes d2{0%,100%{transform:translate(0,0)rotate(0deg)scale(1);opacity:.4}25%{transform:translate(-30px,40px)rotate(-2deg)scale(1.08);opacity:.5}50%{transform:translate(20px,-20px)rotate(1deg)scale(.92);opacity:.3}75%{transform:translate(-40px,-30px)rotate(-1deg)scale(1.04);opacity:.45}}
@keyframes d3{0%,100%{transform:translate(0,0)rotate(0deg)scale(1);opacity:.35}33%{transform:translate(50px,20px)rotate(3deg)scale(1.06);opacity:.45}66%{transform:translate(-30px,-40px)rotate(-2deg)scale(.94);opacity:.3}}
@keyframes d4{0%,100%{transform:translate(0,0)rotate(0deg)scale(1);opacity:.3}50%{transform:translate(-50px,-30px)rotate(-3deg)scale(1.1);opacity:.4}}
@keyframes d5{0%,100%{transform:translate(0,0)scale(1);opacity:.25}50%{transform:translate(20px,30px)scale(1.08);opacity:.35}}
.nv{padding:20px 0 0;position:fixed;top:0;left:0;right:0;z-index:100;display:flex;justify-content:center;pointer-events:none}
.nv .pi{display:flex;align-items:center;gap:8px;background:rgba(11,12,15,.7);backdrop-filter:blur(16px);border:1px solid var(--border);border-radius:var(--r-p);padding:10px 24px;pointer-events:auto;box-shadow:0 8px 32px rgba(0,0,0,.3)}
.nv .pi::before{content:'';position:absolute;inset:1px;border-radius:inherit;background:linear-gradient(180deg,rgba(255,255,255,.04),transparent 50%);pointer-events:none}
.nv .lg{display:flex;align-items:center;gap:10px;font-size:16px;font-weight:600;text-decoration:none;color:var(--fg);font-family:var(--fd)}
.nv .lg .dm{width:20px;height:20px;background:linear-gradient(135deg,var(--coral),var(--amber));clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%)}
.nv .lk{display:flex;align-items:center;gap:4px;margin:0 12px}
.nv .lk a{font-size:13px;font-weight:500;color:var(--muted);text-decoration:none;padding:6px 10px;border-radius:6px;transition:all .2s}
.nv .lk a:hover{color:var(--fg);background:rgba(255,255,255,.04)}
.nv .nr{display:flex;align-items:center;gap:8px}
.nv .nr .bd{background:var(--fg);color:var(--bg)!important;padding:6px 16px;border-radius:8px;font-weight:600!important;font-size:13px!important;transition:all .2s;text-decoration:none}
.nv .nr .bd:hover{background:#e6e6e6;transform:translateY(-1px)}
.nm{display:none;background:none;border:none;color:var(--fg);font-size:20px;cursor:pointer;padding:4px}
.hero{position:relative;z-index:1;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:120px 0 60px;text-align:center}
.hero .bdg{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.04);backdrop-filter:blur(8px);border:1px solid var(--border);padding:6px 16px 6px 10px;border-radius:var(--r-p);font-size:12px;font-weight:500;color:var(--muted);margin-bottom:24px}
.hero .bdg .dt{width:8px;height:8px;border-radius:2px;background:var(--coral);flex-shrink:0}
.hl{font-family:var(--fd);font-size:clamp(32px,4.5vw,60px)!important;font-weight:600!important;line-height:1.1!important;letter-spacing:-.04em!important;margin-bottom:16px}
.hl .ac{background:linear-gradient(135deg,var(--amber),var(--coral),var(--crimson));-webkit-background-clip:text;background-clip:text;color:transparent}
.sub{font-size:clamp(15px,1.4vw,17px);color:var(--muted);max-width:600px;margin:0 auto 28px;line-height:1.6}
.bts{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-bottom:12px}
.btn-k{display:inline-flex;align-items:center;gap:10px;background:#e6e6e6;color:#2f3031;font-size:14px;font-weight:500;padding:12px 24px;border-radius:8px;text-decoration:none;transition:all .2s;box-shadow:0 2px 0 #07080a,0 4px 14px rgba(255,255,255,.12),inset 0 1px 0 rgba(255,255,255,.9),inset 0 -2px 0 rgba(0,0,0,.08);border:none;cursor:pointer}
.btn-k:hover{transform:translateY(-2px);box-shadow:0 4px 0 #07080a,0 6px 20px rgba(255,255,255,.15),inset 0 1px 0 #fff,inset 0 -2px 0 rgba(0,0,0,.08)}
.ins{font-family:var(--fm);font-size:12px;color:var(--muted);margin-bottom:36px}
.ins span{background:rgba(255,255,255,.04);padding:2px 8px;border-radius:4px;font-size:11px}
.cmd{width:100%;max-width:700px;margin:0 auto 28px;background:rgba(11,12,15,.6);backdrop-filter:blur(20px);border:1px solid var(--border);border-radius:14px;box-shadow:0 8px 60px rgba(255,47,58,.08);overflow:hidden;transition:transform .3s,box-shadow .3s}
.cmd:hover{transform:translateY(-2px);box-shadow:0 12px 80px rgba(255,47,58,.12)}
.cmd .inp{display:flex;align-items:center;gap:10px;padding:16px 20px;border-bottom:1px solid var(--border)}
.cmd .inp .sg{width:16px;height:16px;color:var(--meta);flex-shrink:0}
.cmd .inp .q{flex:1;font-size:14px;color:var(--muted);text-align:left;display:flex;align-items:center;gap:2px}
.cmd .inp .q .cr{display:inline-block;width:2px;height:16px;background:var(--coral);animation:bl 1s step-end infinite;margin-left:2px}
.cmd .inp .md{font-size:11px;font-weight:500;color:var(--muted);background:rgba(255,255,255,.06);padding:3px 10px;border-radius:4px;font-family:var(--fm)}
.cmd .rs{padding:4px 0}.cmd .r{display:flex;align-items:center;gap:12px;padding:10px 20px;transition:all .15s;cursor:default}
.cmd .r.act{background:rgba(255,111,74,.08);border-left:2px solid var(--coral);margin:0 -1px}
.cmd .r .ri{width:18px;height:18px;color:var(--meta);flex-shrink:0}
.cmd .r .rl{flex:1;font-size:13px;color:var(--muted);display:flex;align-items:center;gap:8px}
.cmd .r .rl .ra{font-family:var(--fm);font-size:11px;color:var(--meta);background:rgba(255,255,255,.04);padding:1px 6px;border-radius:3px}
.cmd .r .sc{font-family:var(--fm);font-size:10px;color:var(--meta);background:rgba(255,255,255,.04);padding:3px 8px;border-radius:4px;flex-shrink:0}
.cmd .r.act .sc{background:rgba(255,111,74,.12);color:var(--coral)}
.cmd .ft{display:flex;align-items:center;justify-content:space-between;padding:10px 20px;border-top:1px solid var(--border);font-family:var(--fm);font-size:10px;color:var(--meta)}
.cmd .ft .wm{font-family:var(--fb);font-weight:600;font-size:11px;color:var(--muted)}
@keyframes bl{50%{opacity:0}}
.gp{display:inline-flex;align-items:center;gap:6px;padding:10px 24px;border:1px solid rgba(255,255,255,.1);border-radius:var(--r-p);color:var(--muted);text-decoration:none;font-size:14px;transition:all .3s}
.gp:hover{border-color:rgba(255,255,255,.2);color:var(--fg);transform:translateY(-1px)}
.gp svg{width:14px;height:14px;transition:transform .3s}.gp:hover svg{transform:translateX(3px)}
.badge-ph{position:fixed;bottom:32px;right:32px;z-index:50;background:rgba(11,12,15,.7);backdrop-filter:blur(12px);border:1px solid var(--border);border-radius:12px;padding:12px 16px;display:flex;align-items:center;gap:12px;box-shadow:0 4px 24px rgba(0,0,0,.3);cursor:default;transition:transform .3s}
.badge-ph:hover{transform:translateY(-2px)}
.badge-ph .ph-i{width:24px;height:24px;background:linear-gradient(135deg,var(--coral),var(--amber));border-radius:6px;display:flex;align-items:center;justify-content:center;color:var(--bg);font-weight:700;font-size:12px;font-family:var(--fd)}
.badge-ph .ph-t{font-size:12px;line-height:1.3}.badge-ph .ph-t strong{font-weight:600;color:var(--fg)}.badge-ph .ph-t span{display:block;font-size:10px;color:var(--meta)}
section{position:relative;z-index:1;padding:80px 0}
.sh{text-align:center;margin-bottom:48px}
.sh h2{font-family:var(--fd);font-size:clamp(26px,2.8vw,38px);font-weight:600;letter-spacing:-.03em;line-height:1.08;margin-bottom:8px}
.sh h2 .ac{background:linear-gradient(135deg,var(--amber),var(--coral));-webkit-background-clip:text;background-clip:text;color:transparent}
.sh p{color:var(--muted);font-size:15px;max-width:480px;margin:0 auto}
.sh .sm{font-size:11px;text-transform:uppercase;letter-spacing:.12em;color:var(--meta);font-weight:500;margin-bottom:8px}
.cg{display:flex;justify-content:center;gap:64px;flex-wrap:wrap;padding:24px 0}
.cg .c{text-align:center}
.cg .c .num{font-family:var(--fd);font-size:48px;font-weight:600;letter-spacing:-.03em;background:linear-gradient(135deg,var(--fg),var(--muted));-webkit-background-clip:text;background-clip:text;color:transparent;line-height:1}
.cg .c .lbl{font-size:14px;color:var(--meta);margin-top:4px;font-weight:300}
.sc-gr{position:relative;max-width:1120px;margin:40px auto 0;min-height:520px;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;padding:40px 0}
.scard{position:absolute;width:260px;height:380px;cursor:pointer;transition:all .5s var(--e-o);z-index:1}
.scard .b{position:relative;overflow:hidden;border-radius:24px;width:100%;height:100%;padding:20px;display:flex;flex-direction:column;border:1px solid rgba(255,255,255,.06);background:#0d0e12}
.scard .b .gr{position:absolute;inset:0;width:100%;height:100%;opacity:.5;pointer-events:none;z-index:0}
.scard .b .iw{position:relative;z-index:1;width:100%;height:100px;margin-bottom:16px;overflow:hidden;border-radius:12px;display:flex;align-items:center;justify-content:center}
.scard .cat{position:relative;z-index:1;font-size:10px;text-transform:uppercase;letter-spacing:.12em;font-weight:700;margin-bottom:4px;display:block}
.scard .ct{position:relative;z-index:1;font-size:22px;font-weight:700;letter-spacing:-.02em;line-height:1.15;transition:all .5s}
.scard .ds{position:relative;z-index:1;margin-top:10px;font-size:13px;line-height:1.5;opacity:0;transform:translateY(8px);transition:all .5s}
.scard .cta{position:relative;z-index:1;margin-top:auto;padding-top:12px;opacity:0;transform:translateY(12px);transition:all .5s;visibility:hidden}
.scard .cta button{width:100%;padding:10px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;border-radius:10px;border:none;cursor:pointer;transition:all .2s}
.scard:hover{z-index:100!important}.scard:hover .b{box-shadow:0 40px 80px -15px rgba(0,0,0,.5)}
.scard:hover .ct{transform:translateY(-4px)}.scard:hover .ds{opacity:1;transform:translateY(0)}
.scard:hover .cta{opacity:1;transform:translateY(0);visibility:visible;transition-delay:.15s}
.steps{display:flex;align-items:flex-start;justify-content:center;gap:0;max-width:900px;margin:0 auto}
.step{flex:1;text-align:center;position:relative;padding:0 8px}
.step .si{width:36px;height:36px;border-radius:50%;border:2px solid var(--border);display:flex;align-items:center;justify-content:center;margin:0 auto 12px;font-size:13px;font-weight:600;color:var(--meta);transition:all .4s;position:relative;background:var(--bg)}
.step.act .si{border-color:var(--coral);color:var(--coral);background:rgba(255,111,74,.06)}
.step.act .si::after{content:'';position:absolute;inset:-4px;border-radius:50%;background:rgba(255,111,74,.1);animation:sgP 2s ease-in-out infinite}
.step.done .si{border-color:var(--coral);background:var(--coral);color:var(--bg)}
.step .scn{position:absolute;top:18px;right:-50%;height:2px;background:var(--border);width:100%;z-index:-1}
.step.done .scn,.step.act .scn{background:linear-gradient(90deg,var(--coral),var(--border))}
.step h4{font-size:14px;font-weight:600;margin-bottom:4px;letter-spacing:-.02em}
.step p{font-size:12px;color:var(--meta);font-weight:300;max-width:160px;margin:0 auto}
@keyframes sgP{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(1.3)}}
.ide-w{max-width:840px;margin:40px auto 0;border-radius:12px;overflow:hidden;border:1px solid var(--border);background:#1e1e1e;box-shadow:0 16px 64px rgba(0,0,0,.4)}
.ide-w .it{display:flex;align-items:center;height:38px;background:#2d2d2d;border-bottom:1px solid #1e1e1e;padding:0 16px;position:relative}
.ide-w .it .id{display:flex;gap:8px;flex-shrink:0}.ide-w .it .id span{width:12px;height:12px;border-radius:50%}
.ide-w .it .id .dr{background:#ff5f56}.ide-w .it .id .dy{background:#ffbd2e}.ide-w .it .id .dg{background:#27c93f}
.ide-w .it .itl{position:absolute;left:50%;transform:translateX(-50%);font-size:12px;color:rgba(255,255,255,.4);font-family:var(--fm);white-space:nowrap}
.ide-w .ib{display:flex;min-height:300px}.ide-w .is{width:180px;background:#252526;border-right:1px solid #1e1e1e;padding:8px 0;flex-shrink:0}
.ide-w .is .fl{display:flex;align-items:center;gap:6px;padding:4px 16px;font-size:12px;color:rgba(255,255,255,.5);cursor:default;font-family:var(--fm);transition:color .15s;position:relative}
.ide-w .is .fl:hover{color:rgba(255,255,255,.7)}.ide-w .is .fl.act{color:var(--fg);background:rgba(255,255,255,.04)}
.ide-w .is .fl.act::before{content:'';position:absolute;left:0;top:0;bottom:0;width:2px;background:var(--coral)}
.ide-w .is .fl .ic{font-size:10px;width:16px;text-align:center;flex-shrink:0;opacity:.5}
.ide-w .ed{flex:1;background:#1e1e1e;padding:12px 0;overflow-x:auto}
.ide-w .ed pre{margin:0;padding:0 16px;font-family:var(--fm);font-size:12px;line-height:1.7;color:#d4d4d4;white-space:pre;tab-size:2}
.ide-w .ed pre .ln{display:table-row}
.ide-w .ed pre .ln .nn{display:table-cell;text-align:right;padding-right:20px;color:rgba(255,255,255,.15);user-select:none;width:32px;min-width:32px;font-size:11px}
.ide-w .ed pre .ln .nc{display:table-cell}
.ide-w .ed pre .cm{color:#6a9955}.ide-w .ed pre .kw{color:#569cd6}.ide-w .ed pre .str{color:#ce9178}.ide-w .ed pre .fn{color:#dcdcaa}.ide-w .ed pre .nm{color:#b5cea8}.ide-w .ed pre .op{color:#d4d4d4}.ide-w .ed pre .tag{color:#569cd6}.ide-w .ed pre .val{color:#ce9178}
.ide-w .ed .icr{display:inline-block;width:2px;height:14px;background:var(--coral);animation:bl 1s step-end infinite;vertical-align:text-bottom;margin-left:1px}
.ide-w .st{display:flex;align-items:center;height:22px;background:#007acc;padding:0 12px;gap:16px;font-size:11px;color:rgba(255,255,255,.7);font-family:var(--fm)}
.mw{overflow:hidden;padding:40px 0;-webkit-mask-image:linear-gradient(to right,transparent,black 12.5%,black 87.5%,transparent);mask-image:linear-gradient(to right,transparent,black 12.5%,black 87.5%,transparent)}
.mw .mt{display:flex;gap:48px;align-items:center;width:fit-content;animation:mq 35s linear infinite}
.mw .mt .ml{display:flex;align-items:center;gap:10px;padding:0 24px;white-space:nowrap;font-size:14px;font-weight:500;color:var(--meta)}
.mw .mt .ml .ic svg{width:24px;height:24px;flex-shrink:0;opacity:.4}
@keyframes mq{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
.ag{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:16px}
.ac{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-md);padding:20px;transition:all .35s var(--e-o);cursor:default;position:relative;overflow:hidden}
.ac::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--coral),var(--amber));transform:scaleX(0);transform-origin:left;transition:transform .4s var(--e-o)}
.ac:hover::before{transform:scaleX(1)}.ac:hover{border-color:rgba(255,111,74,.2);box-shadow:0 12px 40px rgba(0,0,0,.3);transform:translateY(-4px)}
.ac .ci{width:40px;height:40px;margin-bottom:12px;border-radius:var(--r-sm);background:var(--a-sub);display:flex;align-items:center;justify-content:center}
.ac .ci svg{width:20px;height:20px;color:var(--coral)}.ac h3{font-size:15px;font-weight:600;margin-bottom:2px}
.ac .ar{font-size:11px;color:var(--coral);font-weight:600;margin-bottom:8px;text-transform:uppercase;letter-spacing:.06em}
.ac p{font-size:13px;color:var(--muted);line-height:1.5}
.w3g{display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:16px}
.w3c{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-md);padding:24px;transition:all .35s var(--e-o);position:relative;overflow:hidden}
.w3c::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--coral),var(--amber));transform:scaleX(0);transform-origin:left;transition:transform .4s var(--e-o)}
.w3c:hover::before{transform:scaleX(1)}.w3c:hover{border-color:rgba(255,111,74,.2);box-shadow:0 12px 40px rgba(0,0,0,.3);transform:translateY(-4px)}
.w3c .wn{font-size:40px;font-weight:700;color:var(--a-sub);line-height:1;margin-bottom:8px;font-family:var(--fd)}
.w3c h3{font-size:17px;font-weight:600;margin-bottom:2px}
.w3c .wt{display:inline-block;font-size:10px;text-transform:uppercase;letter-spacing:.08em;font-weight:600;color:var(--coral);margin-bottom:8px}
.w3c p{font-size:13px;color:var(--muted);line-height:1.5;margin-bottom:12px}
.w3c .wf{list-style:none;padding:0;margin:0}.w3c .wf li{font-size:13px;padding:4px 0;color:var(--fg);display:flex;align-items:center;gap:8px}
.w3c .wf li::before{content:">";color:var(--coral);font-weight:600;font-family:var(--fm)}
.w3c .wct{display:inline-block;margin-top:12px;padding:8px 16px;background:var(--coral);color:#fff;border-radius:var(--r-sm);font-size:13px;font-weight:500;text-decoration:none;transition:all .2s}
.w3c .wct:hover{background:var(--crimson);transform:translateY(-1px)}
.pg2{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px}
.pc{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-md);padding:20px;text-align:center;transition:all .3s var(--e-o)}
.pc:hover{border-color:rgba(255,111,74,.2);box-shadow:0 12px 40px rgba(0,0,0,.3);transform:translateY(-4px)}
.pc .pi{width:48px;height:48px;margin:0 auto 12px;border-radius:var(--r-sm)}.pc h4{font-size:15px;font-weight:600}.pc p{font-size:13px;color:var(--muted);margin-top:4px}
.tg2{display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:12px}
.tc2{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-md);overflow:hidden;transition:all .3s var(--e-o);cursor:pointer}
.tc2:hover{border-color:rgba(255,111,74,.2);box-shadow:0 12px 40px rgba(0,0,0,.3);transform:translateY(-4px)}
.tc2 .td{height:80px;background:var(--sf2);display:flex;align-items:center;justify-content:center;font-size:28px;color:var(--meta);position:relative}
.tc2 .td .pl{font-size:11px;color:var(--muted);font-weight:500;text-transform:uppercase;letter-spacing:.04em}
.tc2 .tb2{padding:12px}.tc2 .tb2 h4{font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.tc2 .tb2 .tag2{display:inline-block;font-size:9px;color:var(--coral);font-weight:600;text-transform:uppercase;letter-spacing:.06em;margin-top:2px}
.modal{position:fixed;inset:0;z-index:200;background:rgba(0,0,0,.7);backdrop-filter:blur(8px);padding:24px;opacity:0;visibility:hidden;transition:all .3s}.modal.vis{opacity:1;visibility:visible}
.modal .mw{max-width:1100px;margin:0 auto;background:var(--surface);border-radius:16px;overflow:hidden;height:90vh;display:flex;flex-direction:column;border:1px solid var(--border);transform:scale(.95)translateY(20px);transition:transform .3s var(--e-o)}
.modal.vis .mw{transform:scale(1)translateY(0)}
.modal .mh{display:flex;align-items:center;gap:12px;padding:14px 20px;border-bottom:1px solid var(--border)}
.modal .mh h3{font-size:15px;font-weight:600;flex:1}.modal .mh .mo{font-size:11px;color:var(--meta);font-family:var(--fm)}
.modal .mh .mc2{background:none;border:none;color:var(--muted);font-size:18px;cursor:pointer;padding:4px 8px;border-radius:6px;transition:all .2s}
.modal .mh .mc2:hover{background:rgba(255,255,255,.06);color:var(--fg)}.modal .mb{flex:1}.modal .mb iframe{width:100%;height:100%;border:none;background:#fff}
.tg{display:flex;justify-content:center;gap:24px;max-width:960px;margin:0 auto;flex-wrap:wrap}
.tc{width:270px;background:var(--surface);border:1px solid var(--border);border-radius:10px;overflow:hidden;transition:all .5s var(--e-o);cursor:pointer;position:relative}
.tc:hover{transform:translateY(-12px)scale(1.03)!important;border-color:rgba(255,111,74,.25);box-shadow:0 0 30px rgba(255,111,74,.12);z-index:10}
.tc .ts{position:absolute;inset:0;pointer-events:none;z-index:2;background:linear-gradient(to bottom,transparent,transparent 50%,rgba(0,0,0,.06)50%);background-size:100% 4px}
.tc .th{height:26px;background:rgba(255,255,255,.02);border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;padding:0 10px}
.tc .th span{font-size:8px;text-transform:uppercase;font-family:var(--fm);letter-spacing:.12em;color:var(--meta);opacity:.5}
.tc .th .pd{width:5px;height:5px;border-radius:50%;background:var(--coral);animation:pulse 1.5s ease-in-out infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.2}}
.tc .tb{padding:16px;display:flex;flex-direction:column;gap:10px;position:relative;z-index:1}
.tc .tb .tp{display:flex;align-items:center;gap:8px}
.tc .tb .tp .av{width:32px;height:32px;border-radius:5px;border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-family:var(--fm);font-size:10px;color:var(--coral);background:rgba(255,111,74,.05)}
.tc .tb .tp .nm h4{font-size:11px;font-weight:600}.tc .tb .tp .nm p{font-size:8px;color:var(--meta);text-transform:uppercase;letter-spacing:.08em}
.tc .tb .tq{border-left:2px solid rgba(255,111,74,.15);padding-left:8px}
.tc .tb .tq p{font-size:11px;color:var(--muted);line-height:1.5;font-family:var(--fm)}
.tc .tb .st{display:flex;align-items:center;gap:6px;font-size:8px;font-family:var(--fm);color:var(--meta);opacity:.5;text-transform:uppercase;letter-spacing:.05em;padding-top:6px;border-top:1px solid var(--border)}
.tc .tb .st .bar{flex:1;height:3px;border-radius:2px;background:rgba(255,255,255,.03);overflow:hidden}
.tc .tb .st .bar .fl{position:absolute;left:0;top:0;bottom:0;border-radius:2px;background:linear-gradient(90deg,var(--coral),var(--amber))}
.dsg{display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:12px}
.dsc{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-md);padding:16px;text-align:center;transition:all .3s var(--e-o)}
.dsc:hover{border-color:rgba(255,111,74,.2);box-shadow:0 8px 24px rgba(0,0,0,.3);transform:translateY(-3px)scale(1.02)}
.dsc .dsw{width:32px;height:32px;border-radius:var(--r-sm);margin:0 auto 8px;border:1px solid var(--border);transition:transform .3s var(--e-s)}
.dsc:hover .dsw{transform:scale(1.15)}.dsc h4{font-size:12px;font-weight:600}.dsc p{font-size:10px;color:var(--muted);margin-top:2px}
.pg{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-xl);padding:32px;max-width:800px;margin:0 auto}
.pg h3{font-size:18px;margin-bottom:16px}.pgg{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:8px;margin-bottom:20px}
.pgg label{display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer;padding:8px 12px;border:1px solid var(--border);border-radius:var(--r-sm);transition:all .2s var(--e-o)}
.pgg label:hover{border-color:var(--coral);transform:translateY(-1px)}
.pgg label.sel{border-color:var(--coral);background:var(--a-sub)}.pgg input{accent-color:var(--coral)}
.pg textarea{width:100%;height:200px;border:1px solid var(--border);border-radius:var(--r-sm);padding:16px;font-family:var(--fm);font-size:13px;line-height:1.6;resize:vertical;background:var(--bg);color:var(--fg)}
.pg textarea:focus{outline:none;border-color:var(--coral);box-shadow:0 0 0 3px var(--a-sub)}
.bg2{background:var(--coral);color:#fff;padding:12px 24px;border:none;border-radius:var(--r-sm);font-weight:600;font-size:15px;cursor:pointer;transition:all .25s var(--e-o);margin-bottom:16px}
.bg2:hover{background:var(--crimson);transform:translateY(-2px);box-shadow:0 4px 16px var(--a-glow)}
.bc{background:transparent;color:var(--coral);padding:8px 16px;border:1px solid var(--coral);border-radius:var(--r-sm);font-weight:500;font-size:13px;cursor:pointer;transition:all .2s;margin-left:8px}
.bc:hover{background:var(--coral);color:#fff;transform:translateY(-1px)}
.qg{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:16px}
.qc{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-md);padding:20px;transition:all .3s var(--e-o);position:relative;overflow:hidden}
.qc::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,var(--coral),var(--amber),transparent);opacity:0;transition:opacity .4s}
.qc:hover::before{opacity:1}.qc:hover{border-color:rgba(255,111,74,.2);box-shadow:0 12px 40px rgba(0,0,0,.3);transform:translateY(-3px)}
.qc .qn{width:36px;height:36px;border-radius:var(--r-p);background:linear-gradient(135deg,var(--coral),var(--amber));color:#fff;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:700;margin-bottom:12px}
.qc h4{font-size:15px;font-weight:600;margin-bottom:8px}.qc p{font-size:13px;color:var(--muted);line-height:1.5}
.qc code{font-family:var(--fm);font-size:12px;background:var(--sf2);padding:2px 6px;border-radius:4px;color:var(--coral);word-break:break-all}
.cta-g{position:relative;z-index:1;padding:80px 0;text-align:center}
.cta-g .glow-btn{position:relative;display:inline-flex;align-items:center;gap:10px;padding:16px 40px;border-radius:12px;font-size:16px;font-weight:600;text-decoration:none;border:none;cursor:pointer;color:var(--bg);background:var(--fg);overflow:hidden;transition:transform .3s}
.cta-g .glow-btn:hover{transform:translateY(-2px)}
.cta-g .glow-btn .gl{position:absolute;width:200px;height:200px;border-radius:50%;background:radial-gradient(circle,var(--coral),transparent 70%);opacity:0;pointer-events:none;transition:opacity .3s;transform:translate(-50%,-50%)}
.cta-g .glow-btn:hover .gl{opacity:.8}.cta-g .glow-btn span{position:relative;z-index:1}
.cta-g .glow-btn svg{width:18px;height:18px;position:relative;z-index:1}
.vg{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;max-width:960px;margin:0 auto}
.vc{background:var(--surface);border:1px solid var(--border);border-radius:14px;overflow:hidden;transition:all .4s var(--e-o);cursor:default;position:relative}
.vc::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,var(--coral),var(--amber),transparent);opacity:0;transition:opacity .4s}
.vc:hover{border-color:rgba(255,111,74,.2);transform:translateY(-4px);box-shadow:0 16px 48px rgba(0,0,0,.3)}
.vc:hover::before{opacity:1}
.vc .vb{padding:24px 24px 16px}.vc .vt{display:inline-block;font-size:9px;font-weight:600;text-transform:uppercase;letter-spacing:.12em;color:var(--coral);opacity:.6;margin-bottom:8px;font-family:var(--fm)}
.vc h4{font-size:15px;font-weight:600;letter-spacing:-.02em;margin-bottom:4px}.vc p{font-size:13px;color:var(--muted);line-height:1.5;font-weight:300}
.ft{display:flex;justify-content:center;gap:16px;flex-wrap:wrap;margin-top:24px;font-size:13px;color:var(--meta)}
.ft span{background:rgba(255,255,255,.04);padding:4px 12px;border-radius:6px;font-family:var(--fm);font-size:11px}
.ft-w{position:relative;z-index:1;background:var(--surface);border-top:1px solid var(--border);overflow:hidden}
.ft-w .ft-3d{position:absolute;inset:0;overflow:hidden;pointer-events:none;perspective:800px}
.ft-w .ft-3d .grid{position:absolute;top:-20%;left:-50%;width:200%;height:200%;background-image:linear-gradient(rgba(255,111,74,.04)1px,transparent 1px),linear-gradient(90deg,rgba(255,111,74,.04)1px,transparent 1px);background-size:36px 36px;transform:rotateX(75deg);animation:gm 8s linear infinite;mask-image:radial-gradient(ellipse at center,black 15%,transparent 75%)}
@keyframes gm{0%{transform:rotateX(75deg)translateY(0)}100%{transform:rotateX(75deg)translateY(36px)}}
.ft-w .ft-gl{position:absolute;top:0;left:50%;transform:translateX(-50%);width:50%;height:1px;background:linear-gradient(90deg,transparent,rgba(255,111,74,.3),transparent);filter:blur(2px)}
.ft-w .ft-i{position:relative;z-index:2;max-width:var(--c);margin:0 auto;padding:48px 32px 32px}
.ft-w .ft-gr{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:40px;margin-bottom:36px}
.ft-w .ft-br{display:flex;flex-direction:column;gap:12px}
.ft-w .ft-br .lg{display:flex;align-items:center;gap:8px;font-size:15px;font-weight:600;color:var(--fg);text-decoration:none}
.ft-w .ft-br .lg .dm{width:16px;height:16px;background:linear-gradient(135deg,var(--coral),var(--amber));clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%)}
.ft-w .ft-br p{font-size:12px;color:var(--meta);line-height:1.5;max-width:220px}
.ft-w .ft-co h4{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.12em;color:var(--muted);margin-bottom:14px}
.ft-w .ft-co ul{list-style:none;display:flex;flex-direction:column;gap:8px}
.ft-w .ft-co ul a{font-size:12px;color:var(--meta);text-decoration:none;transition:color .2s}
.ft-w .ft-co ul a:hover{color:var(--coral)}
.ft-w .ft-bo{border-top:1px solid var(--border);padding-top:20px;display:flex;align-items:center;justify-content:space-between;font-size:12px;color:var(--meta)}
.ft-w .ft-bo .sc{display:flex;gap:10px}
.ft-w .ft-bo .sc a{color:var(--meta);transition:color .2s,transform .2s;display:flex}
.ft-w .ft-bo .sc a:hover{color:var(--coral);transform:scale(1.15)}
.rv{opacity:0;transform:translateY(20px);transition:opacity .7s var(--e-o),transform .7s var(--e-o)}
.rv.vis{opacity:1;transform:translateY(0)}
@media(max-width:768px){
  .c{padding:0 20px}.nv .pi{padding:8px 16px;margin:0 12px;flex-wrap:wrap;justify-content:center}
  .nv .lk{display:none}.nm{display:block}
  .nv .nr.op .lk{display:flex;position:absolute;top:100%;left:12px;right:12px;background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:8px;flex-direction:column;box-shadow:0 8px 40px rgba(0,0,0,.5)}
  .hero{padding:100px 0 40px}.hl{font-size:30px!important}.sub{font-size:14px}
  .bts{flex-direction:column;align-items:stretch}.btn-k{justify-content:center}
  .cmd{margin:0 12px 24px;border-radius:12px}.cmd .r{padding:8px 16px}.cmd .r .sc{display:none}.cmd .ft{flex-direction:column;gap:4px}
  .badge-ph{right:12px;bottom:12px;padding:10px 12px}.cg{gap:32px}.cg .c .num{font-size:32px}
  .sc-gr{min-height:400px}.scard{width:220px;height:340px}.scard .b{padding:16px}.scard .b .iw{height:80px}.scard .ct{font-size:18px}.scard .ds{font-size:12px}
  .steps{flex-direction:column;padding:0 20px}.step{display:flex;gap:16px;text-align:left;padding:16px 0}.step .scn{display:none}.step .si{margin:0;flex-shrink:0}.step p{max-width:none}
  .ide-w{margin:0;border-radius:10px}.ide-w .is{display:none}.ide-w .ed pre{font-size:11px}.ide-w .st{gap:8px;font-size:10px;overflow-x:auto}.ide-w .st span:not(:first-child):not(:last-child){display:none}
  .vg{grid-template-columns:1fr 1fr}.ag{grid-template-columns:1fr 1fr}.tg2{grid-template-columns:repeat(auto-fill,minmax(140px,1fr))}
  .dsg{grid-template-columns:repeat(auto-fill,minmax(100px,1fr))}.pgg{grid-template-columns:repeat(auto-fill,minmax(150px,1fr))}.ft-w .ft-gr{grid-template-columns:1fr 1fr;gap:28px}
}
@media(max-width:480px){
  .hl{font-size:24px!important}.sub{font-size:13px}.cmd .inp{padding:12px 16px}.cmd .r .rl .ra{display:none}
  .vg{grid-template-columns:1fr}.ag{grid-template-columns:1fr}.cg{gap:24px}.cg .c .num{font-size:26px}
  section{padding:48px 0}.sc-gr{min-height:300px}.scard{width:180px;height:300px}.scard .b{padding:12px}.scard .b .iw{height:60px}
  .scard .ct{font-size:15px}.scard .ds{font-size:11px}.scard .cta button{padding:8px;font-size:10px}.ft-w .ft-gr{grid-template-columns:1fr}.pgg{grid-template-columns:1fr}
}
</style>
</head>
<body>
"@
Set-Content -Path $p -Value $h1 -NoNewline
"Part 1 written"

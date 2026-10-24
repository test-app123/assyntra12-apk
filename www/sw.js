const V='assyntra-cache',F=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-maskable.png','./favicon.png','./apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>Promise.all(F.map(u=>fetch(u,{cache:'reload'}).then(r=>r.ok&&c.put(u,r)).catch(()=>{})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>clients.claim()))});
self.addEventListener('fetch',e=>{const q=e.request;if(q.method!=='GET')return;const u=new URL(q.url);if(u.origin!==location.origin)return;
 if(u.pathname.endsWith('version.json')){e.respondWith(fetch(q,{cache:'no-store'}));return}
 const html=q.mode==='navigate'||u.pathname.endsWith('/')||u.pathname.endsWith('.html');
 if(html){e.respondWith(fetch(q,{cache:'no-cache'}).then(r=>{if(r.ok){const c=r.clone();caches.open(V).then(x=>x.put('./index.html',c))}return r}).catch(()=>caches.match('./index.html')));return}
 e.respondWith(caches.open(V).then(c=>c.match(q).then(h=>{const n=fetch(q,{cache:'no-cache'}).then(r=>{if(r&&r.ok)c.put(q,r.clone());return r}).catch(()=>h);return h||n})))});

(function(){
var oldRoutes={"sell": "/sell.html", "buy": "/buy.html", "manage": "/property-management.html", "vacant": "/vacant-home.html", "buyout": "/buyout.html", "shop": "/shop.html"};function openLegacy(){var route=oldRoutes[location.hash.slice(1)];if(typeof route==='string')location.replace(route)}openLegacy();addEventListener('hashchange',openLegacy);
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches;


document.querySelectorAll('[data-st]').forEach(function(p){Array.prototype.forEach.call(p.children,function(c,i){c.style.setProperty('--d',(i*0.1)+'s')})});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
document.querySelectorAll('.rv,.eye').forEach(function(el){io.observe(el)});
document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.q button');if(!b)return;var o=b.getAttribute('aria-expanded')==='true';b.closest('.faq').querySelectorAll('button').forEach(function(x){x.setAttribute('aria-expanded','false')});b.setAttribute('aria-expanded',o?'false':'true')});

var cnt=document.querySelector('[data-count]'),counted=false;
function count(){if(!cnt||counted||rm)return;counted=true;var to=+cnt.dataset.count;cnt.textContent='0';setTimeout(function(){var t0=performance.now();(function f(t){var p=Math.min((t-t0)/1700,1);cnt.textContent=Math.round(to*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(t0)},1100)}
var activeHero=document.querySelector('.view.on .hero');
requestAnimationFrame(function(){setTimeout(function(){activeHero.classList.add('go');count()},80)});
var bg=document.getElementById('bg'),bgi=document.getElementById('bgi');
function lay(){var W=bg.clientWidth,H=bg.clientHeight,r=1400/994,w=Math.max(W,H*r),h=w/r,d=W>=960,tx=(d?.7:.5)*W,ty=(d?.36:.4)*H;
bgi.style.width=w+'px';bgi.style.height=h+'px';bgi.style.left=Math.min(0,Math.max(W-w,tx-.64*w))+'px';bgi.style.top=Math.min(0,Math.max(H-h,ty-.315*h))+'px'}
if(bg)lay();if(bg)addEventListener('resize',lay);
var hd=document.getElementById('hd'),pg=document.getElementById('pg'),bar=document.getElementById('bar'),art=document.getElementById('art'),tk=false;
function upd(){var y=window.scrollY,h=document.documentElement.scrollHeight-innerHeight,s=y>40;
hd.classList.toggle('sc',s);document.body.classList.toggle('sc',s);pg.style.transform='scaleX('+(h>0?y/h:0)+')';bar.classList.toggle('on',y>420);
tk=false}
addEventListener('scroll',function(){if(!tk){tk=true;requestAnimationFrame(upd)}},{passive:true});upd();
})();

(()=>{const h=document.getElementById('hd'),b=h&&h.querySelector('.mobile-menu-btn'),n=h&&h.querySelector('#site-nav');if(!h||!b||!n)return;const close=()=>{h.classList.remove('menu-open');b.setAttribute('aria-expanded','false');b.setAttribute('aria-label','メニューを開く')};b.addEventListener('click',()=>{const open=!h.classList.contains('menu-open');h.classList.toggle('menu-open',open);b.setAttribute('aria-expanded',String(open));b.setAttribute('aria-label',open?'メニューを閉じる':'メニューを開く')});n.addEventListener('click',e=>{if(e.target.closest('a'))close()});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});document.addEventListener('click',e=>{if(!h.contains(e.target))close()})})();

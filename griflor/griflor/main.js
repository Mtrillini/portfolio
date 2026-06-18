// ── CART ─────────────────────────────────────────────────────────────
let cart=[];

function openCart(){
  document.getElementById("cartSidebar").classList.add("open");
  document.getElementById("cartOverlay").classList.add("open");
  document.body.style.overflow="hidden";
}
function closeCart(){
  document.getElementById("cartSidebar").classList.remove("open");
  document.getElementById("cartOverlay").classList.remove("open");
  if(!document.getElementById("modal").classList.contains("open"))
    document.body.style.overflow="";
}

function addToCart(idx){
  const p=products[idx];
  const existing=cart.find(c=>c.idx===idx);
  if(existing){existing.qty++;}
  else{cart.push({idx,qty:1,name:p.name.replace(/<br>/g," "),price:p.price,variety:p.variety,img:p.images[0]});}
  updateCartUI();
  // feedback en botón
  const btn=document.querySelector(".modal-add");
  btn.textContent="¡Agregado!";
  setTimeout(()=>btn.textContent="Agregar al carrito",1800);
}

function removeFromCart(idx){
  cart=cart.filter(c=>c.idx!==idx);
  updateCartUI();
}

function changeQty(idx,delta){
  const item=cart.find(c=>c.idx===idx);
  if(!item)return;
  item.qty+=delta;
  if(item.qty<=0)removeFromCart(idx);
  else updateCartUI();
}

function updateCartUI(){
  const total=cart.reduce((s,c)=>{
    const n=parseInt(c.price.replace(/[^0-9]/g,""),10);
    return s+n*c.qty;
  },0);
  const count=cart.reduce((s,c)=>s+c.qty,0);

  // nav badge
  const btn=document.getElementById("cartBtn");
  btn.innerHTML=`Carrito <span class="nav-cart-count" id="cartCount">${count}</span>`;
  if(count>0){
    const badge=document.getElementById("cartCount");
    badge.classList.add("bump");
    setTimeout(()=>badge.classList.remove("bump"),300);
  }

  // items
  const container=document.getElementById("cartItems");
  const empty=document.getElementById("cartEmpty");
  const footer=document.getElementById("cartFooter");

  if(cart.length===0){
    container.innerHTML="";
    container.appendChild(empty||Object.assign(document.createElement("div"),{className:"cart-empty",innerHTML:'<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg><p>Tu carrito está vacío</p>'}));
    footer.style.display="none";
    return;
  }

  container.innerHTML="";
  cart.forEach(c=>{
    const div=document.createElement("div");
    div.className="cart-item";
    div.innerHTML=`
      <img class="cart-item-img" src="${c.img}" alt="${c.name}">
      <div class="cart-item-info">
        <div class="cart-item-name">${c.name}</div>
        <div class="cart-item-variety">${c.variety}</div>
        <div class="cart-item-price">${c.price}</div>
        <div class="cart-item-qty">
          <button class="cart-qty-btn" onclick="changeQty(${c.idx},-1)">−</button>
          <span class="cart-qty-num">${c.qty}</span>
          <button class="cart-qty-btn" onclick="changeQty(${c.idx},1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${c.idx})" title="Eliminar">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
      </button>`;
    container.appendChild(div);
  });

  document.getElementById("cartTotal").textContent="$"+total.toLocaleString("es-AR");
  footer.style.display="block";

  // WhatsApp message
  const msg=cart.map(c=>`• ${c.name} x${c.qty} (${c.price})`).join("%0A");
  document.getElementById("cartWa").href=`https://wa.me/5491161544377?text=Hola!%20Quiero%20consultar%20por:%0A${msg}`;
}
// ─────────────────────────────────────────────────────────────────────

const products=[
  {variety:"Plantas grandes - Premium",name:"Palmera Areca<br>Doble Tronco",price:"$95.000",height:"180 cm",desc:"Palmera artificial de doble tronco con hojas realistas y musgo decorativo en la base. Ideal para living, hall de entrada o terraza cubierta.",images:["images/planta1.webp","images/planta11.webp","images/planta111.webp","images/planta1111.webp"]},
  {variety:"Plantas grandes - Tropical",name:"Alocasia<br>Oreja de Elefante",price:"$64.000",height:"110 cm",desc:"Planta de hojas grandes y dramaticas, perfecta para ambientes modernos. Disponible con canasto de fibra natural o maceta de fabrica.",images:["images/planta2.webp","images/planta22.webp","images/planta222.webp"]},
  {variety:"Plantas decorativas - Nuevo",name:"Bambu<br>Decorativo",price:"$72.000",height:"150 cm",desc:"Bambu artificial de multiples canas con textura natural. Viene con maceta de cemento o maceta negra.",images:["images/planta33.webp","images/planta333.webp","images/planta3333.webp"]},
  {variety:"Plantas grandes - Bestseller",name:"Strelitzia<br>Ave del Paraiso",price:"$88.000",height:"160 cm",desc:"La planta mas elegante de nuestra coleccion. Hojas grandes y erguidas que aportan verticalidad. Disponible en 110, 140 y 160 cm.",images:["images/planta4.webp","images/planta44.webp","images/planta444.webp","images/planta4444.webp","images/planta44444.webp"]},
  {variety:"Plantas tropicales",name:"Filodendro<br>Variegado",price:"$76.000",height:"120 cm",desc:"Filodendro con hojas variegadas en tonos verdes y burgundy. Una planta de caracter unico, muy buscada para espacios con estilo.",images:["images/planta5.webp","images/planta55.webp","images/planta555.webp"]},
  {variety:"Plantas tropicales - Nuevo",name:"Thaumatophyllum<br>Premium",price:"$82.000",height:"130 cm",desc:"Planta de hojas profundamente lobuladas, muy dramatica y de gran presencia. Perfecta para ambientes amplios y modernos.",images:["images/planta6.webp","images/planta66.webp","images/planta666.webp"]},
  {variety:"Plantas clasicas",name:"Monstera<br>Deliciosa",price:"$58.000",height:"90 cm",desc:"La iconica Monstera con sus caracteristicas hojas perforadas. Disponible en version pequena para mesa o mediana para suelo.",images:["images/planta7.webp","images/planta77.webp","images/planta777.webp"]},
  {variety:"Colgantes y guias - Nuevo",name:"Pilea<br>Colgante",price:"$34.000",height:"80 cm",desc:"Guia colgante con hojas redondas texturadas. Ideal para decoracion de eventos, bodas y espacios gastronomicos. Efecto cascada muy vistoso.",images:["images/planta8.webp","images/planta88.webp","images/planta888.webp"]}
];

let curP=0,curI=0;

function openModal(idx){
  curP=idx;curI=0;
  const p=products[idx];
  document.getElementById("modalVariety").textContent=p.variety;
  document.getElementById("modalName").innerHTML=p.name;
  document.getElementById("modalPrice").textContent=p.price;
  document.getElementById("modalHeight").textContent=p.height;
  document.getElementById("modalDesc").textContent=p.desc;
  buildGallery(p);
  document.getElementById("modal").classList.add("open");
  document.body.style.overflow="hidden";
}

function buildGallery(p){
  const track=document.getElementById("galTrack");
  const thumbs=document.getElementById("galThumbs");
  track.innerHTML="";thumbs.innerHTML="";
  p.images.forEach((src,i)=>{
    const slide=document.createElement("div");
    slide.className="gal-slide";
    slide.innerHTML=`<img src="${src}" alt="foto ${i+1}" loading="lazy">`;
    track.appendChild(slide);
    const th=document.createElement("img");
    th.src=src;th.className="gal-thumb"+(i===0?" active":"");
    th.onclick=(e)=>{e.stopPropagation();goImg(i);};
    thumbs.appendChild(th);
  });
  // En desktop (2 slides visibles a la vez), rellenar si cantidad impar
  if(window.innerWidth>900&&p.images.length%2!==0){
    const filler=document.createElement("div");
    filler.className="gal-slide";
    filler.innerHTML=`<img src="${p.images[0]}" alt="" loading="lazy">`;
    track.appendChild(filler);
  }
  updateGallery();
}

function updateGallery(){
  const vp=document.getElementById("galArea");
  const slideW=window.innerWidth<=900?vp.clientWidth:vp.clientWidth/2;
  const track=document.getElementById("galTrack");
  const n=products[curP].images.length;
  const pos=((curI%n)+n)%n;
  curI=pos;
  track.style.transform=`translateX(-${pos*slideW}px)`;
  document.querySelectorAll(".gal-thumb").forEach((el,j)=>el.classList.toggle("active",j===pos));
  document.getElementById("galCounter").textContent=(pos+1)+" / "+n;
}

function goImg(i){curI=i;updateGallery();}
function nextImg(){const n=products[curP].images.length;curI=(curI+1)%n;updateGallery();}
function prevImg(){const n=products[curP].images.length;curI=(curI-1+n)%n;updateGallery();}
function closeModal(){
  document.getElementById("modal").classList.remove("open");
  document.body.style.overflow="";
  const fav=document.querySelector(".modal-fav");
  if(fav)fav.classList.remove("fav-active");
}
function openMenu(){document.getElementById("menuOv").classList.add("open");document.body.style.overflow="hidden";}
function closeMenu(){document.getElementById("menuOv").classList.remove("open");document.body.style.overflow="";}
function goTo(id){document.getElementById(id).scrollIntoView({behavior:"smooth"});}

document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeModal();closeMenu();closeCart();}if(e.key==="ArrowRight")nextImg();if(e.key==="ArrowLeft")prevImg();});

// Gallery click left/right to navigate
document.getElementById("galArea").addEventListener("click",function(e){
  if(e.target.closest(".gal-prev,.gal-next,.gal-close,.gal-thumbs"))return;
  const rect=this.getBoundingClientRect();
  if(e.clientX-rect.left<rect.width/2)prevImg();else nextImg();
});

// Heart toggle
document.querySelector(".modal-fav").addEventListener("click",function(){
  this.classList.toggle("fav-active");
});

// Hero video slow playback
const heroVid=document.getElementById("heroVideo");
if(heroVid){heroVid.playbackRate=1.0;heroVid.addEventListener("loadedmetadata",()=>heroVid.playbackRate=1.0);}

// Cursor
const cur=document.getElementById("cur"),ring=document.getElementById("curRing"),label=document.getElementById("curLabel");
let mx=0,my=0,rx=0,ry=0;
document.addEventListener("mousemove",e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+"px";cur.style.top=my+"px";label.style.left=mx+"px";label.style.top=my+"px";});
(function anim(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;ring.style.left=rx+"px";ring.style.top=ry+"px";requestAnimationFrame(anim);})();
document.querySelectorAll(".pcard,.strip-card").forEach(el=>{
  el.addEventListener("mouseenter",()=>{ring.classList.add("hover");label.classList.add("show");});
  el.addEventListener("mouseleave",()=>{ring.classList.remove("hover");label.classList.remove("show");});
});

// Scroll
let lastScrollY=0;
const mainNav=document.getElementById("mainNav");
window.addEventListener("scroll",()=>{
  const t=document.getElementById("heroTitle");
  if(t&&window.scrollY<window.innerHeight) t.style.transform=`translateY(${window.scrollY*.22}px) scale(${1-window.scrollY*.00022})`;
  if(window.innerWidth<=900&&mainNav){
    if(window.scrollY>lastScrollY&&window.scrollY>80) mainNav.classList.add("nav-hidden");
    else mainNav.classList.remove("nav-hidden");
    lastScrollY=window.scrollY;
  }
});

// Scroll reveal
const obs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible");});},{threshold:.08});
document.querySelectorAll(".reveal").forEach(el=>obs.observe(el));

// Strip hover expand
document.querySelectorAll(".strip-card").forEach(c=>{
  c.addEventListener("mouseenter",()=>{
    document.querySelectorAll(".strip-card").forEach(x=>x.classList.remove("active"));
    c.classList.add("active");
  });
});


// Strip mobile: activar card centrada al scrollear
if(window.innerWidth<=900){
  const stripCards=document.querySelectorAll(".strip-card");
  const stripEl=document.getElementById("mainStrip");
  function activateCenteredCard(){
    const stripCenter=stripEl.getBoundingClientRect().left+stripEl.clientWidth/2;
    let closest=null,minDist=Infinity;
    stripCards.forEach(c=>{
      const r=c.getBoundingClientRect();
      const dist=Math.abs(r.left+r.width/2-stripCenter);
      if(dist<minDist){minDist=dist;closest=c;}
    });
    if(closest){
      stripCards.forEach(c=>c.classList.remove("active"));
      closest.classList.add("active");
    }
  }
  stripEl.addEventListener("scroll",activateCenteredCard,{passive:true});
  activateCenteredCard();
}

// Strip drag scroll
const strip=document.getElementById("mainStrip");
let isDown=false,sx,sl;
strip.addEventListener("mousedown",e=>{isDown=true;sx=e.pageX-strip.offsetLeft;sl=strip.scrollLeft;});
document.addEventListener("mouseup",()=>isDown=false);
strip.addEventListener("mousemove",e=>{if(!isDown)return;e.preventDefault();strip.scrollLeft=sl-(e.pageX-strip.offsetLeft-sx)*1.4;});

// Newsletter form
const newsForm=document.getElementById("newsForm");
if(newsForm){
  newsForm.addEventListener("submit",e=>{
    e.preventDefault();
    const input=newsForm.querySelector(".news-input");
    if(input.value.trim()){
      input.value="";
      const btn=newsForm.querySelector(".news-btn");
      btn.textContent="¡Suscripto!";
      setTimeout(()=>btn.textContent="Suscribirme",3000);
    }
  });
}

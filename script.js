const CONFIG={WHATSAPP_NUMBER:"",INSTAGRAM_URL:"",GOOGLE_MAPS_URL:""};

const products={
 semerbak:{label:"SEMERBAK COFFEE",title:"Menu Minuman Kopi",description:"Pilihan menu kopi untuk berbagai selera.",items:[
  ["Americano","Kopi hitam dengan karakter ringan.","assets/products/kopiena-americano.png","Rp 5.000"],
  ["Kopi Susu","Kopi susu creamy untuk teman aktivitas.","assets/products/kopiena-coffe-susu-gula-aren.png","Mulai Rp 7.000"],
  ["Kopi Susu Gula Aren","Kopi, susu, dan gula aren.","assets/products/kopiena-coffe-susu-gula-aren.png","Mulai Rp 8.000"],
  ["Coffe Latte","Espresso dan susu dengan tekstur lembut.","assets/products/kopiena-coffe-latte.png","Mulai Rp 12.000"],
  ["Vanilla Latte","Latte creamy dengan aroma vanilla.","assets/products/kopiena-vanilla-latte.png","Mulai Rp 13.000"],
  ["Mocachino","Kopi, susu, dan cokelat.","assets/products/kopiena-mochaccino.png","Mulai Rp 13.000"],
  ["Coconut Aren Latte","Latte dengan kelapa dan gula aren.","assets/products/kopiena-coconut-aren-latte.png","Mulai Rp 13.000"],
  ["Butterschoot Latte","Latte dengan rasa butterscotch.","assets/products/kopiena-butter-scotch-latte.png","Mulai Rp 13.000"]
 ]},
 matcha:{label:"MATCHA QUE",title:"Pilihan Menu Matcha",description:"Beragam rasa matcha dengan karakter yang berbeda.",items:[
  ["Pure Matcha","Matcha dengan rasa bold.","assets/products/matchaque-pure-matcha.png","Harga akan diisi"],
  ["Matcha Latte","Matcha creamy berpadu susu.","assets/products/matchaque-matcha-latte.png","Harga akan diisi"],
  ["Matcha Creamy","Tekstur creamy dengan rasa matcha.","assets/products/matchaque-matcha-creamy.png","Harga akan diisi"],
  ["Strawberry Matcha","Matcha dengan sentuhan strawberry.","assets/products/matchaque-strawberry-matcha.png","Harga akan diisi"],
  ["Matcha Cookies","Matcha dengan sensasi cookies.","assets/products/matchaque-matcha-cookies.png","Harga akan diisi"],
  ["Choco Matcha","Perpaduan cokelat dan matcha.","assets/products/matchaque-choco-matcha.png","Harga akan diisi"],
  ["Red Velvet Cloud","Matcha dengan rasa red velvet.","assets/products/matchaque-red-velvet-cloud.png","Harga akan diisi"],
  ["Honey Matcha","Matcha dengan sentuhan madu.","assets/products/matchaque-honey-matcha.png","Harga akan diisi"]
 ]},
 esteh:{label:"ES TEH",title:"Pilihan Menu Es Teh",description:"Minuman teh yang sederhana, segar, dan mudah dinikmati.",items:[
  ["Es Teh Original","Teh klasik yang segar.","assets/products/es-teh-concept.png","Harga akan diisi"],
  ["Es Teh Lemon","Teh dengan sentuhan lemon.","assets/products/es-teh-concept.png","Harga akan diisi"],
  ["Es Teh Susu","Teh dengan tambahan susu.","assets/products/es-teh-concept.png","Harga akan diisi"],
  ["Es Teh Jelly","Teh dengan topping jelly.","assets/products/es-teh-concept.png","Harga akan diisi"]
 ]},
 sempol:{label:"SEMPOL",title:"Pilihan Menu Sempol",description:"Pilihan jajanan gurih untuk melengkapi usaha kulinermu.",items:[
  ["Sempol Original","Rasa gurih yang sederhana.","assets/products/sempol-trio.png","Harga akan diisi"],
  ["Sempol Keju","Sempol dengan isian keju.","assets/products/sempol-trio.png","Harga akan diisi"],
  ["Sempol Pedas","Pilihan untuk penyuka rasa pedas.","assets/products/sempol-trio.png","Harga akan diisi"],
  ["Sempol Mozzarella","Sempol dengan mozzarella.","assets/products/sempol-trio.png","Harga akan diisi"]
 ]}
};

const packageDetails={
 "Portable":["Harga paket: Rp 4,69 jt","Fasilitas: [Fasilitas akan diisi]","Ketentuan: [Ketentuan akan diisi]"],
 "Platinum":["Harga paket: Rp 7,45 jt","Fasilitas: [Fasilitas akan diisi]","Ketentuan: [Ketentuan akan diisi]"],
 "Premium":["Harga paket: Rp 21,97 jt","Fasilitas: [Fasilitas akan diisi]","Ketentuan: [Ketentuan akan diisi]"],
 "Neon Box Premium":["Harga paket: Rp 30,9 jt","Fasilitas: [Fasilitas akan diisi]","Ketentuan: [Ketentuan akan diisi]"]
};

const grid=document.querySelector('#productGrid');
const label=document.querySelector('#productBrandLabel');
const title=document.querySelector('#productTitle');
const desc=document.querySelector('#productDescription');
function renderBrand(key){
 const data=products[key];
 label.textContent=data.label;title.textContent=data.title;desc.textContent=data.description;
 grid.innerHTML=data.items.map(([name,text,img,price])=>`<article class="product-card"><div class="product-photo"><img src="${img}" alt="${name}" loading="lazy"></div><div class="product-info"><h4>${name}</h4><p>${text}</p><div class="price">${price}</div></div></article>`).join('');
 document.querySelectorAll('.brand-card').forEach(b=>b.classList.toggle('active',b.dataset.brand===key));
}

document.querySelectorAll('.brand-card').forEach(card=>card.addEventListener('click',()=>{
 renderBrand(card.dataset.brand);
 document.querySelector('#products').scrollIntoView({behavior:'smooth'});
}));
renderBrand('semerbak');

const dialog=document.querySelector('#packageDialog');
const dialogContent=document.querySelector('#packageDialogContent');
document.querySelectorAll('.detail-btn').forEach(btn=>btn.addEventListener('click',()=>{
 const name=btn.dataset.package;
 dialogContent.innerHTML=`<div class="modal-content"><span class="eyebrow red-text">DETAIL PAKET</span><h3>${name}</h3><ul>${packageDetails[name].map(x=>`<li>${x}</li>`).join('')}</ul><a class="btn btn-red" href="#consultation" onclick="dialog.close()">Tanya Paket</a></div>`;
 dialog.showModal();
}));
document.querySelector('#closeDialog').addEventListener('click',()=>dialog.close());

document.querySelector('#consultForm').addEventListener('submit',e=>{
 e.preventDefault();
 const f=new FormData(e.currentTarget);
 const msg=`Halo Semerbak Group 👋\n\nSaya tertarik dengan program kemitraan.\n\nBrand yang saya minati: ${f.get('brand')}\nPaket yang saya minati: ${f.get('package')||'-'}\nLokasi: ${f.get('location')}\n\nSaya ingin mendapatkan informasi lebih lanjut mengenai harga, fasilitas, dan proses kemitraannya.\n\nNama: ${f.get('name')}\nNomor WhatsApp: ${f.get('phone')}\nCatatan: ${f.get('note')||'-'}`;
 const n=CONFIG.WHATSAPP_NUMBER.replace(/\D/g,'');
 if(!n){alert('Isi CONFIG.WHATSAPP_NUMBER di script.js terlebih dahulu.');return;}
 window.open(`https://wa.me/${n}?text=${encodeURIComponent(msg)}`,'_blank','noopener');
});

// ====== CONFIG ======
const WHATSAPP_NUMBER = "5585996484014"; // +55 85 99648-4014

function waLink(message) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

// (Opcional) coloque seu instagram aqui:
const INSTAGRAM_URL = "https://instagram.com/dybabordados";

// ====== PRODUCTS ======
const products = [
  {
    id: "ecobag-margarida",
    name: "Ecobag Margarida",
    price: 30.0,
    image: "./assets/ecobag-margarida.png",
    description: "Algodão cru + bordado delicado. Minimalista, leve e versátil.",
    message: "Olá! Quero comprar a Ecobag Margarida (R$ 30,00). Pode me ajudar com o pagamento e entrega?"
  },
  {
    id: "ecobag-girassol",
    name: "Ecobag Girassol",
    price: 30.0,
    image: "./assets/ecobag-girassol.png",
    description: "Um clássico solar, com presença e delicadeza no dia a dia.",
    message: "Olá! Quero comprar a Ecobag Girassol (R$ 30,00). Pode me ajudar com o pagamento e entrega?"
  },
  {
    id: "ecobag-lirio",
    name: "Ecobag Minimal Lírio",
    price: 30.0,
    image: "./assets/ecobag-lirio.png",
    description: "Bordado minimalista e elegante. Um detalhe autoral e clean.",
    message: "Olá! Quero comprar a Ecobag Minimal Lírio (R$ 30,00). Pode me ajudar com o pagamento e entrega?"
  },
  {
    id: "necessaire",
    name: "Necessaire Margaridas",
    price: 20.0,
    image: "./assets/necessaire.png",
    description: "Compacta e linda. Perfeita pra rotina: make, itens pessoais e mais.",
    message: "Olá! Quero comprar a Necessaire Margaridas (R$ 20,00). Pode me ajudar com o pagamento e entrega?"
  },
  {
    id: "kit-margaridas",
    name: "Kit Margaridas Delicadas",
    price: 45.0,
    image: "./assets/kit-margaridas.png",
    description: "Ecobag + necessaire (kit). Mais vantagem, mesma estética premium.",
    message: "Olá! Quero comprar o Kit Margaridas Delicadas (R$ 45,00). Pode me ajudar com o pagamento e entrega?"
  }
];

// ====== RENDER ======
function formatBRL(value) {
  return `R$ ${value.toFixed(2).replace(".", ",")}`;
}

function renderProducts() {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  grid.innerHTML = products.map(p => {
    return `
      <article class="card">
        <img class="card__img" src="${p.image}" alt="${p.name}" loading="lazy" />
        <div class="card__body">
          <div class="card__title">
            <h3>${p.name}</h3>
            <div class="price">${formatBRL(p.price)}</div>
          </div>
          <p class="card__desc">${p.description}</p>
          <div class="card__actions">
            <a class="btn btn--primary" href="${waLink(p.message)}" target="_blank" rel="noopener">
              Comprar no WhatsApp
            </a>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// ====== UX ======
function bindScrollButtons() {
  document.querySelectorAll("[data-scroll]").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-scroll");
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function bindFooterLinks() {
  const ig = document.getElementById("footerInstagram");
  if (ig) ig.href = INSTAGRAM_URL;

  const wa = document.getElementById("footerWhatsapp");
  if (wa) wa.href = waLink("Olá! Vim pelo site da Dyba. Quero tirar uma dúvida e comprar uma peça.");

  const waFloat = document.getElementById("waFloat");
  if (waFloat) waFloat.href = waLink("Olá! Vim pelo site da Dyba. Quero comprar uma peça.");
}

function bindCtaBuy() {
  const btn = document.getElementById("ctaBuy");
  if (!btn) return;
  btn.addEventListener("click", () => {
    window.open(waLink("Olá! Quero comprar uma ecobag (R$ 30,00). Pode me ajudar com o pagamento e entrega?"), "_blank", "noopener");
  });
}

// ====== INIT ======
renderProducts();
bindScrollButtons();
bindFooterLinks();
bindCtaBuy();

/* ============================================
   TechNova Store - app.js
   TIP: To use a real photo, set the "photo" field
   of a product to an image path, e.g. "images/laptop.jpg".
   If "photo" is empty, the built-in illustration is used.
   ============================================ */

// ---------- Product illustrations (SVG) ----------
const art = {
  laptop: () => `
    <svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lpScreen" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#6366f1"/><stop offset="1" stop-color="#22d3ee"/></linearGradient>
        <linearGradient id="lpBase" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#475569"/><stop offset="1" stop-color="#1e293b"/></linearGradient>
      </defs>
      <ellipse cx="150" cy="200" rx="120" ry="9" fill="#0f172a" opacity=".15"/>
      <rect x="52" y="22" width="196" height="132" rx="10" fill="#0f172a"/>
      <rect x="60" y="30" width="180" height="116" rx="5" fill="url(#lpScreen)"/>
      <circle cx="120" cy="88" r="26" fill="#fff" opacity=".18"/>
      <circle cx="185" cy="70" r="16" fill="#fff" opacity=".18"/>
      <path d="M20 168 L52 154 H248 L280 168 V176 Q280 184 270 184 H30 Q20 184 20 176 Z" fill="url(#lpBase)"/>
      <rect x="125" y="168" width="50" height="6" rx="3" fill="#0f172a" opacity=".5"/>
      <rect x="40" y="157" width="220" height="3" rx="1.5" fill="#f43f5e"/>
    </svg>`,
  phone: () => `
    <svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="phScreen" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f472b6"/><stop offset="1" stop-color="#6366f1"/></linearGradient>
      </defs>
      <ellipse cx="150" cy="208" rx="70" ry="7" fill="#0f172a" opacity=".15"/>
      <rect x="98" y="8" width="104" height="198" rx="20" fill="#1e293b"/>
      <rect x="104" y="14" width="92" height="186" rx="15" fill="url(#phScreen)"/>
      <rect x="132" y="19" width="36" height="9" rx="4.5" fill="#0f172a"/>
      <circle cx="150" cy="90" r="24" fill="#fff" opacity=".25"/>
      <rect x="118" y="130" width="64" height="8" rx="4" fill="#fff" opacity=".5"/>
      <rect x="126" y="146" width="48" height="8" rx="4" fill="#fff" opacity=".35"/>
      <rect x="196" y="60" width="3" height="28" rx="1.5" fill="#475569"/>
    </svg>`,
  headphones: () => `
    <svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="hpCup" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8b5cf6"/><stop offset="1" stop-color="#4f46e5"/></linearGradient>
      </defs>
      <ellipse cx="150" cy="205" rx="100" ry="8" fill="#0f172a" opacity=".15"/>
      <path d="M70 130 V105 Q70 30 150 30 Q230 30 230 105 V130" fill="none" stroke="#1e293b" stroke-width="14" stroke-linecap="round"/>
      <path d="M70 120 V105 Q70 42 150 42 Q230 42 230 105 V120" fill="none" stroke="#475569" stroke-width="4" stroke-linecap="round" opacity=".6"/>
      <rect x="48" y="112" width="46" height="78" rx="22" fill="url(#hpCup)"/>
      <rect x="206" y="112" width="46" height="78" rx="22" fill="url(#hpCup)"/>
      <rect x="58" y="126" width="26" height="50" rx="13" fill="#1e1b4b" opacity=".55"/>
      <rect x="216" y="126" width="26" height="50" rx="13" fill="#1e1b4b" opacity=".55"/>
      <circle cx="71" cy="151" r="4" fill="#22d3ee"/><circle cx="229" cy="151" r="4" fill="#22d3ee"/>
    </svg>`,
  watch: () => `
    <svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="swStrap" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#334155"/><stop offset="1" stop-color="#0f172a"/></linearGradient>
        <linearGradient id="swFace" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0ea5e9"/><stop offset="1" stop-color="#312e81"/></linearGradient>
      </defs>
      <rect x="112" y="4" width="76" height="70" rx="12" fill="url(#swStrap)"/>
      <rect x="112" y="146" width="76" height="70" rx="12" fill="url(#swStrap)"/>
      <rect x="82" y="56" width="136" height="108" rx="30" fill="#1e293b"/>
      <rect x="90" y="64" width="120" height="92" rx="24" fill="url(#swFace)"/>
      <rect x="216" y="94" width="8" height="24" rx="4" fill="#475569"/>
      <text x="150" y="118" text-anchor="middle" font-family="Segoe UI, Arial" font-weight="700" font-size="30" fill="#fff">10:09</text>
      <circle cx="112" cy="140" r="5" fill="#f43f5e"/><circle cx="150" cy="140" r="5" fill="#facc15"/><circle cx="188" cy="140" r="5" fill="#22c55e"/>
      <path d="M110 84 Q150 72 190 84" stroke="#fff" stroke-width="3" fill="none" opacity=".5" stroke-linecap="round"/>
    </svg>`,
  keyboard: () => {
    let keys = "";
    const colors = ["#e2e8f0", "#cbd5e1"];
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 12; c++) {
        const x = 40 + c * 18.5 + (r % 2) * 4;
        const y = 66 + r * 22;
        keys += `<rect x="${x}" y="${y}" width="15" height="17" rx="3" fill="${colors[(r + c) % 2]}"/>`;
      }
    }
    return `
    <svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="kbRgb" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#f43f5e"/><stop offset=".35" stop-color="#facc15"/>
          <stop offset=".65" stop-color="#22d3ee"/><stop offset="1" stop-color="#a855f7"/>
        </linearGradient>
      </defs>
      <ellipse cx="150" cy="186" rx="130" ry="9" fill="#0f172a" opacity=".15"/>
      <rect x="20" y="44" width="260" height="124" rx="14" fill="#1e293b"/>
      <rect x="20" y="44" width="260" height="6" rx="3" fill="url(#kbRgb)"/>
      <rect x="30" y="56" width="240" height="104" rx="8" fill="#0f172a"/>
      ${keys}
      <rect x="76" y="154" width="148" height="0" rx="3" fill="#e2e8f0"/>
      <rect x="82" y="64" width="0" height="0"/>
      <rect x="20" y="162" width="260" height="6" rx="3" fill="url(#kbRgb)" opacity=".85"/>
    </svg>`;
  },
  mouse: () => `
    <svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="msBody" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#334155"/><stop offset="1" stop-color="#0f172a"/></linearGradient>
        <linearGradient id="msRgb" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f43f5e"/><stop offset=".5" stop-color="#22d3ee"/><stop offset="1" stop-color="#a855f7"/></linearGradient>
      </defs>
      <ellipse cx="150" cy="206" rx="62" ry="7" fill="#0f172a" opacity=".15"/>
      <path d="M150 8 C206 8 220 56 220 120 C220 176 196 204 150 204 C104 204 80 176 80 120 C80 56 94 8 150 8 Z" fill="url(#msBody)"/>
      <path d="M150 8 V84" stroke="#020617" stroke-width="3"/>
      <path d="M82 84 H218" stroke="#020617" stroke-width="3" opacity=".6"/>
      <rect x="141" y="30" width="18" height="36" rx="9" fill="#020617"/>
      <rect x="146" y="36" width="8" height="14" rx="4" fill="url(#msRgb)"/>
      <path d="M92 160 Q150 196 208 160" fill="none" stroke="url(#msRgb)" stroke-width="5" stroke-linecap="round"/>
      <rect x="84" y="108" width="10" height="30" rx="5" fill="#475569"/>
    </svg>`
};

// ---------- Product data ----------
const products = [
  {
    id: 1,
    name: "Gaming Laptop",
    price: 1299.99,
    tag: "Best Seller",
    bg: "linear-gradient(135deg,#e0e7ff,#cffafe)",
    desc: "Powerful 15.6\" laptop with a high-refresh display, fast graphics and 16GB RAM for smooth gameplay.",
    details: "Built for smooth gaming and demanding work, with a vivid high-refresh display, responsive performance and a lightweight design ready to go anywhere.",
    specs: ["15.6\" Full HD display", "16 GB memory", "Fast graphics", "Free shipping"],
    colors: [{ name: "Graphite", value: "#334155" }, { name: "Arctic Silver", value: "#cbd5e1" }, { name: "Nova Blue", value: "#6366f1" }],
    art: "laptop",
    photo: ""
  },
  {
    id: 2,
    name: "Smartphone",
    price: 799.99,
    tag: "New",
    bg: "linear-gradient(135deg,#fce7f3,#e0e7ff)",
    desc: "Sleek 6.5\" OLED smartphone with a pro-grade camera and all-day battery life.",
    details: "Capture crisp photos, enjoy rich OLED color and stay connected all day with a slim smartphone made for work, streaming and everything between.",
    specs: ["6.5\" OLED display", "Pro-grade camera", "All-day battery", "Free shipping"],
    colors: [{ name: "Starlight", value: "#e2e8f0" }, { name: "Midnight", value: "#1e293b" }, { name: "Rose", value: "#f9a8d4" }],
    art: "phone",
    photo: ""
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: 149.99,
    tag: "Hot",
    bg: "linear-gradient(135deg,#ede9fe,#dbeafe)",
    desc: "Noise-cancelling over-ear headphones with rich sound and 30 hours of playtime.",
    details: "Immerse yourself in balanced, detailed audio. Adaptive noise cancellation keeps distractions out, while plush cushions and long battery life keep you comfortable for the whole day.",
    specs: ["Active noise cancellation", "Up to 30 hours battery", "Wireless Bluetooth", "Built-in microphone"],
    colors: [{ name: "Black", value: "#1e293b" }, { name: "Lavender", value: "#a78bfa" }, { name: "Cloud", value: "#f1f5f9" }],
    art: "headphones",
    photo: ""
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 199.99,
    tag: "Popular",
    bg: "linear-gradient(135deg,#cffafe,#e0e7ff)",
    desc: "Track your fitness, heart rate and notifications with this water-resistant smartwatch.",
    details: "Keep your day in view with activity, heart-rate and sleep tracking, quick notifications and a bright display in a water-resistant design.",
    specs: ["Heart-rate tracking", "Activity and sleep insights", "Water resistant", "Smart notifications"],
    colors: [{ name: "Ocean", value: "#0284c7" }, { name: "Charcoal", value: "#334155" }, { name: "Coral", value: "#fb7185" }],
    art: "watch",
    photo: ""
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    price: 89.99,
    tag: "RGB",
    bg: "linear-gradient(135deg,#fef9c3,#fce7f3)",
    desc: "Tactile mechanical switches with customizable RGB lighting for typing and gaming.",
    details: "Enjoy satisfying, responsive keystrokes with durable mechanical switches, a compact layout and customizable RGB effects for your desk.",
    specs: ["Tactile mechanical switches", "Custom RGB lighting", "Durable keycaps", "USB-C connection"],
    colors: [{ name: "Carbon", value: "#1e293b" }, { name: "Ice", value: "#e2e8f0" }, { name: "Aurora", value: "#8b5cf6" }],
    art: "keyboard",
    photo: ""
  },
  {
    id: 6,
    name: "Gaming Mouse",
    price: 59.99,
    tag: "Sale",
    bg: "linear-gradient(135deg,#dcfce7,#cffafe)",
    desc: "Ergonomic mouse with a 16,000 DPI sensor, programmable buttons and RGB lighting.",
    details: "Move with precision using a high-resolution sensor and responsive controls. The ergonomic shape, programmable buttons and RGB accents make it ready for long sessions.",
    specs: ["Up to 16,000 DPI", "Programmable buttons", "RGB lighting", "Ergonomic design"],
    colors: [{ name: "Black", value: "#1e293b" }, { name: "White", value: "#f1f5f9" }, { name: "Neon", value: "#22c55e" }],
    art: "mouse",
    photo: ""
  }
];

// ---------- State ----------
let cart = [];
try {
  cart = JSON.parse(localStorage.getItem("technova_cart")) || [];
} catch (e) {
  cart = [];
}
cart = cart.map((item) => ({ ...item, color: item.color || "Default" }));

// ---------- Helpers ----------
const $ = (id) => document.getElementById(id);
const money = (n) => "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const imageHTML = (p) => (p.photo ? `<img src="${p.photo}" alt="${p.name}">` : art[p.art]());

function saveCart() {
  try { localStorage.setItem("technova_cart", JSON.stringify(cart)); } catch (e) { /* ignore */ }
}

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2000);
}

// ---------- Render products ----------
function renderProducts() {
  $("productGrid").innerHTML = products.map((p) => `
    <article class="card" data-product="${p.id}" tabindex="0" role="button" aria-label="View ${p.name} details">
      <div class="card__image" style="background:${p.bg}">
        <span class="card__tag">${p.tag}</span>
        ${imageHTML(p)}
      </div>
      <div class="card__body">
        <h3 class="card__name">${p.name}</h3>
        <p class="card__desc">${p.desc}</p>
        <div class="card__footer">
          <span class="card__price">${money(p.price)}</span>
          <button class="btn btn--primary" data-add="${p.id}">Add to Cart</button>
        </div>
      </div>
    </article>
  `).join("");
}

// ---------- Cart logic ----------
function addToCart(id, color = "Default") {
  const item = cart.find((i) => i.id === id && i.color === color);
  if (item) item.qty++;
  else cart.push({ id, color, qty: 1 });
  saveCart();
  renderCart();
  const btn = $("openCart");
  btn.classList.remove("bump");
  void btn.offsetWidth; // restart animation
  btn.classList.add("bump");
  showToast(products.find((p) => p.id === id).name + " added to cart");
}

function changeQty(id, delta, color) {
  const item = cart.find((i) => i.id === id && (color === undefined || i.color === color));
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter((i) => i.id !== id);
  saveCart();
  renderCart();
}

function removeItem(id, color) {
  cart = cart.filter((i) => i.id !== id || (color !== undefined && i.color !== color));
  saveCart();
  renderCart();
}

function renderCart() {
  const container = $("cartItems");
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  const total = cart.reduce((sum, i) => sum + i.qty * products.find((p) => p.id === i.id).price, 0);

  $("cartCount").textContent = count;
  $("cartTotal").textContent = money(total);

  if (cart.length === 0) {
    container.innerHTML = `<div class="empty"><span>🛒</span>Your cart is empty.<br>Add some products!</div>`;
    return;
  }

  container.innerHTML = cart.map((i) => {
    const p = products.find((x) => x.id === i.id);
    return `
      <div class="cart-item">
        <div class="cart-item__img" style="background:${p.bg}">${imageHTML(p)}</div>
        <div>
          <div class="cart-item__name">${p.name}</div>
          ${i.color && i.color !== "Default" ? `<div class="cart-item__variant">${i.color}</div>` : ""}
          <div class="cart-item__price">${money(p.price * i.qty)}</div>
          <div class="qty">
            <button data-minus="${p.id}" data-color="${i.color || "Default"}" aria-label="Decrease quantity">−</button>
            <span>${i.qty}</span>
            <button data-plus="${p.id}" data-color="${i.color || "Default"}" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <button class="remove" data-remove="${p.id}" data-color="${i.color || "Default"}" aria-label="Remove item">×</button>
      </div>`;
  }).join("");
}

// ---------- Drawer ----------
function openCart() { $("drawer").classList.add("open"); $("overlay").classList.add("show"); }
function closeCart() { $("drawer").classList.remove("open"); $("overlay").classList.remove("show"); }

// ---------- Product details ----------
let selectedProductColor = "";
function openProduct(id) {
  const p = products.find((product) => product.id === id);
  if (!p) return;
  selectedProductColor = p.colors[0].name;
  $("productModalContent").innerHTML = `
    <div class="product-modal__visual" style="background:${p.bg}"><span class="card__tag">${p.tag}</span>${imageHTML(p)}</div>
    <div class="product-modal__info">
      <span class="product-modal__kicker">NOVA · FEATURED GEAR</span>
      <h2 id="productModalTitle">${p.name}</h2>
      <div class="product-modal__rating"><span aria-label="5 out of 5 stars">★★★★★</span> <small>Excellent choice</small></div>
      <p class="product-modal__description">${p.details || p.desc}</p>
      <ul class="product-modal__specs">${(p.specs || []).map((spec) => `<li><span>✓</span>${spec}</li>`).join("")}</ul>
      <div class="product-modal__colors"><strong>Color: <span id="selectedColorLabel">${selectedProductColor}</span></strong><div class="swatches">${p.colors.map((color, index) => `<button type="button" class="swatch${index === 0 ? " is-selected" : ""}" style="--swatch:${color.value}" data-color="${color.name}" aria-label="${color.name}" aria-pressed="${index === 0}"></button>`).join("")}</div></div>
      <div class="product-modal__purchase"><div><span class="product-modal__price">${money(p.price)}</span><small>Taxes included</small></div><button type="button" class="btn btn--primary btn--block" data-modal-add="${p.id}">Add to Cart</button></div>
      <p class="product-modal__shipping">♧ Free shipping · Easy 30-day returns</p>
    </div>`;
  $("productModal").classList.add("is-open");
  $("productModal").setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  $("productModal").querySelector(".product-modal__close").focus();
}
function closeProduct() {
  $("productModal").classList.remove("is-open");
  $("productModal").setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

// ---------- Events ----------
document.addEventListener("click", (e) => {
  if (e.target.closest("[data-close-product]")) { closeProduct(); return; }
  const swatch = e.target.closest(".swatch[data-color]");
  if (swatch) {
    selectedProductColor = swatch.dataset.color;
    $("selectedColorLabel").textContent = selectedProductColor;
    document.querySelectorAll(".swatch").forEach((button) => { const selected = button === swatch; button.classList.toggle("is-selected", selected); button.setAttribute("aria-pressed", selected); });
    return;
  }
  const modalAdd = e.target.closest("[data-modal-add]");
  if (modalAdd) { addToCart(+modalAdd.dataset.modalAdd, selectedProductColor); return; }
  const add = e.target.closest("[data-add]");
  if (add) { e.stopPropagation(); addToCart(+add.dataset.add); return; }
  const card = e.target.closest("[data-product]");
  if (card) { openProduct(+card.dataset.product); return; }
  const t = e.target.closest("[data-plus],[data-minus],[data-remove]");
  if (!t) return;
  if (t.dataset.plus) changeQty(+t.dataset.plus, 1, t.dataset.color);
  else if (t.dataset.minus) changeQty(+t.dataset.minus, -1, t.dataset.color);
  else if (t.dataset.remove) removeItem(+t.dataset.remove, t.dataset.color);
});

$("openCart").addEventListener("click", openCart);
$("closeCart").addEventListener("click", closeCart);
$("overlay").addEventListener("click", closeCart);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { closeCart(); closeProduct(); }
  if ((e.key === "Enter" || e.key === " ") && e.target.matches("[data-product]")) { e.preventDefault(); openProduct(+e.target.dataset.product); }
});

$("clearBtn").addEventListener("click", () => {
  cart = [];
  saveCart();
  renderCart();
});

$("checkoutBtn").addEventListener("click", () => {
  if (cart.length === 0) {
    showToast("Your cart is empty");
    return;
  }
  cart = [];
  saveCart();
  renderCart();
  closeCart();
  showToast("Thank you for your purchase! 🎉");
});

// ---------- Init ----------
renderProducts();
renderCart();

// ============================================
// TASK 2 — ONLINE SHOPPING CART
// Rest Operator, Spread Operator, Destructuring
// ============================================

// ── State ────────────────────────────────────
let availableProducts = [
  { id: 1, name: 'Wireless Headphones', price: 79.99 },
  { id: 2, name: 'Mechanical Keyboard', price: 149.99 },
  { id: 3, name: 'USB-C Hub',           price: 49.99 },
  { id: 4, name: 'Gaming Mouse',        price: 59.99 },
];
let cart = [];
let productIdCounter = 5;

// ── REST OPERATOR — main cart function ───────
function addToCart(...items) {
  // Spread existing cart + new items
  cart = [...cart, ...items];
}

// ── Add a custom product ─────────────────────
function addProduct() {
  const nameEl  = document.getElementById('p-name');
  const priceEl = document.getElementById('p-price');

  const name  = nameEl.value.trim();
  const price = parseFloat(priceEl.value);

  if (!name || isNaN(price) || price < 0) {
    log('ERROR: Invalid product data', 'red');
    return;
  }

  const product = { id: productIdCounter++, name, price };
  availableProducts.push(product);

  nameEl.value  = '';
  priceEl.value = '';

  log(`Product created: "${name}" @ $${price.toFixed(2)}`, 'cyan');
  renderProducts();
}

// ── Add all products to cart using REST ──────
function addMultipleToCart() {
  if (availableProducts.length === 0) {
    log('ERROR: No products available to add', 'red');
    return;
  }

  // REST OPERATOR USAGE: ...items collects all arguments
  addToCart(...availableProducts); // spread products as individual args

  log(`addToCart(...items) called — ${availableProducts.length} items passed via Rest operator`, 'green');
  log(`Cart now has ${cart.length} item(s). Used Spread to merge: [...cart, ...items]`, 'cyan');
  renderCart();
  updateStats();
}

// ── Spread + Destructure ─────────────────────
function spreadAndDestructure() {
  if (cart.length === 0) {
    log('ERROR: Cart is empty — add items first', 'red');
    return;
  }

  // SPREAD: clone the cart (non-mutating)
  const cartClone = [...cart];
  log(`Spread clone created: [...cart] — ${cartClone.length} items`, 'cyan');

  // ARRAY DESTRUCTURING: extract first and rest
  const [firstProduct, ...remainingProducts] = cartClone;

  log(`Destructuring: const [firstProduct, ...remainingProducts] = cartClone`, 'yellow');
  log(`First item → "${firstProduct.name}" ($${firstProduct.price.toFixed(2)})`, 'green');
  log(`Remaining (${remainingProducts.length}): ${remainingProducts.map(p => p.name).join(', ') || 'none'}`, 'dim');

  // Update stat display
  document.getElementById('stat-first').textContent = firstProduct.name;
  document.getElementById('stat-rest').textContent  =
    remainingProducts.length > 0 ? `${remainingProducts.length} more` : 'none';
}

// ── Clear cart ───────────────────────────────
function clearCart() {
  cart = [];
  log('Cart cleared. State reset.', 'red');
  renderCart();
  updateStats();
  document.getElementById('stat-first').textContent = '—';
  document.getElementById('stat-rest').textContent  = '—';
}

// ── Render products ──────────────────────────
function renderProducts() {
  const el = document.getElementById('products-list');
  if (availableProducts.length === 0) {
    el.innerHTML = '<div class="empty-msg">No products created yet</div>';
    return;
  }
  el.innerHTML = availableProducts.map(p => `
    <div class="product-item">
      <span class="p-name">${p.name}</span>
      <span class="p-price">$${p.price.toFixed(2)}</span>
    </div>
  `).join('');
}

// ── Render cart ──────────────────────────────
function renderCart() {
  const el = document.getElementById('cart-list');
  if (cart.length === 0) {
    el.innerHTML = '<div class="empty-msg">Cart is empty</div>';
    return;
  }
  el.innerHTML = cart.map((p, i) => `
    <div class="cart-item">
      <span class="cart-num">[${String(i + 1).padStart(2, '0')}]</span>
      <span class="p-name">${p.name}</span>
      <span class="p-price">$${p.price.toFixed(2)}</span>
    </div>
  `).join('');
}

// ── Update stats ─────────────────────────────
function updateStats() {
  const total = cart.reduce((sum, p) => sum + p.price, 0);
  document.getElementById('stat-count').textContent = cart.length;
  document.getElementById('stat-price').textContent = `$${total.toFixed(2)}`;
}

// ── Console logger ───────────────────────────
function log(msg, cls = 'dim') {
  const box = document.getElementById('console-log');
  const div = document.createElement('div');
  div.className = `console-line ${cls}`;
  div.textContent = msg;
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}

// ── Init ─────────────────────────────────────
renderProducts();
renderCart();

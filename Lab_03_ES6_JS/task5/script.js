// ============================================
// TASK 5 — PRODUCT CATALOG USING MAP
// Map — Key=ProductID — .set() .get() .delete() .size
// ============================================

// ── Create Map ───────────────────────────────
const productMap = new Map();

// ── Add 5 initial products using .set() ──────
productMap.set('P001', { name: 'Laptop Pro 15"',         price: 1299.99, category: 'Electronics' });
productMap.set('P002', { name: 'Noise-Cancel Headphones', price: 299.99,  category: 'Audio'       });
productMap.set('P003', { name: 'Ergonomic Chair',         price: 499.99,  category: 'Furniture'   });
productMap.set('P004', { name: 'Standing Desk',           price: 799.99,  category: 'Furniture'   });
productMap.set('P005', { name: 'Webcam 4K Ultra',         price: 129.99,  category: 'Electronics' });

// ── Add product to Map ────────────────────────
function addMapProduct() {
  const id    = document.getElementById('mp-id').value.trim().toUpperCase();
  const name  = document.getElementById('mp-name').value.trim();
  const price = parseFloat(document.getElementById('mp-price').value);
  const cat   = document.getElementById('mp-cat').value.trim();

  if (!id || !name || isNaN(price) || price < 0 || !cat) {
    showAddMsg('Please fill in all fields correctly.', 'error');
    return;
  }

  if (productMap.has(id)) {
    showAddMsg(`ID "${id}" already exists. Use a unique ID.`, 'error');
    return;
  }

  // .set(key, value)
  productMap.set(id, { name, price, category: cat });
  showAddMsg(`Product "${name}" added with key "${id}". Map size: ${productMap.size}`, 'success');

  // Clear inputs
  ['mp-id', 'mp-name', 'mp-price', 'mp-cat'].forEach(id => document.getElementById(id).value = '');

  renderTable();
  updateSize();
}

// ── Search by ID ──────────────────────────────
function searchProduct() {
  const id     = document.getElementById('mp-search').value.trim().toUpperCase();
  const result = document.getElementById('search-result');

  if (!id) { result.textContent = 'Enter an ID to search.'; result.className = 'search-result'; return; }

  // .has() to check existence
  if (productMap.has(id)) {
    // .get() to retrieve value
    const p = productMap.get(id);
    result.innerHTML = `
      Found: ${p.name}<br/>
      Price: $${p.price.toFixed(2)}<br/>
      Category: ${p.category}
    `;
    result.className = 'search-result found';
  } else {
    result.textContent = `No product with ID "${id}" found.`;
    result.className = 'search-result not-found';
  }
}

// ── Delete product from Map ───────────────────
function deleteProduct(id) {
  if (productMap.has(id)) {
    // .delete(key)
    productMap.delete(id);
    renderTable();
    updateSize();
    // Clear search result if it was showing this item
    document.getElementById('search-result').textContent = '';
  }
}

// ── Render table using .forEach() ────────────
function renderTable() {
  const tbody = document.getElementById('product-tbody');

  if (productMap.size === 0) {
    tbody.innerHTML = '<tr class="empty-row"><td colspan="5">No products in the catalog.</td></tr>';
    return;
  }

  let rows = '';

  // Iterate Map using .forEach()
  productMap.forEach((product, key) => {
    rows += `
      <tr>
        <td><span class="key-badge">${key}</span></td>
        <td>${product.name}</td>
        <td class="price-cell">$${product.price.toFixed(2)}</td>
        <td><span class="cat-badge">${product.category}</span></td>
        <td>
          <button class="del-btn" onclick="deleteProduct('${key}')">Delete</button>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = rows;
}

// ── Update .size display ──────────────────────
function updateSize() {
  document.getElementById('map-size').textContent = productMap.size;
}

// ── Show add message ──────────────────────────
function showAddMsg(text, type) {
  const el = document.getElementById('add-msg');
  el.textContent = text;
  el.className = `add-msg ${type}`;
  setTimeout(() => { el.textContent = ''; el.className = 'add-msg'; }, 3500);
}

// ── Enter key support for search ─────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    if (document.activeElement.id === 'mp-search') searchProduct();
    else addMapProduct();
  }
});

// ── Init ──────────────────────────────────────
renderTable();
updateSize();

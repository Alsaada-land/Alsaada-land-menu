let cartCount = 0;

function addToCart(itemName, price) {
    cartCount++;
    document.querySelector('.cart-count').textContent = cartCount;
    alert(`تم إضافة "${itemName}" إلى السلة بنجاح!`);
}

const tabBtns = document.querySelectorAll('.tab-btn');
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

const searchToggleBtn = document.getElementById('searchToggleBtn');
const searchContainer = document.getElementById('searchContainer');
searchToggleBtn.addEventListener('click', () => {
    searchContainer.classList.toggle('active');
    if(searchContainer.classList.contains('active')) {
        document.getElementById('searchInput').focus();
    }
});

const menuToggleBtn = document.getElementById('menuToggleBtn');
const sidebarDrawer = document.getElementById('sidebarDrawer');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const closeSidebarBtn = document.getElementById('closeSidebarBtn');

function toggleSidebar() {
    sidebarDrawer.classList.toggle('active');
    sidebarOverlay.classList.toggle('active');
}

menuToggleBtn.addEventListener('click', toggleSidebar);
closeSidebarBtn.addEventListener('click', toggleSidebar);
sidebarOverlay.addEventListener('click', toggleSidebar);

const catCards = document.querySelectorAll('.cat-card');
const productCards = document.querySelectorAll('.product-card');
const currentCategoryTitle = document.getElementById('currentCategoryTitle');

catCards.forEach(card => {
    card.addEventListener('click', () => {
        catCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        
        const selectedCat = card.getAttribute('data-category');
        const catName = card.querySelector('span').textContent;
        currentCategoryTitle.textContent = `قائمة ${catName}`;
        
        productCards.forEach(product => {
            const productCat = product.getAttribute('data-category');
            if(selectedCat === 'all' || productCat === selectedCat) {
                product.style.display = 'flex';
            } else {
                product.style.display = 'none';
            }
        });
    });
});

const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase().trim();
    productCards.forEach(product => {
        const name = product.getAttribute('data-name').toLowerCase();
        if(name.includes(term)) {
            product.style.display = 'flex';
        } else {
            product.style.display = 'none';
        }
    });
});

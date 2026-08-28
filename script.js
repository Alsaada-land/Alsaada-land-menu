let cartCount = 0;

function addToCart(itemName, price) {
    cartCount++;
    document.querySelector('.cart-badge').textContent = cartCount;
    alert(`تم إضافة "${itemName}" إلى السلة بنجاح!`);
}

// Order Tabs Switcher
const orderTabs = document.querySelectorAll('.o-tab');
orderTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        orderTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

// Search Bar Toggle
const searchToggleBtn = document.getElementById('searchToggleBtn');
const searchContainer = document.getElementById('searchContainer');
searchToggleBtn.addEventListener('click', () => {
    searchContainer.classList.toggle('active');
    if(searchContainer.classList.contains('active')) {
        document.getElementById('searchInput').focus();
    }
});

// Sidebar Drawer Toggle
const menuToggleBtn = document.getElementById('menuToggleBtn');
const sideDrawer = document.getElementById('sideDrawer');
const drawerOverlay = document.getElementById('drawerOverlay');
const closeDrawerBtn = document.getElementById('closeDrawerBtn');

function toggleDrawer() {
    sideDrawer.classList.toggle('active');
    drawerOverlay.classList.toggle('active');
}

menuToggleBtn.addEventListener('click', toggleDrawer);
closeDrawerBtn.addEventListener('click', toggleDrawer);
drawerOverlay.addEventListener('click', toggleDrawer);

// Category Filtering logic
const catPills = document.querySelectorAll('.cat-pill');
const menuItemCards = document.querySelectorAll('.menu-item-card');
const activeCategoryTitle = document.getElementById('activeCategoryTitle');

catPills.forEach(pill => {
    pill.addEventListener('click', () => {
        catPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        
        const selectedCat = pill.getAttribute('data-cat');
        const catLabel = pill.querySelector('span').textContent;
        activeCategoryTitle.textContent = catLabel;
        
        menuItemCards.forEach(card => {
            const cardCat = card.getAttribute('data-cat');
            if(selectedCat === 'all' || cardCat === selectedCat) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Live Text Search
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    menuItemCards.forEach(card => {
        const title = card.getAttribute('data-name').toLowerCase();
        if(title.includes(query)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
});

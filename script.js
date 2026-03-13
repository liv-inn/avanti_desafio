const products = [
    {
        id: 1,
        name: "<h3> Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit </h3>",
        image: "assets/imgs/produto.png",
        originalPrice: 100.00,
        currentPrice: 79.90,
        discount: 10,
        installments: 10,
        installmentValue: 7.90,
        isNew: true
    },
    {
        id: 2,
        name: "<h3> Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit </h3>",
        image: "assets/imgs/produto.png",
        originalPrice: 100.00,
        currentPrice: 79.90,
        discount: 10,
        installments: 10,
        installmentValue: 7.90,
        isNew: true
    },
    {
        id: 3,
        name: "<h3> Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit </h3>",
        image: "assets/imgs/produto.png",
        originalPrice: 100.00,
        currentPrice: 79.90,
        discount: 10,
        installments: 10,
        installmentValue: 7.90,
        isNew: true
    },
    {
        id: 4,
        name: "<h3> Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit </h3>",
        image: "assets/imgs/produto.png",
        originalPrice: 100.00,
        currentPrice: 79.90,
        discount: 10,
        installments: 10,
        installmentValue: 7.90,
        isNew: true
    },
    {
        id: 5,
        name: "<h3> Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit </h3>",
        image: "assets/imgs/produto.png",
        originalPrice: 100.00,
        currentPrice: 79.90,
        discount: 10,
        installments: 10,
        installmentValue: 7.90,
        isNew: true
    }
];

function createProductCard(product) {
    const cleanName = product.name.replace(/<\/?h3>/g, '').trim();
    return `
        <div class="product-card w-[240px] flex-shrink-0 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm" data-product-id="${product.id}">
            <div class="relative">
                ${product.isNew ? `<span class="absolute top-2 left-2 bg-[#00264E] text-white px-2 py-[3px] rounded text-[10px] font-bold font-nunito-sans tracking-wide z-10">NOVO</span>` : ''}
                <img src="${product.image}" alt="${cleanName}" class="w-[222px] h-[222px] object-contain mx-auto" loading="lazy">
            </div>
            <div class="p-3">
                <p class="text-[13px] font-semibold text-gray-800 mb-3 line-clamp-2 font-nunito leading-snug">${cleanName}</p>
                <div class="mb-0.5">
                    <span class="text-gray-800 text-[13px] line-through font-nunito">R$${product.originalPrice.toFixed(2).replace('.', ',')}</span>
                </div>
                <div class="flex items-center gap-2 mb-1.5">
                    <span class="text-[22px] font-bold text-gray-900 font-nunito leading-none">R$${product.currentPrice.toFixed(2).replace('.', ',')}</span>
                    <span class="bg-[#5EC0BE] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">${product.discount}% OFF</span>
                </div>
                <p class="text-[12px] text-gray-500 mb-4 font-nunito">Ou em até <strong class="font-bold text-gray-700">${product.installments}x de R$ ${product.installmentValue.toFixed(2).replace('.', ',')}</strong></p>
                <button class="buy-button w-full bg-blue-600 text-white py-2.5 rounded-lg text-sm font-bold font-nunito hover:bg-blue-700 transition-colors"
                        onclick="addToCart(${product.id})">
                    Comprar
                </button>
            </div>
        </div>
    `;
}

function renderProducts() {
    ['products-container', 'products-container-2'].forEach(id => {
        const container = document.getElementById(id);
        if (container) {
            container.innerHTML = products.map(product => createProductCard(product)).join('');
        }
    });
    totalProducts = products.length;
    updateCarouselButtons();
}

let currentPosition = 0;
const productWidth = 256;
const visibleProducts = 4;
let totalProducts = 5;

function updateCarouselButtons() {
    const leftButton = document.querySelector('button[onclick="scrollProducts(\'left\')"]');
    const rightButton = document.querySelector('button[onclick="scrollProducts(\'right\')"]');
    if (leftButton && rightButton) {
        const hidden = totalProducts <= visibleProducts;
        leftButton.style.display = hidden ? 'none' : 'block';
        rightButton.style.display = hidden ? 'none' : 'block';
    }
}

function scrollProducts(direction) {
    const container = document.getElementById('products-container');
    const maxPosition = -(totalProducts - visibleProducts) * productWidth;
    if (direction === 'left') {
        currentPosition = Math.min(currentPosition + productWidth, 0);
    } else {
        currentPosition = Math.max(currentPosition - productWidth, maxPosition);
    }
    container.style.transform = `translateX(${currentPosition}px)`;
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    const activeIndex = Math.abs(currentPosition / productWidth);
    dots.forEach((dot, index) => {
        dot.classList.toggle('bg-blue-600', index === activeIndex);
        dot.classList.toggle('bg-gray-300', index !== activeIndex);
    });
}

let autoScrollInterval;

function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
        const maxPosition = -(totalProducts - visibleProducts) * productWidth;
        if (currentPosition <= maxPosition) {
            currentPosition = 0;
            document.getElementById('products-container').style.transform = 'translateX(0px)';
            updateDots();
        } else {
            scrollProducts('right');
        }
    }, 4000);
}

function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

let cartItems = 0;

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cartItems++;
        updateCartCounter();
        showAddToCartNotification(product.name);
    }
}

function updateCartCounter() {
    const cartCounter = document.querySelector('.absolute.bg-blue-primary');
    if (cartCounter) cartCounter.textContent = cartItems;
}

function showAddToCartNotification(productName = 'Produto') {
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300 max-w-sm';
    notification.innerHTML = `
        <div class="flex items-center gap-2">
            <span>✅</span>
            <div>
                <p class="font-medium">Produto adicionado!</p>
                <p class="text-sm opacity-90">${productName.substring(0, 50)}...</p>
            </div>
        </div>
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.classList.remove('translate-x-full'), 100);
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function handleSearch() {
    const searchInput = document.querySelector('input[placeholder*="Digite"]');
    if (searchInput?.value.trim()) {
        alert(`Buscando por: ${searchInput.value.trim()}`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCarouselButtons();
    startAutoScroll();

    document.querySelectorAll('button[onclick*="scrollProducts"]').forEach(btn => {
        btn.addEventListener('click', () => {
            stopAutoScroll();
            setTimeout(startAutoScroll, 8000);
        });
    });

    const searchInput = document.querySelector('input[placeholder*="Digite"]');
    if (searchInput) {
        searchInput.addEventListener('keypress', e => {
            if (e.key === 'Enter') handleSearch();
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Live gold price (simulated - replace with real API)
function updateGoldPrice() {
    if (document.getElementById('goldPrice')) {
        const price = (2450 + (Math.random() - 0.5) * 20).toFixed(2);
        const change = ((Math.random() - 0.5) * 2).toFixed(2);
        document.getElementById('goldPrice').textContent = `$${price}`;
        
        const changeEl = document.getElementById('priceChange');
        const isPositive = parseFloat(change) > 0;
        changeEl.textContent = `${isPositive ? '+' : ''}${change}%`;
        changeEl.className = `price-change ${isPositive ? 'positive' : 'negative'}`;
    }
}

// Contact form submission
function handleContactForm(e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent. 🚀');
    e.target.reset();
}

setInterval(updateGoldPrice, 5000);
updateGoldPrice();

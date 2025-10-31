// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Collection Items Data (images above name, prices in MAD)
const collectionItems = [
    {
        name: 'Elegant Necklace',
        price: '1299 MAD',
        image: 'image.png',
        category: 'Necklaces'
    },
    {
        name: 'Crystal Bracelet',
        price: '799 MAD',
        image: 'https://source.unsplash.com/featured/300x300/?bracelet,bracelets',
        category: 'Bracelets'
    },
    {
        name: 'Pearl Earrings',
        price: '899 MAD',
        image: 'https://source.unsplash.com/featured/300x300/?earrings,pearl',
        category: 'Earrings'
    },
    {
        name: 'Gold Ring',
        price: '1499 MAD',
        image: 'https://source.unsplash.com/featured/300x300/?gold-ring,ring',
        category: 'Rings'
    },
    {
        name: 'Silver Anklet',
        price: '599 MAD',
        image: 'https://source.unsplash.com/featured/300x300/?anklet,silver-anklet',
        category: 'Anklets'
    },
    {
        name: 'Diamond Pendant',
        price: '1999 MAD',
        image: 'https://source.unsplash.com/featured/300x300/?pendant,diamond',
        category: 'Pendants'
    }
];

// Populate Collection Grid
const collectionGrid = document.getElementById('collection-grid');

collectionItems.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.className = 'bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition';
    itemElement.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="w-full h-64 object-cover">
        <div class="p-4">
            <h3 class="text-xl font-bold mb-2">${item.name}</h3>
            <p class="text-gray-600 mb-2">${item.category}</p>
            <p class="text-purple-600 font-bold">${item.price}</p>
            <button class="mt-4 w-full bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
                Add to Cart
            </button>
        </div>
    `;
    collectionGrid.appendChild(itemElement);
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            mobileMenu.classList.add('hidden');
        }
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(contactForm);
    
    // Here you would typically send the form data to a server
    // For now, we'll just show a success message
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Add scroll reveal animation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('opacity-100');
            section.classList.remove('opacity-0');
        }
    });
});
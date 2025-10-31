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
        image: 'https://i.pinimg.com/474x/4f/40/b5/4f40b550d7ecd26bb14fe0f605aded73.jpg',
        category: 'Necklaces'
    },
    {
        name: 'Crystal Bracelet',
        price: '799 MAD',
        image: 'https://scontent.faga1-2.fna.fbcdn.net/v/t39.30808-6/471227760_1552476508708535_5800500592001462981_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=XU0bTwoN_bUQ7kNvwFC_UXA&_nc_oc=AdkVdH_9Q-nXi3WuliEt42pLjdXfUrX3daU01LtxIZQ_SXf3M9ksAYDw0LNM-lPls7Y&_nc_zt=23&_nc_ht=scontent.faga1-2.fna&_nc_gid=2vsDM02FjSrK8pOlgfnhPw&oh=00_AfdzyHIyzghbzwoyHcv-4GJZxjUIwjMGULBZJHMzxj8asw&oe=690AD599',
        category: 'Bracelets'
    },
    {
        name: 'Pearl Earrings',
        price: '899 MAD',
        image: 'https://img.joomcdn.net/a44f939f3d12a5b336d85387dab251119bb66aae_original.jpeg',
        category: 'Earrings'
    },
    {
        name: 'Gold Ring',
        price: '1499 MAD',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnW2-ov5ozhWyW8hcDGZNrPP3T3XFAkviUHw&s',
        category: 'Rings'
    },
    {
        name: 'golden Anklet',
        price: '599 MAD',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQApphawtmjrSDIudsB184nXQakYiz1Ov1qpg&s',
        category: 'Anklets'
    },
    {
        name: 'Diamond Pendant',
        price: '1999 MAD',
        image: 'data:image/jpeg;base64,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',
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
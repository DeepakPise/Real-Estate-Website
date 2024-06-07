// Smooth Scroll
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
});

// Carousel Functionality
const propertyList = document.querySelector('.property-list');
const leftButton = document.createElement('button');
const rightButton = document.createElement('button');

leftButton.innerText = '<';
rightButton.innerText = '>';

leftButton.classList.add('carousel-button', 'left-button');
rightButton.classList.add('carousel-button', 'right-button');

propertyList.parentElement.appendChild(leftButton);
propertyList.parentElement.appendChild(rightButton);

let scrollAmount = 0;
const scrollMax = propertyList.scrollWidth - propertyList.clientWidth;

leftButton.addEventListener('click', () => {
    scrollAmount -= propertyList.clientWidth / 2;
    if (scrollAmount < 0) scrollAmount = 0;
    propertyList.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

rightButton.addEventListener('click', () => {
    scrollAmount += propertyList.clientWidth / 2;
    if (scrollAmount > scrollMax) scrollAmount = scrollMax;
    propertyList.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

// Search Bar Functionality (for demonstration purposes, this only logs the input)
const searchButton = document.querySelector('#search-button');
const searchInput = document.querySelector('#search-input');

searchButton.addEventListener('click', () => {
    const query = searchInput.value;
    console.log('Searching for:', query);
    // Add your search functionality here
});

// Dark Mode Toggle
const darkModeSwitch = document.querySelector('#dark-mode-switch');

darkModeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

// Loading Animation
window.addEventListener('load', () => {
    document.getElementById('loader').style.display = 'none';
});

// Animate on Scroll
const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

animateOnScrollElements.forEach(element => {
    observer.observe(element);
});

// Property Modal
const propertyItems = document.querySelectorAll('.property-item');
const modal = document.querySelector('#property-modal');
const modalContent = document.querySelector('.modal-content');
const closeBtn = document.querySelector('.close');
const propertyDetails = document.querySelector('#property-details');

propertyItems.forEach(item => {
    item.addEventListener('click', () => {
        const details = item.getAttribute('data-details');
        propertyDetails.textContent = details;
        modal.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Search Bar Validation
searchInput.addEventListener('input', () => {
    if (searchInput.value.trim() === '') {
        searchButton.disabled = true;
    } else {
        searchButton.disabled = false;
    }
});
searchButton.disabled = true;

// Wait until DOM is loaded
document.addEventListener('DOMContentLoaded', function(){

    // Burger menu toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav ul');
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Hero button smooth scroll
    document.getElementById('heroBtn').addEventListener('click', () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });

    // Contact form submission
    document.getElementById('contactForm').addEventListener('submit', function(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        alert(`Thanks ${name}! We received your message: "${message}". We will contact you at ${email}.`);
        this.reset();
    });

    // About cards animation on scroll
    const cards = document.querySelectorAll('.about .card');
    const animateCards = () => {
        const triggerBottom = window.innerHeight * 0.85;
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if(cardTop < triggerBottom){
                card.classList.add('show');
            }
        });
    };
    animateCards();
    window.addEventListener('scroll', animateCards);

    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        backToTopBtn.style.display = (window.scrollY > 300) ? 'block' : 'none';
    });
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top:0, behavior:'smooth' });
    });

    // Counter Animation
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;
            if(count < target){
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };
        const triggerCounter = () => {
            const top = counter.getBoundingClientRect().top;
            if(top < window.innerHeight * 0.9){
                updateCount();
                window.removeEventListener('scroll', triggerCounter);
            }
        };
        window.addEventListener('scroll', triggerCounter);
        triggerCounter();
    });

});
/*----- typed js ----*/
document.addEventListener('DOMContentLoaded', function() {
    const typed = new Typed('.multiple-text',{
        strings : ['Web Developer', 'Full-stack Developer', 'Python Developer'],
        typeSpeed : 100,
        backSpeed : 100,
        backDelay : 1000,
        loop : true,
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('header');

    // to toggle the scroll position
    window.addEventListener('scroll', function() {
        header.classList.toggle('sticky', window.scrollY > 20);
    });


    
    //highlight the current section
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a')
    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height){
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector(`.menu a[href = "#${id}"]`).classList.add('active');
                });
            }
        });
    }


    //animation when skills section is viewed
    const skillsSection = document.querySelector('#skills');
    const skillCategories = document.querySelectorAll('.skills-category');
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillCategories.forEach(category => category.classList.add('visible'));
                observer.unobserve(entry.target); // Stop observing once animation has triggered
            }
        });
    };
    const observerOptions = {
        root: null,
        threshold: 0.4
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(skillsSection);

});




document.addEventListener('DOMContentLoaded', function () {

    const aboutButton = document.querySelector('.about');
    const aboutSection = document.querySelector('.about__me');

    aboutButton.addEventListener('click', function () {
        // Scroll to the about section when the "About" button is clicked
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
});


document.addEventListener('DOMContentLoaded', function () {

    const aboutButton = document.querySelector('.work');
    const aboutSection = document.querySelector('.my_works');

    aboutButton.addEventListener('click', function () {
        // Scroll to the about section when the "About" button is clicked
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
});



document.addEventListener('DOMContentLoaded', function () {

    const aboutButton = document.querySelector('.project');
    const aboutSection = document.querySelector('.img_1_m50');

    aboutButton.addEventListener('click', function () {
        // Scroll to the about section when the "About" button is clicked
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
});


document.addEventListener('DOMContentLoaded', function () {

    const aboutButton = document.querySelector('.contact');
    const aboutSection = document.querySelector('.beautiful-footer');

    aboutButton.addEventListener('click', function () {
        // Scroll to the about section when the "About" button is clicked
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const sideScroll = document.querySelector('.side-scroll');

    window.addEventListener('scroll', function () {
        // Calculate the scroll percentage
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

        // Apply the active class based on the scroll percentage
        if (scrollPercentage > 5) {
            sideScroll.classList.add('active');
        } else {
            sideScroll.classList.remove('active');
        }
    });
});
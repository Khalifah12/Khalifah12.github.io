document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('header nav ul li a');
    for(const link of links){
        link.addEventListener('click', scrolling);
    }

    function scrolling(e){
        e.preventDefault();
        const href = this.getAttribute('href');
        const offsetTop = document.querySelector(href).offsetTop - 100;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }

    document.getElementById('navbar-brand').addEventListener('click', function(e){
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
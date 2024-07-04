document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('bar');
    const mobileMenu = document.getElementById('nevbar');
    const closeButton = document.getElementById('close'); // Select the close button

    // Toggle mobile menu function
    function toggleMobileMenu() {
        mobileMenu.classList.toggle('active');
        const expanded = mobileMenu.classList.contains('active') ? 'true' : 'false';
        menuToggle.setAttribute('aria-expanded', expanded);
    }

    // Toggle mobile menu on menu toggle button click
    menuToggle.addEventListener('click', function() {
        toggleMobileMenu();
    });

    // Close mobile menu on close button click
    closeButton.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    });

    // Close mobile menu when clicking outside of it
    document.addEventListener('click', function(event) {
        const target = event.target;
        const isClickInside = mobileMenu.contains(target) || target === menuToggle;

        if (!isClickInside && mobileMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var MainImg = document.getElementById("MainImg");
    var smallImgs = document.getElementsByClassName("small-img");

    for (let i = 0; i < smallImgs.length; i++) {
        smallImgs[i].addEventListener("click", function() {
            MainImg.src = smallImgs[i].src;
        });
    }

    var bar = document.getElementById("bar");
    var nav = document.getElementById("nevbar");
    var close = document.getElementById("close");

    if (bar) {
        bar.addEventListener("click", function() {
            nav.classList.add("active");
        });
    }

    if (close) {
        close.addEventListener("click", function() {
            nav.classList.remove("active");
        });
    }
});
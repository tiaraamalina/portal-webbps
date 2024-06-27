document.addEventListener('scroll', function () {
    const layanan = document.querySelector('.layanan');
    const footer = document.querySelector('footer');
    const floatingNav = document.getElementById('floating-nav');
    const menuButton = document.getElementById('menuButton');
    const layananPosition = layanan.getBoundingClientRect().top;
    const footerPosition = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (layananPosition <= 0 && footerPosition > windowHeight) {
        floatingNav.classList.add('visible');
        menuButton.classList.add('visible');
    } else {
        floatingNav.classList.remove('visible');
        menuButton.classList.remove('visible');
    }

    if (footerPosition <= windowHeight) {
        menuButton.classList.remove('visible');
    }
});

// Ensure navigation links work as expected
document.querySelectorAll('.modal-body .nav-link').forEach(link => {
    link.addEventListener('click', function (event) {
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Close the modal
            $('#myModal').modal('hide');
            
            // Scroll to the target element
            setTimeout(() => {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }, 300); // Delay to ensure modal is closed before scrolling
        }
    });
});
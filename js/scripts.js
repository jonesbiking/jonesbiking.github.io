/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', event => {
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible)
            return;
        if (window.scrollY === 0)
            navbarCollapsible.classList.remove('navbar-shrink')
        else
            navbarCollapsible.classList.add('navbar-shrink')
    };
    navbarShrink();
    document.addEventListener('scroll', navbarShrink);
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav)
        new bootstrap.ScrollSpy(document.body, { target: '#mainNav', rootMargin: '0px 0px -40%', });
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(document.querySelectorAll('#navbarResponsive .nav-link'));
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none')
                navbarToggler.click();
        });
    });
});

function startFormSubmit() {
    document.querySelector("#start-form-submit-btn").disabled = true;

    data = {
        name: document.querySelector("#start-form-name").value,
        email: document.querySelector("#start-form-email").value,
        options: `Dirt paths: ${document.querySelector("#start-form-dirt-paths").checked}
                Dirt berms: ${document.querySelector("#start-form-dirt-berms").checked}
                Dirt jumps: ${document.querySelector("#start-form-dirt-jumps").checked}
                Wooden berms: ${document.querySelector("#start-form-wooden-berms").checked}
                Wooden jumps: ${document.querySelector("#start-form-wooden-jumps").checked}
                Skinnies: ${document.querySelector("#start-form-skinnies").checked}
                Rock gardens: ${document.querySelector("#start-form-rock-gardens").checked}

                Number of features: ${document.querySelector("#start-form-number-features").value}`,
        notes: document.querySelector("#start-form-notes").value,
    };

    document.querySelector("#start-form-name").value = "";
    document.querySelector("#start-form-email").value = "";
    document.querySelector("#start-form-dirt-paths").checked = false;
    document.querySelector("#start-form-dirt-berms").checked = false;
    document.querySelector("#start-form-dirt-jumps").checked = false;
    document.querySelector("#start-form-wooden-berms").checked = false;
    document.querySelector("#start-form-wooden-jumps").checked = false;
    document.querySelector("#start-form-skinnies").checked = false;
    document.querySelector("#start-form-rock-gardens").checked = false;
    document.querySelector("#start-form-number-features").value = 1;
    document.querySelector("#start-form-notes").value = "";

    // emailjs.send("service_t9ifro2", "template_6pvypng", data).then(() => {
    //     alert('Your form submitted successfully!');
    //     document.querySelector("#start-form-submit-btn").disabled = false;
    // }).catch(() => {
    //     alert('There was an error submitting your form!');
    // });
}

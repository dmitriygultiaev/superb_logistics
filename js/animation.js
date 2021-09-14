// Плавная анимация к якорю

document.querySelectorAll('a.link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault()

        const href = this.getAttribute('href').substring(1)
        const scrollTarget = document.getElementById(href)
        const topOffset = 130
        const elementPosition = scrollTarget.getBoundingClientRect().top
        const offsetPosition = elementPosition - topOffset

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth',
        })
    })
})

// Анимация при скролле

AOS.init({

    disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 100, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// Анимация при скролле этапов

const animItem = document.getElementById('why_animation');

window.addEventListener('scroll', animFunction);

function animFunction() {
    const animItemHeight = animItem.offsetHeight + 1000;
    const animItemOffset = animItem.getBoundingClientRect().top;


    let animItemPoint = window.innerHeight - animItemHeight;

    if(animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight;
    }

    const requestSVG = document.getElementById('request_svg');
    const requestText = document.getElementById('request_text');
    const requestDot = document.getElementById('request_dot');
    const routeSVG = document.getElementById('route_svg');
    const routeText = document.getElementById('route_text');
    const routeDot = document.getElementById('route_dot');
    const truckSVG = document.getElementById('truck_svg');
    const truckText = document.getElementById('truck_text');
    const truckDot = document.getElementById('truck_dot');
    const boxSVG = document.getElementById('box_svg');
    const boxText = document.getElementById('box_text');
    const boxDot = document.getElementById('box_dot');

    setTimeout(function() {
        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            requestSVG.classList.add('active');
            requestText.classList.add('active');
            requestDot.classList.add('active');
        } else {
            requestSVG.classList.remove('active');
            requestText.classList.remove('active');
            requestDot.classList.remove('active');
        }
    }, (800));

    setTimeout(function() {
        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            routeSVG.classList.add('active');
            routeText.classList.add('active');
            routeDot.classList.add('active');
        } else {
            routeSVG.classList.remove('active');
            routeText.classList.remove('active');
            routeDot.classList.remove('active');
        }
    }, (1800));

    setTimeout(function() {
        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            truckSVG.classList.add('active');
            truckText.classList.add('active');
            truckDot.classList.add('active');
        } else {
            truckSVG.classList.remove('active');
            truckText.classList.remove('active');
            truckDot.classList.remove('active');
        }
    }, (2800));

    setTimeout(function() {
        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            boxSVG.classList.add('active');
            boxText.classList.add('active');
            boxDot.classList.add('active_last');
        } else {
            boxSVG.classList.remove('active');
            boxText.classList.remove('active');
            boxDot.classList.remove('active_last');
        }
    }, (3800));
}
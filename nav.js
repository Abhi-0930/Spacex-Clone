
let isActive = false;

function toggle() {
    if (isActive) {
        document.querySelector('.hamburger').className = 'hamburger';
        document.querySelector('.shadow').className = 'shadow';
        document.querySelector('.mobile-nav').className = 'mobile-nav';
    } else {
        document.querySelector('.hamburger').className = 'hamburger active';
        document.querySelector('.shadow').className = 'shadow active';
        document.querySelector('.mobile-nav').className = 'mobile-nav active';
    }
    // Toggle the isActive variable after updating the classes
    isActive = !isActive;
}

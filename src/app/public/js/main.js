function toggleNav () {
    let nav = document.getElementById('nav');
    let toggle = document.getElementById('toggle');
    let close = document.getElementById('close');
    let ispress = false;
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        if(!ispress) {
            toggle.style.opacity = '0';
            toggle.style.zIndex = -9
            nav.style.marginLeft = '0';
            return ispress = true;
        }
    });
    close.addEventListener('click', (e) => {
        e.preventDefault();
        if(ispress) {
            nav.style.marginLeft = '-100%';
            toggle.style.opacity = '1';
            toggle.style.zIndex = 12;
            return ispress = false;
        }
    })
}
toggleNav();
function saveOptions () {
    let state = document.getElementById('state');
    let categories = document.getElementById('categories');
    let save = document.getElementById('submit');
    state.addEventListener('input', () => {        
        return save.setAttribute('href', `/changetask/${numberId}-${state.value}-${categories.value}`);
    });
    categories.addEventListener('input', () => {
        return save.setAttribute('href', `/changetask/${numberId}-${state.value}-${categories.value}`)
    });
}
saveOptions();
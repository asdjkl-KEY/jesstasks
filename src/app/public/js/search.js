function searchResult() {
    let form = document.getElementById('formulario');
    let category = document.getElementById('category');
    let numberId = document.getElementById('numberId');
    let state = document.getElementById('state');
    let buttonLink = document.getElementById('button-send');

    numberId.addEventListener('input', () => {
        if(numberId.value > 0) {
            return buttonLink.setAttribute('href', `/search/result/numberId/${numberId.value}`);
        }
    });
    category.addEventListener('input', () => {
        if(category.value != "select" && state.value != "select") {
             return buttonLink.setAttribute('href', `/search/result/category-state/${category.value}-${state.value}`);
        }
        if(category.value != "select") {
            return buttonLink.setAttribute('href', `/search/result/category/${category.value}`);
        }
    });
    state.addEventListener('input', () => {
        if(category.value != "select" && state.value != "select") {
            return buttonLink.setAttribute('href', `/search/result/category-state/${category.value}-${state.value}`);
       }
       if(state.value != "select") {
           return buttonLink.setAttribute('href', `/search/result/state/${state.value}`)
       }
    })
    
}
searchResult();
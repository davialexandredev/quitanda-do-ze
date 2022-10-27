const menuItens = document.querySelectorAll('.nav-list a[href^="#"]');

menuItens.forEach(item => {
    item.addEventListener('click', scrollToIdClick);
})

function getScrollByHref(element){
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToIdClick(event){
    event.preventDefault();
    const to = getScrollByHref(event.target) - 80;

    scrollToPosition(to);
}

function scrollToPosition(to){
    window.scroll({
        top: to,
        behavior : "smooth",
    });
}
;


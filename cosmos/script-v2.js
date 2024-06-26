const footerCover = () => {
    const footerCoverNode = document.querySelector('.footer-cover');
    
    if(footerCoverNode){
        footerCoverNode.remove();
    }

    const cover = document.querySelector('.notion-header__cover');
    const clone = cover.cloneNode(true);
    clone.classList.add('footer-cover');
    clone.classList.remove('notion-header__cover', 'has-cover');
    const content = document.querySelector('.super-content');
    content.appendChild(clone);
}

window.addEventListener('load', e => {
    footerCover()

    window.events.on('routeChangeComplete', url => {
        footerCover()
    })
})
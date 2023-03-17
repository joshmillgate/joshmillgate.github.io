window.addEventListener("scroll", () => {
    const nav = document.getElementsByClassName("super-navbar")[0]
    if (window.scrollY > 0) {
        nav.classList.add("scrolled")
    } else {
        nav.classList.remove("scrolled")
    }
})
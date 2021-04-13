window.addEventListener("scroll", function () {
    let scrollHeader = document.querySelector("nav")
    scrollHeader.classList.toggle('sticky', window.scrollY > 0)

})
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle('animated', entry.isIntersecting)
        })
    })
    const hiddenElements = document.querySelectorAll(".transition")
    hiddenElements.forEach((el) => observer.observe(el))
})
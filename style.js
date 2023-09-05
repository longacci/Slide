window.addEventListener("DOMContentLoaded",()=> {
    const arrowLeft = document.querySelector(".fa-arrow-left");
    const arrowRight = document.querySelector(".fa-arrow-right");
    const slideList = document.querySelectorAll(".slide-img");
    const circle = document.querySelectorAll(".slide-list-circle");
    arrowRight.addEventListener("click",()=> {
        let item = document.querySelector(".active");
        let itemCircle = document.querySelector(".activeCircle");
        if (item.nextElementSibling) {
            item.nextElementSibling.classList.add("active");
            item.classList.remove("active");
            itemCircle.nextElementSibling.classList.add("activeCircle");
            itemCircle.classList.remove("activeCircle");
        } else {
            slideList[0].classList.add("active");
            item.classList.remove("active");
            circle[0].classList.add("activeCircle");
            itemCircle.classList.remove("activeCircle");
        }
    })
    arrowLeft.addEventListener("click",()=> {
        let item = document.querySelector(".active");
        let itemCircle = document.querySelector(".activeCircle");
        if (item.previousElementSibling) {
            item.previousElementSibling.classList.add("active");
            item.classList.remove("active");
            itemCircle.previousElementSibling.classList.add("activeCircle");
            itemCircle.classList.remove("activeCircle");
        } else {
            slideList[slideList.length - 1].classList.add("active");
            item.classList.remove("active");
            circle[circle.length - 1].classList.add("activeCircle");
            itemCircle.classList.remove("activeCircle");
        }
    })
    circle.forEach((item,key) => {
        item.addEventListener("click",(e) => {
            let itemCircle = document.querySelector(".activeCircle");
            let itemImg = document.querySelector(".active");
            if (e.target !== itemCircle) {
                itemCircle.classList.remove("activeCircle");
                e.target.classList.add("activeCircle");
                itemImg.classList.remove("active");
                slideList[key].classList.add("active");
            }
        })
    })
})
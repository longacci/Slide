window.addEventListener("DOMContentLoaded",()=> {
    // Slider
    const arrowLeft = document.querySelector(".fa-arrow-left");
    const arrowRight = document.querySelector(".fa-arrow-right");
    const slideImg = document.querySelectorAll(".slide-img");
    const circle = document.querySelectorAll(".slide-list-circle");
    const slideList = document.querySelector(".slide-imglist");
    let valueLeftSlide = 0;
    arrowRight.addEventListener("click",()=> {
        valueLeftSlide -= 100;
        if (valueLeftSlide < (-(slideImg.length-1) * 100)) {
            slideList.style.left = `0`;
            valueLeftSlide = 0;
            document.querySelector(".activeCircle").classList.remove("activeCircle");
            circle[0].classList.add("activeCircle");
        } else {
            slideList.style.left = `${valueLeftSlide}%`;
            let itemCircle = document.querySelector(".activeCircle");
            itemCircle.nextElementSibling.classList.add("activeCircle");
            itemCircle.classList.remove("activeCircle");
        }
    })
    arrowLeft.addEventListener("click",()=> {
        valueLeftSlide += 100;
        if (valueLeftSlide > 0) {
            slideList.style.left = `${-(slideImg.length-1) * 100}%`;
            valueLeftSlide = -(slideImg.length-1) * 100;
            document.querySelector(".activeCircle").classList.remove("activeCircle");
            circle[circle.length-1].classList.add("activeCircle");
        } else {
            slideList.style.left = `${valueLeftSlide}%`;
            let itemCircle = document.querySelector(".activeCircle");
            itemCircle.previousElementSibling.classList.add("activeCircle");
            itemCircle.classList.remove("activeCircle");
        }
    })
    circle.forEach((item,key) => {
        item.addEventListener("click",(e) => {
            if (e.target !== document.querySelector(".activeCircle")) {
                document.querySelector(".activeCircle").classList.remove("activeCircle");
                e.target.classList.add("activeCircle");
                valueLeftSlide = -(key * 100);
                slideList.style.left = `${valueLeftSlide}%`;
            }
        })
    })
    // -------------------------
})
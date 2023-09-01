document.addEventListener("DOMContentLoaded",()=>{
    const box = document.querySelectorAll(".box");
    const circle = document.querySelectorAll(".circle");
    const text = document.querySelectorAll(".text");
    box.forEach((item,key) => {
        item.addEventListener("mouseenter",(e)=>{
            let x = e.clientX;
            let y = e.clientY;
            text[key].style.opacity = 1;
            text[key].style.visibility = "visible";
            circle[key].style.top = `${y - item.getBoundingClientRect().top}px`;
            circle[key].style.left = `${x - item.getBoundingClientRect().left}px`;
            circle[key].style.transform = `translate(-50%,-50%) scale(25)`;
        })
        item.addEventListener("mouseleave",(e)=>{
            circle[key] = document.querySelector(".circle");
            let x = e.clientX;
            let y = e.clientY;
            text[key].style.opacity = 0;
            text[key].style.visibility = "hidden";
            circle[key].style.top = `${y - item.getBoundingClientRect().top}px`;
            circle[key].style.left = `${x - item.getBoundingClientRect().left}px`;
            circle[key].style.transform = `translate(-50%,-50%) scale(0)`;
        })
    })
})
document.addEventListener("DOMContentLoaded",()=> {
    const notice = document.querySelector(".Login-box-form-notice");
    const lock = document.querySelector(".fa-lock");
    const form = document.querySelector(".Login-box-form");
    const inputEmail = document.getElementsByName("email")[0];
    const inputPass = document.getElementsByName("password")[0];
    const user = document.querySelector(".fa-user");


    lock.style.top = `calc(50% - ${(notice.getBoundingClientRect().height + parseInt(notice.style.marginTop.charAt(0))) / 2}px)`;

    form.addEventListener("submit",(e)=> {
        e.preventDefault();
        let info = {
            "Email":`${e.target.elements["email"].value}`,
            "Password":`${e.target.elements["password"].value}`,
            "Checkbox":`${document.querySelector("#checkbox").checked}`
        }
        console.log(info);
    })

    inputEmail.addEventListener("input",()=> {
        if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value.trim()))) {
            user.style.color = `green`;
        }
        else {
            user.style.color = `red`;
        }
    })
    
    inputPass.addEventListener("input",()=> {
        let valuePass = inputPass.value.trim();
        if (!/[a-z]/.test(valuePass)) {
            notice.textContent = "Mật khẩu ít nhất 1 chữ in thường";
            lock.style.color = `red`;
            notice.style.opacity = `1`;
            notice.style.visibility = `visible`;
        } else if (!/[A-Z]/.test(valuePass)) {
            notice.textContent = "Mật khẩu ít nhất 1 chữ in hoa";
            lock.style.color = `red`;
            notice.style.opacity = `1`;
            notice.style.visibility = `visible`;
        } else if (!/[0-9]/.test(valuePass)) {
            notice.textContent = "Mật khẩu ít nhất 1 chữ số";
            lock.style.color = `red`;
            notice.style.opacity = `1`;
            notice.style.visibility = `visible`;
        } else if (!(valuePass.length >= 6)) {
            notice.textContent = "Mật khẩu ít nhất 6 kí tự";
            lock.style.color = `red`;
            notice.style.opacity = `1`;
            notice.style.visibility = `visible`;
        } else {
            lock.style.color = `green`;
            notice.style.opacity = `0`;
            notice.style.visibility = `hidden`;
        }
    })
})
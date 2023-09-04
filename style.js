document.addEventListener("DOMContentLoaded",()=> {
    const form = document.querySelector(".Login-box-form");
    form.addEventListener("submit",(e)=> {
        e.preventDefault();
        let info = {
            "Username":`${e.target.elements["username"].value}`,
            "Password":`${e.target.elements["password"].value}`,
            "Checkbox":`${document.querySelector("#checkbox").checked}`
        }
        console.log(info);
    })
})
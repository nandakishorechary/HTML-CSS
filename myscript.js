function login(){
    if(username.value == "john@gmail.com" && password.value == 1234){
        document.write("welcome");

    }
    else{
        document.write("acces denied");
    }
}
const show = () => {
    const form = document.querySelector("p2")
    form.classList.toggle("show")
    document.querySelector(".layer").style.display="block"
   
}

const hide = () => {
    const hide = document.querySelector(".p2")
    hide.classList.remove("show")
    document.querySelector(".layer").style.display="none"
}
// function f2(){
//     const page1=document.getElementById("p1");
//     const page2=document.getElementById("p2");
//     page1.classList.remove('hide');
//     page2.classList.remove('show');
// }
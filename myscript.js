function login(){
    if(username.value == "john@gmail.com" && password.value == 1234){
        document.write("welcome");

    }
    else{
        document.write("acces denied");
    }
}
function page1(){
    const page1=document.getElementById("p1");
    const page2=document.getElementById("p2").classList(
        "active"
    );
    
    page2.classList.add('show');
   
}
function page2(){
    const page1=document.getElementById("p1");
    const page2=document.getElementById("p2");
    page1.classList.remove('hide');
    page2.classList.remove('show');

}

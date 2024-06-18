let Login1=document.querySelector("#Login1");
let Register1=document.querySelector("#Register1");
let form=document.querySelector("#form");
let Register2=document.querySelector(".Register2")

//Accessing Register Page
Register1.addEventListener("click",()=>
    {
        window.location="Register.html";
        EventTarget="blank";
    })

     //Accessing Login page
Login1.addEventListener("click",()=>
    {
        window.location="Login.html";
        EventTarget="blank";
    })


//getting data after submit
    form.addEventListener("submit" ,(e)=>
    {
        e.preventDefault();
        let data=document.querySelector("#Name").value;
        console.log(data);
        let data2=document.querySelector("#E-mail").value;
        console.log(data2)
        let data3=document.querySelector("#Password").value;
        console.log(data3);
       

    })

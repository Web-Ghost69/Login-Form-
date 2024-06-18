let form=document.querySelector("#form")
let Register1=document.querySelector("#Register1")
let Login1=document.querySelector("#Login1")
let Passbtn=document.querySelector('.Forget-password')
 //Accessing Login page
Login1.addEventListener("click",()=>
    {
        window.location="Login.html"
        EventTarget="blank"
    })


    Passbtn.addEventListener('click',()=>
    {
        window.location="Password.html"
        EventTarget="blank"
    })
    //function for submit and get data

    form.addEventListener("submit", (e)=>
    {

        e.preventDefault();
        let data=document.querySelector("#Email").value
        console.log(data)
        let data2=document.querySelector("#Password").value
        console.log(data2)
    })
   
   

//Accessing Register Page

Register1.addEventListener("click",()=>
        {
            window.location="Register.html"
            EventTarget="blank"
        })
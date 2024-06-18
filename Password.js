
let btn=document.querySelector(".Front-button")
let form=document.querySelector("#form")



form.addEventListener("reset",()=>
{
let data=document.querySelector("input").value;
console.log(data)
})
btn.addEventListener('click',()=>
   {
      let Card= document.querySelector("#Card")
      Card.classList.toggle('flipped')
   })

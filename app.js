const details = document.querySelector(".burger");
const links = document.querySelector(".links");
const aLinks = links.querySelectorAll("a");
details.addEventListener("click",()=>{
  links.classList.toggle("active");
  if (links.classList.contains("active")) {
    aLinks.forEach((a => {
      a.addEventListener("click",(e)=>{
        e.target.parentElement.classList.remove("active")
      })
    }))
  }
})
console.log(aLinks) 
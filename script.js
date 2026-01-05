const menu=document.querySelector(".menu-btn")
const nav=document.querySelector(".nav-links")
menu.onclick=()=>nav.classList.toggle("show")

const toggle=document.getElementById("themeToggle")
toggle.onclick=()=>document.body.classList.toggle("dark")

const observer=new IntersectionObserver(e=>{
  e.forEach(x=>x.isIntersecting&&x.target.classList.add("show"))
},{threshold:.2})
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el))

new Chart(document.getElementById("usageChart"),{
  type:"line",
  data:{
    labels:["Mon","Tue","Wed","Thu","Fri","Sat"],
    datasets:[{data:[3,5,2,6,4,7],borderColor:"#a10f0f",fill:false}]
  }
})

new Chart(document.getElementById("categoryChart"),{
  type:"doughnut",
  data:{
    labels:["Dairy","Veg","Grains","Protein"],
    datasets:[{data:[30,25,25,20],backgroundColor:["#457b9d","#2a9d8f","#bc6c25","#6a4c93"]}]
  }
})

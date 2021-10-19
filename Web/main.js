const $closeBtn=document.querySelector("#closeBtn");
const $burgerBtn=document.querySelector("#burgerBtn");
const $navLink = document.querySelector("#nav-link");
const $navbar = document.querySelector("#navbar")

$burgerBtn.addEventListener("click",()=>{
    $burgerBtn.classList.remove("btn-active");
    $closeBtn.classList.add("btn-active");
    $navLink.classList.add("nav-link_active");
})
$closeBtn.addEventListener("click",()=>{
    $burgerBtn.classList.add("btn-active");
    $closeBtn.classList.remove("btn-active");
    $navLink.classList.remove("nav-link_active");
})
window.addEventListener("scroll",()=>{
    // console.dir($navbar)
    if(window.scrollY !== 0){
        $navbar.style.boxShadow ="0px 3px 5px #00000030"
    }else{
        $navbar.style.boxShadow = null
    }
})

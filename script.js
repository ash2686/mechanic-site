let menuButton =  document.getElementById("menu-button");
let ctaButton = document.getElementById("cta-button");
let ctaMenu = document.querySelector(".ctas-menu");
let mainMenu = document.querySelector(".main-menu");
let menuItems = document.querySelectorAll(".main-menu li");

console.log(menuItems);

menuButton.addEventListener("click",()=>{

    //  if(ctaButton.style.transform = "rotate(45deg)"){
    //       ctaButton.style.transform = "rotate(0deg)";
    //     // ctaMenu.style.display = "none";
    //     ctaMenu.style.height = "0";
    //     ctaMenu.style.opacity = "0";
    //     ctaMenu.style.transform = "translateY(-200%)"
    //  }

    if(menuButton.classList.contains("fa-bars")){
        menuButton.classList.replace("fa-bars","fa-xmark");
        mainMenu.style.height = "300%"
        mainMenu.style.opacity = "1";
        mainMenu.style.transform = "translateY(0)";
        mainMenu.style.zIndex = "50";
        menuItems.forEach(item=>{
            item.style.opacity = "1";
        })
    }else{
       menuButton.classList.replace("fa-xmark","fa-bars"); 
       mainMenu.style.opacity = "0";
       mainMenu.style.height = "0";
       mainMenu.style.transform = "translateY(-200%)";
       mainMenu.style.zIndex = "0";
        menuItems.forEach(item=>{
            item.style.opacity = "none";
        })

    }
})


document.addEventListener("click", (e) => {
  if (!mainMenu.contains(e.target) && !menuButton.contains(e.target)) {
         menuButton.classList.replace("fa-xmark","fa-bars"); 
         mainMenu.style.opacity = "0";
         mainMenu.style.height = "0";
         mainMenu.style.transform = "translateY(-200%)";
         mainMenu.style.zIndex = "0";
         menuItems.forEach(item=>{
            item.style.opacity = "none";
        })
  }

  if(!ctaMenu.contains(e.target) && !ctaButton.contains(e.target)){
    ctaButton.style.transform = "rotate(0deg)";
        // ctaMenu.style.display = "none";
        ctaMenu.style.height = "0";
        ctaMenu.style.opacity = "0";
        ctaMenu.style.transform = "translateY(-200%)";
        ctaMenu.style.zIndex = 0;
  }
});

ctaButton.addEventListener("click",()=>{

    // if(menuButton.classList.contains("fa-xmark")){
    //     menuButton.classList.replace("fa-xmark","fa-bars"); 
    //    mainMenu.style.opacity = "0";
    //    mainMenu.style.height = "0";
    //    mainMenu.style.transform = "translateY(-200%)";
    //     menuItems.forEach(item=>{
    //         item.style.opacity = "none";
    //     })
    // }

    if(ctaButton.style.transform === "rotate(0deg)"){
        ctaButton.style.transform = "rotate(45deg)";
        // ctaMenu.style.display = "flex";
        ctaMenu.style.height = "300%";
        ctaMenu.style.opacity = "1";
        ctaMenu.style.transform = "translateY(0)";
        ctaMenu.style.zIndex = "50";

    }else{
        ctaButton.style.transform = "rotate(0deg)";
        // ctaMenu.style.display = "none";
        ctaMenu.style.height = "0";
        ctaMenu.style.opacity = "0";
        ctaMenu.style.transform = "translateY(-200%)";
        ctaMenu.style.zIndex = "0";

    }



})
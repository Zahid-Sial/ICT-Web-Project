let menu_icon = document.getElementById("burgur-icon");
let main_container = document.getElementById("main-container");
let menu = document.getElementById("menu");

let flag = true;
menu_icon.addEventListener("click",function(){
    if(flag)
    {
        main_container.style.display = "none";
        menu.style.display = "block";
        flag = false;
    }
    else if(!flag)
    {
        main_container.style.display = "block";
        menu.style.display = "none";
        flag = true;
    }
  });
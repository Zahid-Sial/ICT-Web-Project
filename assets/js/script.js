let heading_line = document.getElementById("heading-line");
let background_img = document.getElementById("background-img");
let page_link_btn = document.getElementsByClassName("page-link-btn");
let explore_btn = document.getElementById("explore-btn");


explore_btn.addEventListener("click",function(){
  for (let i = 0; i < page_link_btn.length; i++) {
    page_link_btn[i].style.display = 'block';
  }
  heading_line.style.display = "none";
  background_img.style.display = "none";
  explore_btn.style.display = "none";
});


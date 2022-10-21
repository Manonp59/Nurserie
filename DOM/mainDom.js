// let titre = document.querySelector(".titre").textContent
// console.log(titre)


// document.querySelector(".para1").textContent = document.querySelector(".titre").textContent


document.querySelector(".titre").style.backgroundColor = "black";

function changeText() {
    document.querySelector(".para").textContent = document.querySelector(".titre").textContent
}

function changeImage(){
    var image = document.getElementById('image');
    console.log(image.src)
  if (image.src.match("nuage")) {
    image.src = "./images/soleil.jfif";
  } else {
    image.src = "./images/nuage.jfif";
  }
}



function changeColor(color){
    document.body.style.backgroundColor= color
}

let paragraphes = document.querySelectorAll("p.para")
for (let i = 0; i < paragraphes.length; i++) {
    paragraphes[i].style.backgroundColor = "red";
  }


  console.log(image.getAttribute("width"))
  image.setAttribute("width","300")
  console.log(image.getAttribute("width"))

  
 var random_color = '#'+Math.floor(Math.random()*16777215).toString(16);
 console.log(random_color)
  
 function getRandomColor() {
    document.getElementById("button1").style.backgroundColor= random_color
     }
  






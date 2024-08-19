var myImg = Array.from(document.querySelectorAll(".item img"));
var lightBoxContainer = document.querySelector("#lightBoxContainer");
var lightBox = document.querySelector("#lightBox");
var closeLightBox = document.querySelector("#closeLightBox");
var nextElements = document.querySelector("#nextElements");
var previousElements = document.querySelector("#previousElement");

var selectedImgSrc;
var index;

for (let i = 0; i < myImg.length; i++) {
     myImg[i].addEventListener("click", function (event) {
          selectedImgSrc = event.target.getAttribute("src");
          lightBox.style.backgroundImage = `url("${selectedImgSrc}")`;
          lightBoxContainer.classList.replace("d-none", "d-flex");

          index = myImg.indexOf(event.target)


     })

}
closeLightBox.addEventListener("click", closeLightBoxn);


nextElements.addEventListener("click", shownextElement);
previousElements.addEventListener("click", showPreviousElement);
function shownextElement() {
     index += 1;
     if (index >= myImg.length) {
          index = 0;
     }
     selectedImgSrc = myImg[index].getAttribute("src");
     lightBox.style.backgroundImage = `url("${selectedImgSrc}")`;
}
function showPreviousElement() {
     index -= 1;
     if (index < 0) {
          index = myImg.length - 1;
     }
     selectedImgSrc = myImg[index].getAttribute("src");
     lightBox.style.backgroundImage = `url("${selectedImgSrc}")`;
}
function closeLightBoxn() {
     lightBoxContainer.classList.replace("d-flex", "d-none");

}
lightBoxContainer.addEventListener("click", function (event) {
     if (event.target != lightBox && event.target != previousElements && event.target != nextElements){
          
          closeLightBoxn() 
          
     }

});
document.addEventListener("keyup", function (event) {

     if (lightBoxContainer.classList.contains("d-flex")) {
          switch (event.key) {
               case "Escape":
                    closeLightBoxn()
                    break;

               case "ArrowRight":
                    shownextElement()
                    break;
               case "ArrowLeft":
                    showPreviousElement()            
                            break;
               default:
                    break;
          }
     }
})


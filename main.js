const image1 = document.querySelector('.image1');
const image2 = document.querySelector('.image2');
const image3 = document.querySelector('.image3');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');

function loadImage(img,url) {
  img.src = url
};
function RemoveImg(img) {
  if(img.src != '') {
    img.src = ''
  }
}
function addClickImg(image,url) {
 image.addEventListener('click',function(){
  var person = prompt('Please enter one two or three');
  switch(person) {
    case "one":
        loadImage(img1,url);
        RemoveImg(img2)
        RemoveImg(img3)
      break;
    case "two":
        loadImage(img2,url);
        RemoveImg(img1)
        RemoveImg(img3)

      break;
    case "three":
        loadImage(img3,url);
        RemoveImg(img1)
        RemoveImg(img2)
      break;
    default: 
    console.log('errors');
  }
 })
}
addClickImg(image1,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG5er2glw6Ley4J5OwLtxNCk5pU5xoYAMIxppIXJs3oz4koonr")
addClickImg(image2,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7C7W5CJ8H9_LOEwGfpZlPA1bwfo3Tbfy7mewTsxUqyLNlFF1y")
addClickImg(image3,"https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500")
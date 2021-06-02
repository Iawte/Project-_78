var images=["IMG_3757.jpg","N1.png"]
var i=0;

function next(){
    if(i>1){i=0}
    document.getElementById("images").src=images[i];
    i++;



}
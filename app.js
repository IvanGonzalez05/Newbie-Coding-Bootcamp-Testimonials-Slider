// This is the js code that give functionality to the prev and next buttons

let newSource = ["image-tanya.jpg", "image-john.jpg"];
let indexNewSource = 0;
let path;

let image = document.getElementsByClassName("profile-picture");

function previousImage(){
    if(indexNewSource <= 0){
        indexNewSource = newSource.length - 1;
        console.log(indexNewSource)
        console.log(image.src)
        return setImage();
    }
    
    indexNewSource--;
    console.log(indexNewSource)
    console.log(image.src)
    return setImage();
}

function nextImage(){

}

function setImage(){
    path = 'images/' + newSource[indexNewSource];
    return image.src =  path.toString();
}
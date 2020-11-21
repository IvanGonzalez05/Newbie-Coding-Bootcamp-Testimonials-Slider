// This is the js code that give functionality to the prev and next buttons

// I define the class Person, which I will use to create an array of persons to loop through it and change the content of the html
// based on the current person. 
class Person {
    constructor(name, jobTitle, paragraph, imgName) {
        this.name = name;
        this.jobTitle = jobTitle;
        this.paragraph = paragraph;
        this.imgName = imgName;
    }
}

// I create two persons: tanya and john
let tanya = new Person('Tanya Sinclair', 'UX Engineer', `“ I’ve been interested in coding for a while but never taken the jump, until now. 
I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`, 'image-tanya.jpg');

let john = new Person('John Tarkpor', 'Junior Front-end Developer', `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`, 'image-john.jpg');

// Create the array which contains the persons
let personArray = [tanya, john];
let index = 0;

// Declare the path that will change the src of the img tag on the HTML. 
let path;

// Declaring and getting al the html elements that will be modified:
let image = document.getElementById("profile-picture");
let mainInfo = document.getElementById("main-info");
let name = document.getElementById("name");
let jobTitle = document.getElementById("job-title");

function setImage(){
    path = 'images/' + personArray[index].imgName;
    image.src = path;
    return image;
}

function setMainInfo(){
    return mainInfo.innerHTML = personArray[index].paragraph;
}

function setName(){
    return name.innerHTML = personArray[index].name;
}

function setJobTitle(){
    return jobTitle.innerHTML = personArray[index].jobTitle;
}

function previousImage(){
    // if index is 0, we are in the first image. So if we click the previous button, we go to the last image
    if(index <= 0){
        index = personArray.length - 1;

        setName();
        setJobTitle();
        setMainInfo();
        setImage();
        return
    }

    // if index is greater than 0, we go to the previous image
    index--;    
    
    setName();
    setJobTitle();
    setMainInfo();
    setImage();

    return
}

function nextImage(){
    // if index is equal to the last index of the array, the next button will go to the first image
    if(index === (personArray.length - 1)){
        index = 0;

        setName();
        setJobTitle();
        setMainInfo();
        setImage();
        return
    }
    // otherwise, it will go to the next image
    index++;    
    
    setName();
    setJobTitle();
    setMainInfo();
    setImage();

    return
}
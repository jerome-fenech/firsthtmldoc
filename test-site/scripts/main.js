let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/testpic.jfif') {
      myImage.setAttribute ('src','images/testpic2.jfif');
    } else {
      myImage.setAttribute ('src','images/testpic.jfif');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
let myName = prompt("Please Enter Your Name.");
    if(!myName || myName === null) {
      setUserName();
  } else {
localStorage.setItem('name', myName);
myHeading.textContent = ("Grumpy Cat doesn't like you, " + myName);
}
}

if(!localStorage.getItem('name')){
   setUserName();
} else {
   let storedName = localStorage.getItem('name');
   myHeading.textContent = ("Grumpy Cat doesn't like you, " + storedName);
}

myButton.onclick = function(){
    setUserName();
} 

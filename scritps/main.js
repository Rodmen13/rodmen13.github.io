let myImage=document.querySelector('img');
myImage.onclick=function(){
    let mySrc=myImage.getAttribute('src');
    console.log("Image Source:::::",mySrc);
    if(mySrc==='./images/firefox-icon.png'){
        console.log("change1");
        myImage.setAttribute('src','./images/firefox-icon-2.png');
    }else {
        console.log("change2");
        myImage.setAttribute('src','./images/firefox-icon.png');
    }
}

let myButton=document.querySelector('button');
let myHeading=document.querySelector('h1');

function setUserName(){
    let myName=prompt('Please enter your name. ');
    if(!myName||myName===null){
        setUserName();
    }else{
        localStorage.setItem('name',myName);
        myHeading.innerHTML='Mozilla is cool, '+myName;
    }
   
}

if(!localStorage.getItem('name')){
    setUserName()
}else{
    let storedName=localStorage.getItem('name');
    myHeading.innerHTML='Mozilla is cool, '+storedName;
}

myButton.onclick=function(){
    setUserName();
}
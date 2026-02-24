let form =
document.getElementById("form");


let success =
document.getElementById("success");


form.addEventListener(
"submit",

function(e){

e.preventDefault();

success.textContent =
"Request Sent Successfully";

form.reset();

}



);



document
.querySelectorAll("a")
.forEach(link=>{


link.addEventListener(
"click",

function(e){

if(this.hash){

e.preventDefault();


document
.querySelector(this.hash)
.scrollIntoView({

behavior:"smooth"

});

}


});


});

const btn = document.getElementById('butn');

btn.addEventListener('click', function() {
    alert('Button Pressed!')
    document.body.classList.toggle('dark-mode');
     console.log("Button was clicked successfully and Theme is changing.");

});
const form=document.querySelector("form");
form.addEventListener("submit", function(e) {
    e.preventDefault();  

    const fullnam=document.querySelector(".fullnm").value;
    const email=document.getElementById("email").value;
    const message = document.getElementById("msg").value;
    if(fullnam.trim() !=="" && email.trim() !=="" && message.trim() !== ""){
        alert("Form Submitted!");
    }else{
        alert("Not Submitted!");
    }
});
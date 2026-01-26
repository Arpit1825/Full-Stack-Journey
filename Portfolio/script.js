const btn = document.getElementById('butn');
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

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

const button = document.getElementById('butn');

if (button) {
    button.addEventListener('click', function() {
        
       
        document.body.classList.toggle('dark-mode');
        
     
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark'); 
        } else {
            localStorage.setItem('theme', 'light'); 
        }
        
    });
}
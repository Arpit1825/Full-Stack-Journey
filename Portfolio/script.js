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

// 1. Page load hote hi check karo: Kya user ne pehle Dark Mode on kiya tha?
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

const button = document.getElementById('butn');

// Agar button page par maujood hai, tabhi listener lagao
if (button) {
    button.addEventListener('click', function() {
        
        // Class toggle karo
        document.body.classList.toggle('dark-mode');
        
        // 2. Ab browser ki memory me save karo
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark'); // Save "Dark"
        } else {
            localStorage.setItem('theme', 'light'); // Save "Light"
        }
        
    });
}
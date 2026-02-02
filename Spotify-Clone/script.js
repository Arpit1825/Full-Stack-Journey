console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('/Spotify-Clone/songs/1.mp3'); 
let masterPlay = document.getElementById('masterPlay'); 
let myProgressBar = document.getElementById('myProgressBar'); 
let gif = document.getElementById('gif'); 
let songs=[{songname:"FAVELA",filepath:"/Spotify-Clone/songs/1.mp3",coverpath:"/Spotify-Clone/covers/1.jpg"},{songname:"Fearless Funk",filepath:"/Spotify-Clone/songs/2.mp3",coverpath:"/Spotify-Clone/covers/2.jpg"},{songname:"Fly High",filepath:"/Spotify-Clone/songs/3.mp3",coverpath:"/Spotify-Clone/covers/3.jpg"},{songname:"ALL IN MY HIGH",filepath:"/Spotify-Clone/songs/4.mp3",coverpath:"/Spotify-Clone/covers/4.jpg"},{songname:"Where We Are",filepath:"/Spotify-Clone/songs/5.mp3",coverpath:"/Spotify-Clone/covers/5.jpg"},{songname:"LOFIN-scars",filepath:"/Spotify-Clone/songs/6.mp3",coverpath:"/Spotify-Clone/covers/6.jpg"},{songname:"Alone Tonight",filepath:"/Spotify-Clone/songs/7.mp3",coverpath:"/Spotify-Clone/covers/7.jpg"},{songname:"Godless-Ailow",filepath:"/Spotify-Clone/songs/8.mp3",coverpath:"/Spotify-Clone/covers/8.jpg"},{songname:"Hero's Ending",filepath:"/Spotify-Clone/songs/9.mp3",coverpath:"/Spotify-Clone/covers/9.jpg"},{songname:"Warrior-Marin Hox",filepath:"/Spotify-Clone/songs/10.mp3",coverpath:"/Spotify-Clone/covers/10.jpg"}]
console.log(songs);
let songItems=Array.from(document.getElementsByClassName('songItem'));


const sidebar = document.getElementById('sidebar'); 
const resizer = document.getElementById('dragHandle'); 

let isResizing = false;


resizer.addEventListener('mousedown', (e) => {
    isResizing = true;
    
    
    e.preventDefault(); 
    
    document.body.style.cursor = 'col-resize';
    console.log("Resizing shuru!"); 
});


document.addEventListener('mousemove', (e) => {
    if (!isResizing) return;

   
    e.preventDefault();

   
    sidebar.style.width = e.clientX + 'px';
});


document.addEventListener('mouseup', () => {
    isResizing = false;
    document.body.style.cursor = 'default';
    console.log("Resizing khatam.");
});

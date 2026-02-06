console.log("Welcome to Spotify");

let songIndex = 0; 
let myProgressBar = document.getElementById('myProgressBar'); 
// let gif = document.getElementById('gif'); 
let audioElement = new Audio('/Spotify-Clone/songs/1.mp3');
let songs=[{songname:"FAVELA",filepath:"/Spotify-Clone/songs/1.mp3",coverpath:"/Spotify-Clone/covers/1.jpg"},{songname:"Fearless Funk",filepath:"/Spotify-Clone/songs/2.mp3",coverpath:"/Spotify-Clone/covers/2.jpg"},{songname:"Fly High",filepath:"/Spotify-Clone/songs/3.mp3",coverpath:"/Spotify-Clone/covers/3.jpg"},{songname:"ALL IN MY HIGH",filepath:"/Spotify-Clone/songs/4.mp3",coverpath:"/Spotify-Clone/covers/4.jpg"},{songname:"Where We Are",filepath:"/Spotify-Clone/songs/5.mp3",coverpath:"/Spotify-Clone/covers/5.jpg"},{songname:"LOFIN-scars",filepath:"/Spotify-Clone/songs/6.mp3",coverpath:"/Spotify-Clone/covers/6.jpg"},{songname:"Alone Tonight",filepath:"/Spotify-Clone/songs/7.mp3",coverpath:"/Spotify-Clone/covers/7.jpg"},{songname:"Godless-Ailow",filepath:"/Spotify-Clone/songs/8.mp3",coverpath:"/Spotify-Clone/covers/8.jpg"},{songname:"Hero's Ending",filepath:"/Spotify-Clone/songs/9.mp3",coverpath:"/Spotify-Clone/covers/9.jpg"},{songname:"Warrior-Marin Hox",filepath:"/Spotify-Clone/songs/10.mp3",coverpath:"/Spotify-Clone/covers/10.jpg"}]
let songItems=Array.from(document.getElementsByClassName('card'));
console.log("Total Cards Found:", songItems.length);

const sidebar = document.getElementById('sidebar');
const resizer = document.getElementById('dragHandle'); 

let isResizing = false;


resizer.addEventListener('mousedown', (e) => {
    isResizing = true;
    
    
    e.preventDefault(); 
    
    document.body.style.cursor = 'col-resize';

    console.log("Resizing shuru!"); 

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

const playPath = "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z";
const pausePath = "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z";
let masterplay=document.querySelector("#masterPlay");
let masterpath=masterplay.querySelector("path");
masterplay.addEventListener("click",()=>{
     if(audioElement.paused || audioElement.currentTime <= 0){
        // gif.style.opacity=1;
        audioElement.play();
       masterpath.setAttribute("d",pausePath);
       console.log("Audio Playing...");
     }else{
        // gif.style.opacity=0;
        audioElement.pause();
        masterpath.setAttribute("d",playPath);
        console.log("Audio Paused...");
     }

});

// let myProgressBars=document.querySelector("#myProgressBar");
// console.log(myProgressBars);
audioElement.addEventListener('timeupdate', ()=>{
   
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', ()=>{
    
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
});


songItems.forEach((element, i)=>{ 
    
    element.getElementsByTagName("img")[0].src = songs[i].coverpath; 
    element.querySelector("h4").innerText = songs[i].songname; 
});
let prev=document.getElementById("previous");
let next=document.getElementById("next");

    prev.addEventListener('click', ()=>{
        if(songIndex<=0){
            songIndex=9;
        }else{
            songIndex-=1;
        }

        document.querySelector("#masterSongName").innerText = songs[songIndex].songname;

    audioElement.src = songs[songIndex].filepath;

    audioElement.currentTime = 0;

    audioElement.play();

   

   

});

next.addEventListener('click', ()=>{
    if(songIndex>=9){
            songIndex=0;
        }else{
            songIndex+=1;
        }
    document.getElementById("masterSongName").innerText = songs[songIndex].songname;


    masterpath.setAttribute("d",pausePath);
    audioElement.src = songs[songIndex].filepath;

    audioElement.currentTime = 0;

    audioElement.play();

});

audioElement.addEventListener('ended', ()=>{
    if(songIndex >=9){ 
        songIndex = 0;  }
    else{
        songIndex += 1; 
    }

    audioElement.src = songs[songIndex].filepath;
    
    
    audioElement.currentTime = 0;
    audioElement.play();
    
    
    document.getElementById("h4").innerText = songs[songIndex].songname;
    
    
    masterpath.setAttribute("d", pausePath);
});

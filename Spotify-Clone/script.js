let songIndex = 0; 
let myProgressBar = document.getElementById('myProgressBar'); 
// let gif = document.getElementById('gif'); 
let audioElement = new Audio('songs/1.mp3');
let songs = [
    {songname: "FAVELA", filepath: "songs/1.mp3", coverpath: "covers/1.jpg"},
    {songname: "Fearless Funk", filepath: "songs/2.mp3", coverpath: "covers/2.jpg"},
    {songname: "Fly High", filepath: "songs/3.mp3", coverpath: "covers/3.jpg"},
    {songname: "ALL IN MY HIGH", filepath: "songs/4.mp3", coverpath: "covers/4.jpg"},
    {songname: "Where We Are", filepath: "songs/5.mp3", coverpath: "covers/5.jpg"},
    {songname: "LOFIN-scars", filepath: "songs/6.mp3", coverpath: "covers/6.jpg"},
    {songname: "Alone Tonight", filepath: "songs/7.mp3", coverpath: "covers/7.jpg"},
    {songname: "Godless-Ailow", filepath: "songs/8.mp3", coverpath: "covers/8.jpg"},
    {songname: "Hero's Ending", filepath: "songs/9.mp3", coverpath: "covers/9.jpg"},
    {songname: "Warrior-Marin Hox", filepath: "songs/10.mp3", coverpath: "covers/10.jpg"}
];
let songItems=Array.from(document.getElementsByClassName('card'));

const sidebar = document.getElementById('sidebar');
const resizer = document.getElementById('dragHandle'); 


document.querySelector(".login").addEventListener("click", ()=>{
    alert("Login Feature is currently under development! Stay tuned.");
});

document.querySelector(".signup").addEventListener("click", ()=>{
    alert("Sign Up Feature coming soon!");
});
let isResizing = false;


resizer.addEventListener('mousedown', (e) => {
    isResizing = true;
    
    
    e.preventDefault(); 
    
    document.body.style.cursor = 'col-resize';
});


document.addEventListener('mousemove', (e) => {
    if (!isResizing) return;

   
    e.preventDefault();

   
    sidebar.style.width = e.clientX + 'px';
});

document.addEventListener('mouseup', () => {
    isResizing = false;
    document.body.style.cursor = 'default';
});

const playPath = "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z";
const pausePath = "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z";
let masterplay=document.querySelector("#masterPlay");
let masterpath=masterplay.querySelector("path");

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('play-btn')).forEach((element)=>{
        let icon = element.querySelector('i');
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    });
}
masterplay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        var playPromise = audioElement.play();

        if (playPromise !== undefined) {
            playPromise.then(_ => {
                masterpath.setAttribute("d", pausePath);
                
                makeAllPlays();
                let activeCard = document.getElementById(songIndex);
                if (activeCard) {
                    let activeIcon = activeCard.querySelector('i');
                    activeIcon.classList.remove('fa-play');
                    activeIcon.classList.add('fa-pause');
                }
            })
            .catch(error => {
                console.log("Playback interrupted");
            });
        }
    } else {
        audioElement.pause();
        masterpath.setAttribute("d", playPath);
        makeAllPlays();
    }
});


// let myProgressBars=document.querySelector("#myProgressBar");
// console.log(myProgressBars);
audioElement.addEventListener('timeupdate', ()=>{
   
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100); 
    myProgressBar.value = progress;
    let currTime=audioElement.currentTime;
    let min=Math.floor(currTime/60);
    let sec=Math.floor(currTime%60);
    if(sec<=9){
        sec="0"+sec;
    }
    let strttime =document.querySelector("#time");
    strttime.innerText=`${min}:${sec}`;
});
audioElement.addEventListener('loadedmetadata', ()=>{
   
    let totaldur=audioElement.duration;
    let Totalmin=Math.floor(totaldur/60);
    let Totalsec=Math.floor(totaldur%60);
    if(Totalsec<=9){
        Totalsec="0"+Totalsec;
    }
    let totaltime=document.querySelector("#totaltime")
    totaltime.innerText=`${Totalmin}:${Totalsec}`;
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
let bot=document.querySelector(".bottom-profile");
let bottomImg=bot.querySelector("img");
prev.addEventListener('click', ()=>{
        if(songIndex<=0){
            songIndex=9;
        }else{
            songIndex-=1;
        }
        bottomImg.setAttribute("src",songs[songIndex].coverpath);
    document.getElementById("masterSongName").innerText = songs[songIndex].songname;
    masterpath.setAttribute("d",pausePath);
    audioElement.src = songs[songIndex].filepath;

    audioElement.currentTime = 0;

    audioElement.play();
    
    makeAllPlays();
    let activeCard = document.getElementById(songIndex);
    let activeIcon = activeCard.querySelector('i');
    activeIcon.classList.remove('fa-play');
    activeIcon.classList.add('fa-pause');
});

next.addEventListener('click', ()=>{
    if(songIndex>=9){
            songIndex=0;
        }else{
            songIndex+=1;
        }
    bottomImg.setAttribute("src",songs[songIndex].coverpath);
    document.getElementById("masterSongName").innerText = songs[songIndex].songname;
    

    masterpath.setAttribute("d",pausePath);
    audioElement.src = songs[songIndex].filepath;

    audioElement.currentTime = 0;

    audioElement.play();
    
    makeAllPlays();
    let activeCard = document.getElementById(songIndex);
    let activeIcon = activeCard.querySelector('i');
    activeIcon.classList.remove('fa-play');
    activeIcon.classList.add('fa-pause');

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
    
    
    document.getElementById("masterSongName").innerText = songs[songIndex].songname;
    bottomImg.setAttribute("src", songs[songIndex].coverpath);
    
    masterpath.setAttribute("d", pausePath);
    
    makeAllPlays();
    let activeCard = document.getElementById(songIndex);
    let activeIcon = activeCard.querySelector('i');
    activeIcon.classList.remove('fa-play');
    activeIcon.classList.add('fa-pause');
});

let playbtn=document.querySelectorAll(".play-btn");
playbtn.forEach((element) => {
    element.addEventListener("click",(e) =>{
    makeAllPlays();
    songIndex=parseInt(e.currentTarget.id);
    document.getElementById("masterSongName").innerText = songs[songIndex].songname;
    bottomImg.src=songs[songIndex].coverpath;
    
    let clickIcon = e.currentTarget.querySelector('i');
        clickIcon.classList.remove('fa-play');
        clickIcon.classList.add('fa-pause');

    audioElement.src = songs[songIndex].filepath;

    audioElement.currentTime = 0;
    masterpath.setAttribute("d",pausePath);
    audioElement.play();
});

});
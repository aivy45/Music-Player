const music= document.querySelector("audio");
const play = document.querySelector("#play");
const img = document.querySelector("img");
const artist = document.querySelector("#artist");
const title = document.querySelector("#title");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");


const songs =[
    {
        name:"aks1",
        title:"ALLah Ke Bande",
        artist:"Kailash Kher",
    },
    {
        name: "aks2",
        title:"Khaab",
        artist: "Akhil"
    }, 
    {
        name: "aks3", 
        title: "Shiv",
        artist: "Hansraj raghuwanshi",
    },
    {
        name: "aks4", 
        title: "Prada",
        artist: "Jass Manak",
    },
    {
        name: "aks5", 
        title: "Insane",
        artist: "AP Dhillon",
    }

]




 let isPlaying = false;
//  for play function 
const playMusic= ()=>{
     music.play();
    play.classList.replace("fa-play", "fa-pause")
    img.classList.add("anime");
    isPlaying = true;
}


// for pause function 
const pauseMusic = ()=>{
     music.pause();
    play.classList.replace("fa-pause", "fa-play")
    img.classList.remove("anime");
    isPlaying = false;         
}


play.addEventListener("click", ()=>{
 isPlaying ? pauseMusic(): playMusic();
});

// changing the music data 

const loadSong=(songs)=>{
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  music.src = `music/${songs.name}.mp3 `;
  img.src = `images/${songs.name}.jpg`;

};

let songIndex = 0; 
// loadSong(songs[1]);

const nextSong =()=>{
 loadSong(songs[songIndex]);
 songIndex = (songIndex +1)%songs.length;
 playMusic();
}

const prevSong =()=>{
    songIndex = (songIndex -1 +songs.length)%songs.length;
    loadSong(songs[songIndex]);
    playMusic();
   }

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);











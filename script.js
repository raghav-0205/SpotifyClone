console.log("Lets write JavaScript ");
console.log("Hello World");

let allSongs = [];
let currentSong=new Audio();

async function fetchSong() {
    const url = 'https://spotify23.p.rapidapi.com/search/?type=multi&offset=0&limit=10&numberOfTopResults=5';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '4dedc4ab7dmshc6031ec9285260cp160da8jsn1d141ebd124b',
            'x-rapidapi-host': 'spotify23.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        if (result.data && result.data.downloadLink) {
            console.log(result.data.downloadLink);
            return result.data.downloadLink;
        } else {
            console.log("No download link found");
            return null;
        }
    } catch (error) {
        console.error("Error fetching song:", error);
        return null;
    }
}

async function getSongs() {
    try {
        // const songLink = await fetchSong(); 
        const songLink = true;
        if (songLink) {
            allSongs.push(songLink); // Add the song to the array if it's valid
        } else {
            console.log("No song link received ");
        }
        console.log(allSongs);
        return allSongs;
    } catch (error) {
        console.error("Error in getSongs:", error);
    }
}

// Run the getSongs function twice using .then()
getSongs()
    .then(() => {
        return getSongs(); // Call getSongs again after the first one finishes
    })
    .then(() => {
        console.log("Both songs have been fetched");
        main(); // Call the main function once the songs are fetched
    })
    .catch((error) => {
        console.error("Error in chaining getSongs:", error);
    });

const playMusic=(track)=>{
    currentSong.Src="/songs/"+ track
    currentSong.play()

}
// main function that handles displaying songs and playing the audio
async function main() {
    let songs = await getSongs();
    console.log(songs);

    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li >
                            <img class="invert" src="img/music.svg" alt="">
                            <div class="info">
                                <div>${song}</div>
                                <div>song artist</div>
                            </div>
                            <div class="playnow">
                                <span>Play Now</span>
                                <img class="invert" src="img/play.svg" alt="">
                            </div>

                        </li>`;
    }
    console.log("hello");
    const songList = document.querySelector(".songList");
    console.log(songList);
    // document.querySelector(".songList").addEventListener("click", (event) => {
    //     const liElement = event.target.closest("li"); // Detect clicked <li>
    //     if (!liElement) return; // Exit if the click wasn't on an <li>
    
    //     const songNameElement = liElement.querySelector(".info div:first-child");
    
    //     if (songNameElement) {
    //         console.log(`🎵 Song Name: ${songNameElement.textContent.trim()}`);
    //     } else {
    //         console.log("❌ Song name not found.");
    //     }
    // });

    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e=>{
        e.addEventListener("click",element=>{
            console.log(e.querySelector(".info").firstElementChild.innerHTML)
            playMusic(e.querySelector(".info").firstElementChild.innerHTML)
        })
    })
    
    

    
}
// main();

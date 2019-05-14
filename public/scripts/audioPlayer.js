

    /*var fon = document.createElement('audio');
    fon.className = "audio";
    fon.canPlayType('audio/mp3');
    fon.canPlayType('audio/mpeg');
    fon.canPlayType('audio/ogg');
    fon.src = "./music/list/1.mp3";
    //fon.controls = "controls";
    //fon.autoplay = "autoplay";
    fon.id = "audio";
    fon.play();
    */

let i=1;
let nextSong= "";
function setup() {
    document.getElementById('audio').addEventListener('ended', function(){
        i=i+1;
        nextSong = "./music/list/"+i+".mp3";
        audioPlayer = document.getElementById('audio');
        audioPlayer.src = nextSong;
        audioPLayer.load();
        audioPlayer.play();
        if(i == 12) // this is the end of the songs.
        {
            i = 1;
        }
        }, false);
}
function getMusic(){
    var artist = document.getElementById('artist').value;
    itunes.getMusicByArtist(artist).then(drawSongs);
}
        
var myTunes = new MyTunes()
var myTracks = myTunes.getTracks()
var music = []
        
function myPlaylist(myTracks){
    var template = '<h2 class="list">My Playlist</h2>'
    var mySongElem = document.getElementById('myList')
    var index = 100;
    for (var i = 0; i < myTracks.length; i++) {
        var song = myTracks[i]
        template += `<div class="songs">
            <div class="container-fluid song-container">
                <div class="row">
                    <div class="col-xs-4">
                        <div class="img-container">
                            <img src="${song.albumArt}"/>
                        </div>
                    </div>
                    <div class="col-xs-4">
                        <ul id="song-list">
                            <h3>${song.artist}</h3>
                            <h5>${song.title}</h5>
                            <button class="btn-info" id="${song.id}" onclick="upSong(${song.id})">Up</button><button class="btn-warning" id="${song.id}" onclick="downSong(${song.id})">Down</button><button class="btn-danger" id="${song.id}" onclick="removeSong(${song.id})">Remove</button>
                        </ul>
                    </div>
                    <div class="col-xs-4">
                        <i class="fa fa-play fa-4x playButton" onclick="document.getElementById('${index}').play();$(this).toggle();$(this).next().toggle()" id="${index}play"></i>
                        <i class="fa fa-pause fa-4x playButton" onclick="document.getElementById('${index}').pause();$(this).toggle();$('#${index}play').toggle()" style="display: none;"></i>
                        <audio id="${index}" preload="none" >
                            <source src="${song.preview}">
                        </audio>
                    </div>
                </div>
            </div> 
        </div>`
    index++
    } 
mySongElem.innerHTML = template
}   

function drawSongs(arr){ 
    music = arr
    var template = '<h2 class="list">Itunes Library</h2>'
    var songElem = document.getElementById('songList')
    var index = 0;
    for (var i = 0; i < arr.length; i++) {
        var song = arr[i]
        template += `<div class="songs">
                <div class="container-fluid song-container">
                    <div class="row">
                        <div class="col-xs-4">
                            <div class="img-container">
                                <img src="${song.albumArt}"/>
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <ul id="song-list">
                                <h3>${song.artist}</h3>
                                <h5>${song.title}</h5>
                            <button class="btn-success" id="${song.id}" onclick="getSong(${song.id})">Add to Playlist</button>
                            </ul>
                        </div>
                        <div class="col-xs-4">
                            <i class="fa fa-play fa-4x playButton" onclick="document.getElementById('${index}').play();$(this).toggle();$(this).next().toggle()" id="${index}play"></i>
                            <i class="fa fa-pause fa-4x playButton" onclick="document.getElementById('${index}').pause();$(this).toggle();$('#${index}play').toggle()" style="display: none;"></i>
                            <audio id="${index}" preload="none" >
                                <source src="${song.preview}">
                            </audio>
                        </div>
                        
                    </div>
                </div> 
            </div>`
            index++
    } 
songElem.innerHTML = template 
}

function getSong(id){
    for(i=0; i < music.length; i++){
        var item = music[i]
        if(item.id == id){
            myTunes.addTrack(item)
        }
    }
myPlaylist(myTracks)
}

function removeSong(id){
    myTunes.removeTrack(id)
    myPlaylist(myTracks)
}           
        
            
function upSong(id){
    myTunes.promoteTrack(id)
    myPlaylist(myTracks)
}      
        
function downSong(id){
    myTunes.demoteTrack(id)
    myPlaylist(myTracks)
}

window.onload = function() {
    myPlaylist(myTracks)
};
    

    
    

    

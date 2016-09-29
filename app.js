function getMusic(){
  var artist = document.getElementById('artist').value;
  itunes.getMusicByArtist(artist).then(drawSongs);
}

function drawSongs(arr){ 
  var template = ''
  var songElem = document.getElementById('songList')
  var index = 0;
  for (var i = 0; i < arr.length; i++) {
    var song = arr[i]
    template += `<div class="songs">
        <div class="song-container">
            <div class="row">
                <div class="col-sm-4">
                    <div class="img-container">
                        <img src="${song.albumArt}"/>
                    </div>
                </div>
                <div class="col-sm-4">
                    <ul id="song-list">
                        <h2>${song.artist}</h2>
                        <h4>${song.title}</h4>
                    </ul>
                </div>
                <div class="col-sm-4">
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


function getMusic(){
  var artist = document.getElementById('artist').value;
  itunes.getMusicByArtist(artist).then(drawSongs);
}



function drawSongs(arr){ 
  var template = ''
  var songElem = document.getElementById('songList')
  for (var i = 0; i < arr.length; i++) {
    var song = arr[i]
    template += `<div class="songs">
        <div class="song-container">
          <div class="img-container">
            <img src="${song.albumArt}"/>
          </div>
          <ul id="song-list">
            <h3>${song.artist}</h3>
            <h5>${song.title}</h5>
            <audio controls>
                <source src="${song.preview}">
            </audio>
          </ul>
        </div> 
      </div>`
  } 
  songElem.innerHTML = template 
  
//  drawSongs(songList)
  // console.log(songList);
}
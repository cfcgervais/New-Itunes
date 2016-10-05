function MyTunes(){
    var myTracks = loadTracks();
    var songData = [];
    var playlist = [];
    
    this.getTracks = function(){
        myTracks
        return songData
    }
    
    this.addTrack = function(track){
        songData.push(track)
        saveTracks()
    }
    
    this.removeTrack = function(id){
        for(i=0; i < songData.length; i++){
                var item = songData[i]
                if(item.id == id){
                songData.splice(i,1)
                saveTracks()
                return
                   
                }
        }

    }
    
    this.promoteTrack = function(id){
        for (var i = 0; i < songData.length; i++) {
            if (songData[i].id == id) {
               break;
            }
        }
        if(i > 0){
        songData.splice(i-1, 0, songData.splice(i,1)[0]);
        }
        
    }
    
    this.demoteTrack = function(id){
        for (var i = 0; i < songData.length; i++) {
            if (songData[i].id == id) {
               break;
            }
        }
        songData.splice(i+1, 0, songData.splice(i,1)[0]);
    }
        
        


    
    //Yep these guys deal with local storage
    function saveTracks(){
        localStorage.setItem('my-list', JSON.stringify(songData))
    }

    function loadTracks(){
        playlist = localStorage.getItem('my-list')
        if(playlist){
            playlist = JSON.parse(playlist)
        
        return playlist
    }
}
}

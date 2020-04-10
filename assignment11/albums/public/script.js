async function getalbums(){
    let response = await fetch("http://localhost:3000/api/albums");
    let albumsJSON = await response.json();
    let albumsDiv = document.getElementById("albums");

    for(i in albumsJSON){
        let album = albumsJSON[i];
        albumsDiv.append(getalbumItem(album));
    }
}

function getalbumItem(album){
    let albumsection = document.createElement("section");
    
    let h3Elem = document.createElement("h3");
    h3Elem.textContent = album.title;
    albumsection.append(h3Elem);

    let imgElem = document.createElement("img");
    imgElem.src = `http://localhost:3000/${album.img}`;
    albumsection.append(imgElem);

    let detailsP = document.createElement("p");
    detailsP.innerHTML = `Artist: ${album.artist} <br></br>Genre: ${album.genre} <br></br>Billboard Top 200 (peak position): ${album.peak}`;
    albumsection.append(detailsP);

    albumsection.append(getAlbumSongs(album));

    return albumsection;
}

function getAlbumSongs(album){
    let songsUl = document.createElement("ul");

    console.log("Made it to getAlbumSongs");
    for(i=0; i<album.songs.length; i++){
        console.log("Made it to getAlbumSongs for loop");

        let song = document.createElement("li");
        song.textContent = album.songs[i];
        songsUl.append(song);
    }

    return songsUl;
}

window.onload = function(){
    getalbums();
}
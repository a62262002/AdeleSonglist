// DEFAULT CODE
const BASE_URL = 'https://api.lyrics.ovh/v1/'
const songList = document.querySelector('#song-list')
const lyricsPanel = document.querySelector('#lyrics-panel')
const album = {
  artist: 'Adele',
  album: '25',
  tracks: [
    'Hello',
    'Send My Love (To Your New Lover)',
    'I Miss You',
    'When We Were Young',
    'Remedy',
    'Water Under the Bridge',
    'River Lea',
    'Love in the Dark',
    'Million Years Ago',
    'All I Ask',
    'Sweetest Devotion'
  ]
}


// WRITE YOUR CODE ////////////////////////

songList.addEventListener('click', function () {
  if (event.target.classList.contains('nav-link')) {
    let song = event.target.innerText
    axios.get(BASE_URL + 'Adele/' + song)
      .then((response) => {
        console.log(response.data)
        lyricsPanel.innerHTML = `
          <h3>${song}</h3>
          <pre>${response.data.lyrics}</pre>
          `
      })
  }
})



function AdeleAlbum(album) {
  let songListText = ''
  for (let i = 0; i < album.tracks.length; i++) {
    songListText += `
      <li class="nav-item">
        <a class="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">${album.tracks[i]}</a>
      </li>
    `
  }
  songList.innerHTML = songListText
}

AdeleAlbum(album)


//fetch movie info and Wikipedia summary

document.querySelector('button').addEventListener('click', getSong);
function getSong(){
    const artist = document.querySelector('#text').value;
    const song= document.querySelector('#text1').value;
    const url= `https://musicbrainz.org/ws/2/artist?query=${encodeURIComponent(artist)}&fmt=json`;//learned the encode part from Karim
    //fmt=json converted it from XML into JSON. Ref: https://musicbrainz.org/doc/MusicBrainz_API
//artist info result
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        document.querySelector('.artist').innerText = data.artists[0].name;
         //now find lyrics of their song
        const url1= `https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(song)}`;
        fetch(url1)
        .then(res=>res.json())
        .then(data1 =>{
            console.log(data1);
            document.querySelector('.song').innerText = song;
            document.querySelector('.lyrics').innerText = data1.lyrics;
        })
       
        .catch(err=>{
            console.log(`error ${err}`);
        })

    })
}


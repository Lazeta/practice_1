for (let i = 1; i <= 10; i++){
    console.log(i)
}

let numbers = [1, 2, 3, 4, 5]; 
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]
    console.log(number);
}

let objects = [{name: 'Alice '}, {name: 'Bob'}, {name: 'Charlie'}];
for (let i = 0; i < objects.length; i++) {
    const object = objects[i]
    console.log(object.name);
}

// мы никогда не знаем точно заранее, когда пишем алгоритм, сколько будет элементов в массиве, поэтому делаем так:
let playlists = [
    {
        title: 'Hello',
        track: 'World',
    },
    {
        title: 'Hello Miki',
        track: 'It`s me',
    },
]


function renderPlaylists(playlists){
    for (let i = 0; i < playlists.length; i++) {
        const playlist = playlists[i];
        
        for (let j = 0; j < playlist.track.length; j++){
            const track = playlist.track[j]
            renderTrack(track);
        }
    }
} 
function renderTrack(track) {
    // const trackElement = document.createElement('div');
    // trackElement.textContent = track;
    // document.body.append(trackElement);
    console.log(track)
}
renderPlaylists(playlists)
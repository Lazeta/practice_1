let playlist = {
    title: 'Hip-Hop Hits',
    coverImageUrl: 'pre-course-hw-js/src/img/artworks-000211040229-3nvgd9-t500x500.jpg',
    info: {
        totalTracksCount: 4,
        totalTracksDurationInSeconds: 733
    },
    tracks: [
        {
            coverTrackUrl: '/pre-course-hw-js/src/img/cover.jpg',
            artistName: 'Eminem',
            title: 'Rap God',
            // fileUrl: 'Eminem_-_Rap_God.mp3',
            fileUrl: 'https://dl01.dtmp3.pw/mp3/10893.mp3',
            isHot: false,
        },
        {
            coverTrackUrl: '/pre-course-hw-js/src/img/cover.jpg',
            artistName: '50cent',
            title: 'In da Club',
            // fileUrl: '50_Cent_-_In_Da_Club_FlexyOkay.com.mp3',
            fileUrl: 'https://dl03.dtmp3.pw/mp3/16308.mp3',
            isHot: true,
        },
        {
            coverTrackUrl: '/pre-course-hw-js/src/img/cover.jpg',
            artistName: 'DMX',
            title: 'X Gon` Give It To Ya',
            // fileUrl: 'DMX_-_X_Gon`_Give_It_To_Ya.mp3',
            fileUrl: 'https://dl03.dtmp3.pw/mp3/20615.mp3',
            isHot: false,
        },
        {
            coverTrackUrl: '/pre-course-hw-js/src/img/cover.jpg',
            artistName: 'Eminem feat 50 Cent, Cashis, Lloyd Banks',
            title: 'You Don`t Know',
            // fileUrl: 'Eminem_feat_50_Cent_-_Cashis_-_Lloyd_Banks_-_You_Don`t_Know.mp3',
            fileUrl: 'https://dl03.dtmp3.pw/mp3/14765.mp3',
            isHot: false,
        }
    ]
}
let playlist2 = {
    title: 'Hip-Hop Hits',
    coverImageUrl: 'pre-course-hw-js/src/img/artworks-000211040229-3nvgd9-t500x500.jpg',
    info: {
        totalTracksCount: 4,
        totalTracksDurationInSeconds: 733
    },
    tracks: [
        {
            coverTrackUrl: '/pre-course-hw-js/src/img/cover.jpg',
            artistName: 'Eminem',
            title: 'Rap God',
            // fileUrl: 'Eminem_-_Rap_God.mp3',
            fileUrl: 'https://dl01.dtmp3.pw/mp3/10893.mp3',
            isHot: false,
        },
        {
            coverTrackUrl: '/pre-course-hw-js/src/img/cover.jpg',
            artistName: '50cent',
            title: 'In da Club',
            // fileUrl: '50_Cent_-_In_Da_Club_FlexyOkay.com.mp3',
            fileUrl: 'https://dl03.dtmp3.pw/mp3/16308.mp3',
            isHot: true,
        },
        {
            coverTrackUrl: '/pre-course-hw-js/src/img/cover.jpg',
            artistName: 'DMX',
            title: 'X Gon` Give It To Ya',
            // fileUrl: 'DMX_-_X_Gon`_Give_It_To_Ya.mp3',
            fileUrl: 'https://dl03.dtmp3.pw/mp3/20615.mp3',
            isHot: false,
        },
        {
            coverTrackUrl: '/pre-course-hw-js/src/img/cover.jpg',
            artistName: 'Eminem feat 50 Cent, Cashis, Lloyd Banks',
            title: 'You Don`t Know',
            // fileUrl: 'Eminem_feat_50_Cent_-_Cashis_-_Lloyd_Banks_-_You_Don`t_Know.mp3',
            fileUrl: 'https://dl03.dtmp3.pw/mp3/14765.mp3',
            isHot: false,
        }
    ]
}


// render
renderPlaylist(playlist)
renderPlaylist(playlist2)

function renderPlaylist(playlistForRendering) {
    renderPlaylistHeader(playlistForRendering);

    renderTrack(playlistForRendering.tracks[0]);
    renderTrack(playlistForRendering.tracks[1]);
    renderTrack(playlistForRendering.tracks[2]);
    renderTrack(playlistForRendering.tracks[3]);

    // let trackListElement = document.createElement('ul');

    // let track1Element = document.createElement('li');
    // track1Element.append(playlistForRendering.tracks[0].artistName + ' - ' + playlistForRendering.tracks[0].title);
    // let track2Element = document.createElement('li');
    // track2Element.append(playlistForRendering.tracks[1].artistName + ' - ' + playlistForRendering.tracks[1].title);
    // let track3Element = document.createElement('li');
    // track3Element.append(playlistForRendering.tracks[2].artistName + ' - ' + playlistForRendering.tracks[2].title);
    // let track4Element = document.createElement('li');
    // track4Element.append(playlistForRendering.tracks[3].artistName + ' - ' + playlistForRendering.tracks[3].title);

    // trackListElement.append(track1Element);
    // trackListElement.append(track2Element);
    // trackListElement.append(track3Element);
    // trackListElement.append(track4Element);

    // document.body.append(trackListElement);
}

function renderPlaylistHeader(playlistForRendering){
    // логика отрисовки шапки входного плейлиста
    let playlistImageElement = document.createElement('img');
    playlistImageElement.src = playlistForRendering.coverImageUrl;
    document.body.append(playlistImageElement);

    let playlistTitleElement = document.createElement('h2');
    playlistTitleElement.append(playlistForRendering.title);
    document.body.append(playlistTitleElement);
}
function renderTrack(inputTrackForRendering){
    // логика отрисовки входного трека
    let trackElement = document.createElement('div');
    trackElement.append(inputTrackForRendering.artistName + ' - ' + inputTrackForRendering.title);

    let playerElement = document.createElement('audio');
    playerElement.src = inputTrackForRendering.fileUrl;
    playerElement.controls = true;

    trackElement.append(playerElement)

    let coverElement = document.createElement('img');
    coverElement.style.width = '50px';
    coverElement.src = inputTrackForRendering.coverTrackUrl;

    trackElement.append(coverElement)

    document.body.append(trackElement);
}
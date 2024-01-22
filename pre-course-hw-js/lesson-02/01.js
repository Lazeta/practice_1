let playlist = {
    title: 'Hip-Hop Hits',
    coverImageUrl: 'pre-course-hw-js/src/img/artworks-000211040229-3nvgd9-t500x500.jpg',
    info: {
        totalTracksCount: 4,
        totalTracksDurationInSeconds: 733,
    },
    tracks: [
        {
            coverTrackUrl: '/pre-course-hw-js/src/img/cover.jpg',
            artistName: 'Eminem',
            title: 'Rap God',
            fileUrl: 'https://dl01.dtmp3.pw/mp3/10893.mp3',
            isHot: false,
        },
        {
            coverTrackUrl: '/pre-course-hw-js/src/img/cover.jpg',
            artistName: '50cent',
            title: 'In da Club',
            fileUrl: 'https://dl03.dtmp3.pw/mp3/16308.mp3',
            isHot: true,
        },
        {
            coverTrackUrl: '/pre-course-hw-js/src/img/cover.jpg',
            artistName: 'DMX',
            title: 'X Gon` Give It To Ya',
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

function renderPlaylist(playlistRendering) {
    
}
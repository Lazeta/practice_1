let playlist = {
    title: 'Hot hits 2000 years',
    coverUrl: './pre-course-hw-js/src/img/artworks-000211040229-3nvgd9-t500x500.jpg',
    info: {
        totalTracksCount: 10,
        totalTracksDuration: 1850,
    },
    tracks: [
        {
            titleTrack: 'Sonne',
            fileUrl: 'https://dl3s4.muzofond.fm/aHR0cDovL2YubXAzcG9pc2submV0L21wMy8wMDEvNzkwLzI3Ny8xNzkwMjc3Lm1wMw==.mp3',
            coverUrlTrack: './src/img/Sonne.jpg',
            executor: 'Rammstein',
            years: '2001',
            isTop: 'true',
        },
        {
            titleTrack: 'Du hast',
            fileUrl: 'https://dl3s2.muzofond.fm/aHR0cDovL2YubXAzcG9pc2submV0L21wMy8wMDQvMzk1Lzg4Mi80Mzk1ODgyLm1wMw==.mp3',
            coverUrlTrack: './src/img/Du hast.jpg',
            executor: 'Rammstein',
            years: '1997',
            isTop: 'false',
        },
        {
            titleTrack: 'Deutschland',
            fileUrl: 'https://dl3s2.muzofond.fm/aHR0cDovL2YubXAzcG9pc2submV0L21wMy8wMDMvNjg0LzczNC8zNjg0NzM0Lm1wMw==.mp3',
            coverUrlTrack: './src/img/Deutschland.jpg',
            executor: 'Rammstein',
            years: '2019',
            isTop: 'true',
        }
    ],
}

// render
renderPlaylist(playlist)

function renderPlaylist(playlistForRendering) {
    
}
export function renderPlaylistTrack(inputTrackForRendering) {
    const trackElement = document.createElement('div');

    const coverElement = document.createElement('img');
    coverElement.src = inputTrackForRendering.coverUrlTrack;
    coverElement.style = "border: 4px solid green";
    trackElement.append(coverElement);

    const trackTitleElement = document.createElement('div');
    
    if (inputTrackForRendering.isTop) {
        trackTitleElement.append('🔥')
    }

    trackTitleElement.append(inputTrackForRendering.executor + " - " + inputTrackForRendering.titleTrack)
    trackElement.append(trackTitleElement);

    const audioElement = document.createElement('audio');
    audioElement.src = inputTrackForRendering.fileUrl;
    audioElement.controls = true;
    trackElement.append(audioElement);

    document.body.append(trackElement)
}
import { renderPlaylistTrack } from "./track/renderTrack.component.js";
// import { renderSeparator } from "";

export function renderPlaylistTracks(tracks) {
    for (let i = 0; i < tracks.length; i++) {
        const track = tracks[i]
        renderPlaylistTrack(track);
        // renderSeparator();
    }
}
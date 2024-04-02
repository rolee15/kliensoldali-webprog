import { examplePlaylists } from "../../domain/playlist"
import { exampleTracks } from "../../domain/track"
import cn from 'classnames'
import PlaylistList from "./PlaylistList";
import Playlist from "./Playlist";
import TrackDetails from "./TrackDetails";
import { useState } from "react";

function Playlists() {
    const playlists = examplePlaylists;
    const tracks = exampleTracks;

    const defaultId = playlists[0].id;
    const [chosenPlaylistId, setChosenPlaylistId] = useState(defaultId);

    const activePlaylistIndex = Math.floor(
        Math.random() * examplePlaylists.length
    );
    const activePlaylistId = examplePlaylists[activePlaylistIndex].id;

    return (
        <>
        <div className="ui container">
            <h1>My Playlists</h1>
            <div className="ui stackable two column grid">
                <PlaylistList
                    playlists={playlists}
                    chosenPlaylistId={activePlaylistId}
                ></PlaylistList>
                <Playlist></Playlist>
            </div>
            <div className="ui divider"></div>
            <TrackDetails></TrackDetails>
        </div>
        </>
    )
}

export default Playlists
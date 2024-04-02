import bonjovi from "../../assets/bonjovi.jpg";
import { examplePlaylists } from "../../data/playlist";
import { exampleTracks } from "../../data/track";

import PlaylistList from "./PlaylistList";
import Playlist from "./Playlist";
import TrackDetails from "./TrackDetails"

import { useState } from "react";
import cn from "classnames";

function Playlists() {
  const playlists = examplePlaylists;
  const tracks = exampleTracks;

  const defaultId = useState(playlists[0].id);
  const [chosenPlaylistId, setChosenPlaylistId] = defaultId;
  const chosenPlaylist = playlists.find(
    (playlist) => playlist.id === chosenPlaylistId
  );

  const [chosenTrackId, setChosenTrackId] = useState();
  const chosenTrack = tracks.find((track) => track.id === chosenTrackId);

  const handleChosenPlaylist = (id) => {
    setChosenPlaylistId(id);
    setChosenTrackId(null);
  };

  return (
    <>
      <div className="ui container">
        <h1>My Playlists</h1>
        <div className="ui stackable two column grid">
          <PlaylistList
            playlists={playlists}
            chosenPlaylistId={chosenPlaylistId}
            onChosePlaylist={handleChosenPlaylist}
          ></PlaylistList>
          <Playlist tracks={tracks}></Playlist>
        </div>
        <div className="ui divider"></div>
        <TrackDetails></TrackDetails>

        <div className="ui segment">
          <div className="ui items">
            <div className="item">
              <div className="image">
                <img src={bonjovi} />
              </div>
              <div className="content">
                <a className="header">It's my life</a>
                <div className="meta">
                  <span>Bon Jovi</span>
                  <span>4:35</span>
                </div>
                <div className="extra">
                  <a
                    href="https://open.spotify.com/track/0v1XpBHnsbkCn7iJ9Ucr1l"
                    className="ui button tiny green button"
                    target="_blank"
                  >
                    <i className="spotify icon"></i>
                    Listen on Spotify
                  </a>
                  <a
                    href="https://tabs.ultimate-guitar.com/tab/bon-jovi/its-my-life-chords-951538"
                    className="ui button tiny teal button"
                    target="_blank"
                  >
                    <i className="microphone icon"></i>
                    Show lyrics
                  </a>
                  <a
                    href="https://www.azlyrics.com/lyrics/bonjovi/itsmylife.html"
                    className="ui button tiny orange button"
                    target="_blank"
                  >
                    <i className="guitar icon"></i>
                    Show chords
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ui modal">
        <i className="close icon"></i>
        <div className="header">Add new Playlist</div>
        <div className="image content">
          <div className="description">
            <div className="ui form">
              <div className="field">
                <label>Name</label>
                <input required type="text" placeholder="My Playlist" />
              </div>
            </div>
          </div>
        </div>
        <div className="actions">
          <div className="ui black deny button">Cancel</div>
          <div className="ui positive right labeled icon button">
            Add
            <i className="plus icon"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Playlists;

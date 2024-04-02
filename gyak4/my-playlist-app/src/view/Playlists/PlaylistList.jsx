import cn from "classnames";
import PropTypes from "prop-types";

function PlaylistList({ playlists, chosenPlaylistId, onChosePlaylist }) {
  return (
    <>
      <div className="ui six wide column">
        <h3>Playlists</h3>
        <div className="ui very relaxed selection list">
          {playlists.map((playlist) => (
            <div
              key={playlist.id}
              className={cn("item", {
                active: playlist.id === chosenPlaylistId,
              })}
              onClick={() => onChosePlaylist(playlist.id)}
            >
              <i className="large music middle aligned icon"></i>
              <div className="content">
                <a className="header">{playlist.name}</a>
                <div className="description">{playlist.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

PlaylistList.propTypes = {
  playlists: PropTypes.arrayOf(PropTypes.object),
  chosenPlaylistId: PropTypes.number,
  onChosePlaylist: PropTypes.func
}

export default PlaylistList;

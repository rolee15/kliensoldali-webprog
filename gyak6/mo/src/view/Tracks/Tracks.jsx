import { exampleTracks } from "../../domain/track"

function Tracks() {
    return (
        <div className="ui container">
            <a href="#" className="ui right floated green button" id="newModal">
            <i className="plus icon"></i>
            New track
            </a>
            <h1>Tracks</h1>
            <table className="ui celled striped table">
            <thead>
                <tr>
                <th>Artist</th>
                <th>Title</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {exampleTracks.map((track) => (
                    <tr key={track.id}>
                        <td><i className="user icon"></i> {track.artist}</td>
                        <td><i className="music icon"></i> {track.title}</td>
                        <td className="right aligned collapsing">
                            <div className="ui icon top right pointing dropdown button">
                            <i className="plus icon"></i>
                            <div className="menu">
                                <div className="header">Add to playlist</div>
                                <div className="ui search icon input">
                                <i className="search icon"></i>
                                <input type="text" name="search" placeholder="Search playlists..." />
                                </div>
                                <div className="item">Heavy Metal</div>
                                <div className="item">classNameics</div>
                                <div className="item">Movie Soundtracks</div>
                            </div>
                            </div>
                            <button className="ui icon button"><i className="edit icon"></i></button>
                            <button className="ui icon button red"><i className="trash icon"></i></button>
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    )
}

export default Tracks
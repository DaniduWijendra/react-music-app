import React from 'react';
import "./playList.css";
import TrackList from '../TrackList/trackList'

export class playList extends React.Component {
    constructor(props) {
        super(props)
    
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    handleNameChange(event)
    {
        this.props.onNameChange(event.target.value);
    }
    
    render() {
        return (
            <div className = "PlayList">
                <input onChange = {this.onNameChange} defaultValue = {'New Play List'}/>
                <TrackList track = {this.props.playListTracks}
                isRemoval = {true}
                onRemove = {this.props.onRemove}/>
                <button className = "PlayList-save" onClick = {this.props.onSave}>Save to Spotify</button>
            </div>
        );
    }
}

export default playList;

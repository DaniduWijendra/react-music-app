import React from 'react';
import "./SearchResult.css";
import TrackList from '../TrackList/trackList'

export class SearchResult extends React.Component {
    render() {
        return (
            <div className = "SearchResult">
                 <h2>Result</h2>
                 <TrackList tracks = {this.props.SearchResult} onAdd = {this.props.onAdd}/>
            </div>
        );
    }
}

export default SearchResult;

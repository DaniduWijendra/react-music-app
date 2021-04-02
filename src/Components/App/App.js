import React from 'react';
import './App.css';

import Playlist from '../PlayList/PlayList';
import SearchBar from '../SerchBar/SearchBar';
import Searchresult from '../SearchResult/SearchResult';
import spotify from '../util/Spotify';


export class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      searchresult:[],
      playlistName:'New PlayList',
      playlistTracks:[]
    }
    this.search = this.search.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlayListName = this.updatePlayListName.bind(this);
    this.savePlayList = this.savePlayList.bind(this);
    this.removeTrackSearch = this.removeTrackSearch.bind(this);
    this.doThese = this.doThese.bind(this);
  }

  search(term)
  {
    spotify.search(term).then(searchresult=>
      {
        this.setState({searchresult:searchresult});
      });
  }
  addTrack(track)
  {
    let tracks = this.state.playlistTracks;
    if(tracks.find(savedTrack => savedTrack.id===track.id))
      return;
    tracks.push(track);
    this.setState(
      {
        playlistTracks : tracks
      }
    );
  }
  removeTrack(track)
  {
    let tracks = this.state.playlistTracks;
    let trackSearch = this.state.searchresult;
    tracks = tracks.filter(currentTrack => currentTrack.id!==track.id);
    trackSearch.unshift(track);
    this.setState({
      playlist:tracks
    });
  }
  removeTrackSearch(track)
  {
    let tracks = this.state.searchresult;
    tracks = tracks.filter(currentTrack => currentTrack.id!==track.id);
    this.setState({
      searchresult:tracks
    });
  }
  doThese(track)
  {
    this.addTrack(track);
    this.removeTrackSearch(track);
  }
  updatePlayListName(name)
  {
    this.setState({
      updatePlayListName:name
    });
  }
  savePlayList()
  {
    const trackUri = this.state.playlistTracks.map(track => track.uri);
    spotify.savePlayList(this.state.playlistName,trackUri).then(
      () =>
      {
        this.setState({
          updatePlayListName: 'New Playlist',
          playlistTracks:[]
        })
      }
    )
  }
  
}

export default App

function App() {
  return (
   <div>
     <h1>
       <a href="http://localhost:3000">Music Profile</a>
     </h1>
     <div className="App">
       <SearchBar onSearch={this.search}/>
       <div className="App-playlist">
         <Searchresult searchresult = {this.state.searchresult} onAdd = {this.doThese}/>
         <Playlist playlistTracks = {this.state.playlistTracks} onNameChange = {this.updatePlayListName} onRemove = {this.removeTrack} onSave = {this.savePlayList}/>
       </div>
     </div>

   </div>
  );
}

export default App;

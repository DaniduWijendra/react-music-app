import React from 'react';
import "./track.css";


export class searchBar extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             term:''
        };
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }
    addTrack(event)
    {
       this.props.onAdd(this.props.track);
    }
    removeTrack()
    {
        this.props.onRemove(this.state.track);
    }
    renderAction()
    {
        if(this.props.isRemoval)
        {
            return
            {
                <button className = "Track-information" onClick = {this.removeTrack}> - </button>
            };
        }
        
        return
            {
                <button className = "Track-information" onClick = {this.addTrack}> + </button>
            };
        
    }
    
    
    render()
    {
        return (
            //return html
            <div className = "Track">
                <div className = "Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>
                        {this.props.track.artist} | {this.props.track.album}
                    </p>
                    <iframe
                        src = "https://open.spotify.com/embed/track" + {this.props.track.id}
                        width = "80"
                        height ="300"
                        frameborder = "0"
                        allowtransparency = "true"
                        allow = "encrypted-media"
                        title = "preview"
                    />
                    
                </div>
                {this.renderAction}
            </div>
        )
    };
}

export default searchBar


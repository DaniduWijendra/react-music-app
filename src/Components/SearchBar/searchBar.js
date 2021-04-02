import React from 'react';
import "./serchBar.css";


export class searchBar extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             term:''
        };
        this.handleTermChange = this.handleTermChange.bind(this);
        this.search = this.search.bind(this);
        this.handlEnter = this.handlEnter.bind(this);
    }
    handleTermChange(event)
    {
        this.setState({term: event.target.value});
    }
    search()
    {
        this.props.onSearch(this.state.term);
    }
    handlEnter(event)
    {
        if(event.keyCode ===13){
            this.search();
        }
    }
    
    
    render() {
        return (
            //return html
            <div className = "Search">
                <input placeholder = "Enter song or playlist" onChange = {this.handleTermChange} onKeyUp = {this.handlEnter}/>
                <button className= "SearchButton" onClick = {this.search}>
                    SEARCH
                </button>
            </div>
        )
    };
}

export default searchBar


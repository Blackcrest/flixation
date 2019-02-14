import React from 'react';

export default class Dashboard extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            openSearch: false,
            query: ''
        }
    }

    componentDidMount(){
        document.addEventListener('keydown', this.keyStrokes, false);
    }

    componentWillUnmount(){
        document.removeEventListener('keydown', this.keyStrokes, false);
    }

    keyStrokes = (e) =>{
        if(e.keyCode === 13) {
            if(this.state.openSearch){
                console.log('enter pressed')

                this.setState({
                    openSearch: false,
                    query: ''
                })
            }
        }

        if(e.keyCode === 27) {
            if(this.state.openSearch){
                this.setState({openSearch: false})
            }
        }
    }

    onChangeQuery = (e) => {
        this.setState({query: e.target.value})
    }

    renderSearchOverlay = () => {
        return(
            <div className="overlay-search">
                <label>Search...</label>
                <input type="text" placeholder="Search" onChange={this.onChangeQuery} />
            </div>
        )
    }

    openSearch = () => {
        this.setState({openSearch:true})
    }

    render() {
        return (
            <div>
                <div className="page-content">
                    Dashboard Page Content.
                </div>

                
                {this.state.openSearch ? this.renderSearchOverlay() : undefined}
            </div>
        );
    }
}
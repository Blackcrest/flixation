import React from 'react';

import TabControl from '../components/TabControl/TabControl';
import Dropdown from '../components/Form/Dropdown';

export default class Discover extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            selectedType: "",
            selectedYear: 2019,
            sortBy: "popularity.desc",
            selectedGenres: [],
            discoveredResults: []
        }
    }

    onYearChange = (selectedYear) => {
        this.setState({selectedYear})
    }

    onSortChange = (sortBy) => {
        this.setState({sortBy})
    }

    render(){
        console.log(this.state)

        return(
            <div>
                <TabControl items={["Movies", "Tv Shows"]} />
                <div>
                    <Dropdown title="Year" 
                              value={this.state.selectedYear}
                              range={[1900, 2019]} 
                              callback={this.onYearChange}/>
                    <Dropdown title="Sort by"
                              value={this.state.sortBy}
                              options={[{"popularity.desc": "Popularity Desc"}, 
                                        {"popularity.asc": "Popularity Asc"},
                                        {"rating.desc": "Rating Desc"},
                                        {"rating.asc": "Rating Asc"},
                                        {"release_date.desc": "Release Date Desc"},
                                        {"release_date.asc": "Release Date Asc"},
                                        {"title.asc": "Title [A - Z]"},
                                        {"title.desc": "Title [Z - A]"}]}
                              callback={this.onSortChange}  />
                    <div>Genre</div>
                </div>
                <div>
                    Results
                </div>
            </div>
        )
    }
}
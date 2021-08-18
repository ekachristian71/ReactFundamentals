import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList/Index';
import Loader from '../../components/Loader/Index';
import Intro from '../../components/Intro/Index';

class Series extends Component {
    state = {
        series: [],
        seriesName: "",
        isFetching: false
    }

    componentDidMount() {
    // const series = ['Vikings', 'Game of Thrones'];
    // setTimeout(() => {
    //   this.setState({series: series})
    // },2000)
    fetch('http://api.tvmaze.com/search/shows?q=Vikings')
        // .then((response) => {
        //   console.log(response);
        // })
        .then(response => response.json())
        // .then(json => console.log(json))
        .then(json => this.setState({series: json}))
    }

    onSeriesInputChange = e => {
        this.setState({ seriesName:e.target.value, isFetching:true });

        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then(response => response.json())
        .then(json => this.setState({series: json, isFetching: false}))
        console.log(e);
        console.log(e.target.value);
    }
    render() {
        const { series, seriesName, isFetching } = this.state;
        return (
            <div>
                {/* The length of series array - {this.state.series.length} */}
                <Intro message="Here You Can Find All of Most loved films."/>
                <div>
                    <input
                        value={seriesName}
                        type="text"
                        onChange={this.onSeriesInputChange} />
                </div>
                {
                    !isFetching && series.length === 0 && seriesName.trim() === ""
                    &&
                    <p>Please enter series name into the input</p>
                }
                {
                    !isFetching && series.length === 0 && seriesName.trim() !== ""
                    &&
                    <p>No TV Series has been found with this name</p>
                }
                {
                    isFetching && <Loader />
                }
                {
                    !isFetching && <SeriesList list={this.state.series}/>
                }
            </div>
        )
    }
}

export default Series;
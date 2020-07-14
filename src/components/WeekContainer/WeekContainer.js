import React, {Component} from 'react';
import Card from './Card';

class WeekContainer extends Component{
    
	state = {
    	fullData:[],
    	dailyData:[]
    }

    componentDidMount = () => {
        const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    	const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=Mumbai&units=metric&appid=${API_KEY}`
		
		fetch(weatherURL)
		    .then(res => res.json())
		    .then(data => {
		    	const dailyData = data.list.filter(reading => reading.dt_txt.includes("12:00:00"))
		    	this.setState({
		    		fullData: data.list,
		    		dailyData: dailyData
		    	}, () => console.log(this.state))
		    }) 		
    }

    formatDayCards = () => {
    	return this.state.dailyData.map((reading,index) => {
    		return <Card reading = {reading} key = {index}/>
    	})
    }

    render(){
        return(
        	<div>
          		{this.formatDayCards()}
          	</div>
        )
    }
}

export default WeekContainer;
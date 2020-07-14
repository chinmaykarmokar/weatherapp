import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCloudSun } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import './WeatherCard.css'

var moment = require('moment');

const DayWeather = ({reading}) => {
	let newDate = new Date();
	const weekDay = reading.dt*1000;
	newDate.setTime(weekDay);
	
		return(
			<div>
				<Container>
					<Row>
						<Col md = {12}>
							<Card className = "WeatherCard">
								<Card.Body>
									<Card.Title><p><FaClock/> {moment(newDate).format('dddd')} {moment(newDate).format('MMMM Do, h:mm a')}</p></Card.Title>
									<Card.Text>
										<br/>
										<h3><FaMapMarkerAlt/> Mumbai</h3>
										<br/>
										<h1><b>{Math.round(reading.main.temp)}°C</b></h1>
										<p><FaCloudSun/> {reading.weather[0].description}</p>
										<p>Humidity: {reading.main.humidity} %</p>
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		)
}

export default DayWeather;
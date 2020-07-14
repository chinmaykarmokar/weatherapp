import React from 'react';
import './Footer.css'
import Aux from '../../hoc/Auxillary'
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = (props) => (
	<Aux>
		<div className = "Footer">
			<Container fluid>
				<h3>About <h3 style = {{fontFamily:"Pacifico"}}>Weather <FaLeaf/></h3></h3>
				<hr/>
					<Row>
						<Col md = {6}>
							<h6 className = "bio">
								Weather is a Weather App that brings you forecast for 5 days, currently only weather for Mumbai is available.
								<br/>
								<br/>
								Weather is created with the OpenWeatherMap API.
								<br/>
								<br/>
								This website is created with <FaReact/> ReactJS and MomentJS.
							</h6>
						</Col>
						<br/>
						<br/>
						<Col md = {1}></Col>
						<Col md = {5}>
							<h4>Connect with me</h4>
							<hr/>
							<FaGlobe style = {{fontSize:"40px",padding:"10px"}} className="d-inline float"/>
							<a style = {{padding:"10px", color:"#fff"}} target = "_blank" className = "d-inline" href = "https://chinmaykarmokar.github.io/app/">Visit my portfolio</a>
							<br/>
							<a href="https://github.com/chinmaykarmokar/" target="_blank"><FaGithub style={{fontSize:"60px",padding:"10px"}}/></a>
							<a href="https://twitter.com/chinmaykarmokar" target="_blank"><FaTwitter style={{fontSize:"60px",padding:"10px"}}/></a>
							<a href="https://www.instagram.com/chinmay.js/" target="_blank"><FaInstagram style={{fontSize:"60px",padding:"10px"}}/></a>
						</Col>
					</Row>
			</Container>
		</div>
	</Aux>
)

export default Footer;
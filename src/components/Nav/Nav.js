import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { FaLeaf } from "react-icons/fa";
import './Nav.css'
import Aux from '../../hoc/Auxillary';

const Navs = (props) => (
	<Aux>
		<Navbar className = "Navbar justify-content-center">
			<Navbar.Brand className = "NavItem">Weather <FaLeaf/></Navbar.Brand>
		</Navbar>
	</Aux>
)

export default Navs;
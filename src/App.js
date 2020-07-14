import React from 'react';
import './App.css';
import Aux from './hoc/Auxillary'
import WeekContainer from './components/WeekContainer/WeekContainer'
import Navs from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
    render(){
        return(
        	<Aux>
        		<Navs/>
       			<WeekContainer/>
       			<br/>
       			<Footer/>
       		</Aux>
        )
    }
}

export default App;
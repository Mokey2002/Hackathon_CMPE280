import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import Home from './Home/Home';
import ImportExport from './Ports/ImportExport';
import Graphs from './Graph/Graph';
import Slide from './slide/Slide';
import Agricultural from './Agricultural/Agricultural';
import Graphs1 from './Graph1/Graphs1';
class Main extends Component{
    render(){
        return(
            <div>
                <Route path="/" component={Home}/>
                <Route path="/importexport" component={ImportExport}/>
                <Route path="/graph" component={Graphs}/>
                <Route path="/slide" component={Slide}/>
                <Route path="/agricultural" component={Agricultural}/>
                <Route path="/graph1" component={Graphs1}/>
            </div>
        );
    }
}
export default Main;
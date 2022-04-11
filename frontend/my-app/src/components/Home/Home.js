import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';
class Home extends Component{

    render(){



        let navLogin = null;
        if(1==1){
            console.log("Able to read cookie");
            navLogin = (
                
                <ul class="nav navbar-nav navbar-right">
                        <li><Link to="/graph" onClick = {this.handleLogout}><span class="glyphicon glyphicon-user"></span>Macroeconomics</Link></li>
                        <li><Link to="/importexport"><span class="glyphicon glyphicon-user"></span>Import and Export</Link></li>
                        <li><Link to="/slide"><span class="glyphicon glyphicon-user"></span>Macroeconomic Researcher Food Security Time Series Dashboard</Link></li>
                </ul>
            );
        }
        return(
            <div>
           
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand">Macroeconomic Researcher Food Security Time Series Dashboard</a>
                </div>
   
              
<div class="form-group ">

</div>

                {navLogin}
            </div>
        </nav>
    </div>
        )
    }
}
export default Home;


import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';
import {Chart} from "react-google-charts";

export const data = [
    ["Year", "Sales", "Expenses"],
    ["2004", 1000, 400],
    ["2005", 1170, 460],
    ["2006", 660, 1120],
    ["2007", 1030, 540],
  ];
  
  export const options = {
    title: "GPD USD",
    legend: { position: "bottom" },
  };
class Agricultural extends Component{
    constructor(props){
        super(props);
        this.state = {
            items: [],
            minYear: "",
            maxYear: "",
            selectedOption: "USA",
        }

        this.selectedOptionHandler = this.selectedOptionHandler.bind(this);
        this.minYearHandler = this.minYearHandler.bind(this);
        this.maxYearHandler = this.maxYearHandler.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    componentWillMount(){
        this.setState({
            selectedOption: "USA",
            minYear: "1990",
            maxYear: "2000",
            items: [],
        })
    }
    countryHandler=(e)=>{
        this.setState({
            country: e.target.value
        })
    }
    selectedOptionHandler=(e)=>{
        this.setState({
            selectedOption: e.target.value
        })
    }
    minYearHandler=(e)=>{
        this.setState({
            minYear: e.target.value
        })
    }
    maxYearHandler=(e)=>{
        this.setState({
            maxYear: e.target.value
        })
    }
    submitForm =(e)=>{
        e.preventDefault();
        const data = {
            selectedOption: this.state.selectedOption,
            minYear: this.state.minYear,
            maxYear: this.state.maxYear,
        }
        axios.post('http://localhost:3001/getAgriculture',data)
        .then(res =>{
            if(res){
                this.setState({
                    items : (res.data) 
                })
            }
        });
    }
    render(){
        console.log("HELLO");
        console.log(this.state.items);
        return(
            <div>
                <h1>Hello</h1>
                <div className='form-check form-check-inline'>
                    <input id="inLineRadio1" type="radio" name="countryName" value="USA" checked={this.state.selectedOption ==="USA"} onChange={this.selectedOptionHandler} class="form-check-input"/>
                    <label class="form-check-label" for ="inLineRadio1">USA</label>
                </div>
                <div className='form-check form-check-inline'>
                    <input id="inLineRadio2" type="radio" name="countryName" value="CHINA" checked={this.state.selectedOption ==="CHINA"} onChange={this.selectedOptionHandler} class="form-check-input"/>
                    <label class="form-check-label" for ="inLineRadio2">CHINA</label>
                </div>
                <div className='form-check form-check-inline'>
                    <input id="inLineRadio3" type="radio" name="countryName" value="INDIA" checked={this.state.selectedOption ==="INDIA"} onChange={this.selectedOptionHandler} class="form-check-input"/>
                    <label class="form-check-label" for ="inLineRadio3">INDIA</label>
                </div>
                <div>
                    <button onClick={this.submitForm} class="btn btn-success" type='submit'>GO</button>
                </div>
                <Chart
              width={'700px'}
              height={'300px'}
              chartType="LineChart"
              loader={<div>Loading Chart</div>}
              data={this.state.items}
              options={options}
              rootProps={{ 'data-testid': '3' }}
            />    
            </div>
        )
    }
}
export default Agricultural;
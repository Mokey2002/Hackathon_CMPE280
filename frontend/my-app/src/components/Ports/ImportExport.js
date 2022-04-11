import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';
import { Chart } from "react-google-charts";
import Select from 'react-select';


  const techCompanies = [
    { label: "2018", value: 2018 },
    { label: "2019", value: 2019 },
    { label: "2020", value:  2020},
    { label: "2021", value:  2021}
  ];
class ImportExport extends Component{

    constructor(props){
        super(props);
        this.state = {  
            items:  [],
            itemsweird:[],
            country: "Saudi",
            grain:"Wheat",
            year:"2015",
            options2:{}
        }
        this.countryHandler = this.countryHandler.bind(this);
        this.grainhandler = this.grainhandler.bind(this);
        this.yearhHandler = this.yearhHandler.bind(this);
        this.submitForm = this.submitForm.bind(this);
     //   this.handleChange = this.handleChange(this);
    }

    componentDidMount(){
        const data = {
            country: this.state.country,
            grain: this.state.grain,
            year: this.state.year,
    
        }
        axios.post('http://localhost:3001/importexport',data)
                .then((response) => {

                    if(response.status === 200){
                        console.log(response.data)
                        this.setState({
                    items : this.state.items.concat(response.data[0]),
                    itemsweird: this.state.itemsweird.concat(response.data[1]),
                    options2:{ title:this.state.country +" " + this.state.grain + " Import Quantity(tonnes) " +  this.state.year }
                });
                        console.log(this.state.items);
                        console.log("passed favorites")
                    } else if(response.status === 201){
                        console.log("INVALID DATA  favorites")
                    }

                //update the state with the response data
              //  this.setState({
              //      books : this.state.books.concat(response.data) 
               // });
            });
    }

    handleChange = (year) => {
        this.setState({ year }, () =>
          console.log(`Option selected:`, this.state.year)
        );
      };
    countryHandler=(e)=>{
        this.setState({
            country: e.target.value
        })
    }
    grainhandler=(e)=>{
        this.setState({
            grain: e.target.value
        })
    }
    yearhHandler=(e)=>{
        this.setState({
            year: e.target.value
        })
    }
    submitForm =(e)=>{
        e.preventDefault();
        const data = {
            country: this.state.country,
            grain: this.state.grain,
            year: this.state.year,
    
        }
        axios.post('http://localhost:3001/importexport',data)
        .then((response) => {

            if(response.status === 200){
                console.log(response.data)
                this.setState({
                    items:[],
                    itemsweird:[],
                })
                this.setState({
            items : this.state.items.concat(response.data[0]),
            itemsweird: this.state.itemsweird.concat(response.data[1]),
            options2:{ title:this.state.country +" " + this.state.grain + " Import Quantity(tonnes) " +  this.state.year.label }
        });

    
                console.log(this.state.items);
                console.log(this.state.itemsweird);
                console.log("passed favorites")
            } else if(response.status === 201){
                console.log("INVALID DATA  favorites")
            }

        //update the state with the response data
      //  this.setState({
      //      books : this.state.books.concat(response.data) 
       // });
    });
    }
 
    render(){
        const { year } = this.state.year;
        return(
            
            <div className="container mt-5">
            <div>
            <div className="col-md-4">
             <Select value={year}  onChange={this.handleChange} options={ techCompanies } />
            </div>
            <h1>Country</h1>

                <div className='form-check form-check-inline'>
                    <input id="inLineRadio1" type="radio" name="countryName" value="Saudi" checked={this.state.country ==="Saudi"} onChange={this.countryHandler} class="form-check-input"/>
                    <label class="form-check-label" for ="inLineRadio1">Saudi Arabia</label>
                    <input id="inLineRadio2" type="radio" name="countryName" value="Egypt" checked={this.state.country ==="Egypt"} onChange={this.countryHandler} class="form-check-input"/>
                    <label class="form-check-label" for ="inLineRadio2">Egypt</label>
                </div>
                <div className='form-check form-check-inline'>
                    <input id="inLineRadio1" type="radio" name="grain" value="Wheat" checked={this.state.grain ==="Wheat"} onChange={this.grainhandler} class="form-check-input"/>
                    <label class="form-check-label" for ="inLineRadio1">Wheat</label>
                    <input id="inLineRadio2" type="radio" name="grain" value="rice" checked={this.state.grain ==="rice"} onChange={this.grainhandler} class="form-check-input"/>
                    <label class="form-check-label" for ="inLineRadio2">Rice</label>
                </div>
                <div>
                    <button onClick={this.submitForm} class="btn btn-success" type='submit'>GO</button>
                </div>
            </div>
            <h2>Import</h2>
            <Chart
              width={'700px'}
              height={'300px'}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={this.state.items}
              options={this.state.options2}
              rootProps={{ 'data-testid': '3' }}
            /> 
            <Chart
              width={'700px'}
              height={'300px'}
              chartType="Sankey"
              loader={<div>Loading Chart</div>}
              data={this.state.itemsweird}
              options={this.state.options2}
              rootProps={{ 'data-testid': '3' }}
            />             
        </div>
        )
    }
}
export default ImportExport;
import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
//asfdaf
class t1 extends Component{

    handleClick(e) {
        //this.saySomething("element clicked");afdsasfdasdf
        alert("Projected GDP: 24,Account Balance: 50,(% of fertilizer production): 32,% GDP: 65,% of total external debt: 78,FDI-NetOutflows(%ofGDP): 34,Manufacturing GDP: 45,Agriculture, forestry, and fishing, value added (annual % growth):32,Total debt service (% of GNI):42");
    }//cz
    render(){
        const style = { width: 400, margin: 50 };
        return(
 
            
         
            <div className="container mt-5">
                <p>Projected GDP </p>
           
               <Box width={300}>
                 <Slider defaultValue={24} aria-label="Default" valueLabelDisplay="auto" />
               </Box>
               <p>Current Account 
Balance (% of GDP)
</p>
           
           <Box width={300}>
             <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
           </Box>
           <p>Foreign direct 
investment, net inflows 
(% of GDP)
</p>
           
           <Box width={300}>
             <Slider defaultValue={32} aria-label="Default" valueLabelDisplay="auto" />
           </Box>
           <p>Fertilizer consumption 
(% of fertilizer 
production)</p>
           
           <Box width={300}>
             <Slider defaultValue={65} aria-label="Default" valueLabelDisplay="auto" />
           </Box>
           <p>Total reserves (% of 
total external debt)
</p>
           
           <Box width={300}>
             <Slider defaultValue={78} aria-label="Default" valueLabelDisplay="auto" />
           </Box>
           <p>FDI-NetOutflows(%ofG
DP)
</p>
           
           <Box width={300}>
             <Slider defaultValue={34} aria-label="Default" valueLabelDisplay="auto" />
           </Box>
           <p>gricultural 
Contribution (% 
GDP) </p>
           
           <Box width={300}>
             <Slider defaultValue={64} aria-label="Default" valueLabelDisplay="auto" />
           </Box>
           <p>Manufacturing(%GD
P </p>
           
           <Box width={300}>
             <Slider defaultValue={73} aria-label="Default" valueLabelDisplay="auto" />
           </Box>
           <p>Agriculture, forestry, 
and fishing, value 
added (annual % 
growth) </p>
           
           <Box width={300}>
             <Slider defaultValue={23} aria-label="Default" valueLabelDisplay="auto" />
           </Box>
           <p>Total debt service (% 
of GNI)
</p>
           
           <Box width={300}>
             <Slider defaultValue={42} aria-label="Default" valueLabelDisplay="auto" />
           </Box>
           <button   variant="primary" type="button" onClick={this.handleClick.bind(this)} >
                  Call Machine Learning Model
               </button>                
           </div>
           

           
       )
    }
}
export default t1;


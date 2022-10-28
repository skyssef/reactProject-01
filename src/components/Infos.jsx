import { Component,React } from "react"
import './Infos.css';
//import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

import logo from "../assets/imgs/logo.png";
//import img from "../assets/imgs/image1.webp"
export default class Infos extends Component{
  
 
    render(){
        return(
        
        <div className="infoBalence">
            <div className="left">
                <div className="balence" onDoubleClick={this.props.divClick}>Balence  :  {this.props.balence}$ <input onDoubleClick={this.props.inputClick} className="hidden .input" type="number" name="balence" placeholder={this.props.balence  }   onChange={this.props.change} /></div >
                <div className="earning" onDoubleClick={this.props.divClick}>Earning  : +{this.props.earning}$<input type="number"  name="earning" className="hidden .input" onDoubleClick={this.props.inputClick} placeholder= {this.props.earning  } onChange={this.props.change}  /></div>
                <div className="loses">Losses : - {this.props.lose}$</div>
            </div>
            <div className="up">
                <p>Budget Management</p>
                <img src={logo} alt="icon" />
            </div>
        </div >
        
    )
    }
    
}
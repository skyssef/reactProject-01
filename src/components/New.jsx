import './New.css';
import logo from "../assets/imgs/logo.png";
export default function New(props){
    return(
        <div className="row">
            <img className='im' src={logo} alt="icon" />
            <div className="ListMenu">
                <button  className='' onClick={props.NewCat}> New Category</button>
                <button className='' onClick={props.NewItem}> New Item</button>
                <button className='' onClick={props.ListItem}>List Item </button>
            </div>
            
        </div>
    )
}
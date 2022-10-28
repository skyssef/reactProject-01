import './Bar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Bar (props){
    return(
        <div className="bar">
            <div className="desc">{props.item.desc} </div>
            <div className="desc">{props.item.amount}$</div>
            <div className="desc">{props.item.cat} </div>
            <button onClick={()=>props.delBar(props.item)} className="btn del"><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
        </div>
    )
}
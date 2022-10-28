import logo from "../assets/imgs/logo.png";
import "./Header.css";
export default function Header(props){
    return(
        <nav>
            <div className="up">
                <p>Budget Management</p>
                <img src={logo} alt="icon" />
            </div>
            {/* <h1>Let's manage your budget !</h1> */}
        </nav>
    )
}
import {BsBook} from "react-icons/bs"
import "./Header.css"

const Header = () => {
    return (
        <div>
            <header>
           
            <div className="BookList__header">

               
                    <BsBook className="icon"/>           
                
                     <h3 className="header">My BookList </h3>
               
            
            </div>
          
            </header>
        </div>
    )
    
    }
    
    export default Header;
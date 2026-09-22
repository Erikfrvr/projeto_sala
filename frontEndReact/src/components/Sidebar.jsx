import { FaBox } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import "./Sidebar.css"
import { useNavigate } from "react-router-dom";

function handleChangeRoute(e){
    console.log(e.target)
}
function Sidebar(){
    const navegation=useNavigate()
    function handleChangeRoute(e){  
        switch(e.target.id){
            case "produto":
                navegation("/menu")
                break
            case "categoria":
                navegation("/menu/categoria")
                break
            case "usuario":
                navegation("/cadastrar")
                break
            default:
                break
        }
        }
    return (
        <div className="sideBar">
            <ul>
                <li id="produto" onCLick={handleChangeRoute}><FaBox /><p> Produto</p></li>
                <li id="categoria" onCLick={handleChangeRoute}><BiCategory /><p> Categoria</p></li>
                <li id='usuario' onCLick={handleChangeRoute}><FaRegUserCircle /><p>Usuario</p></li>
            </ul>
        </div>
    )
}

export default Sidebar;

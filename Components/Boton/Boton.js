
import "./Boton.css"

export default function Boton ({id,value,icon,onClick}){
    const handleClick = ()=>{

    }
    return(
        <div className="Boton" id={id} onClick={()=>onClick()}>
            {icon}
            <p>{value}</p>
        </div>
    )
}
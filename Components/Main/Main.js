import Izquierda from "./Izquierda/Izquierda";
import Centro from "./Centro/Centro";
import Derecha from "./Derecha/Derecha";
import "./Main.css"

export default function Main(){
    return(
        <main>
            <Izquierda/>
            <Centro/>
            <Derecha/>
        </main>
    )
}
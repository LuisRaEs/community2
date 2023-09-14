'use client';
import Boton from "@/Components/Boton/Boton"
import "./Checador.css"
import { useEffect, useState } from "react";

export default function Checador(){

    const [reloj,setReloj] = useState("--:--:--")
    useEffect(() => {
        const interval = setInterval(() => {
        let now  = new Date();
          setReloj(()=>{
            let hours = now.getHours(), minutes = now.getMinutes(), seconds = now.getSeconds()
            if(String(hours).length==1)
                hours = `0${hours}`
            if(String(minutes).length==1)
                minutes = `0${minutes}`
            if(String(seconds).length==1)
                seconds = `0${seconds}`
            return`${hours}:${minutes}:${seconds}`
        })
        }, 1000);
        return () => clearInterval(interval);
      }, []);
    


    const iniciar = () => {
        console.log("Inicie")
    }
    const finalizar = () => {
        console.log("Finalice")
    }
    
    return(
        <div id="Checador">
            <div className="titulo">
                <h1>CHECADOR</h1>
            </div>
            <div id="reloj">
                <p>{reloj}</p>
            </div>
            <div id="horasRestantes">
                <p>{reloj}</p>
            </div>
            <div id="botones">
                <Boton
                    id ="iniciar"
                    name = "iniciar"
                    value = "iniciar"
                    onClick = {iniciar}
                    icon = {<i className="bi bi-play-circle"></i>}
                    
                />
                <Boton
                    id = "finalizar"
                    value = "finalizar"
                    name = "finalizar"
                    onClick = {finalizar}
                    icon = {<i className="bi bi-pause-circle"></i>}
                />
            </div>
        </div>
    )
}
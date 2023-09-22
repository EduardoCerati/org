import { useState } from "react"
import "./ListaOpciones.css"

//método map arreglo.map((equipo) =>{})
// es un metodo que sirve para recorer el arreglo y generar una funcion 
// por cada elemento. en este caso podria ser equipos.map((equipo,index)=>{})

const ListaOpciones = (props) => {

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
         
    }
    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>

            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            
            {props.equipos.map((equipo, index) => { 
                return <option key={index} value={equipo}>{equipo}</option>
            })}
        </select>
    </div>
}

export default ListaOpciones  
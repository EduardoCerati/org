
import { useState } from "react"
import "./formulario.css"
import {v4 as uuid} from "uuid"
import Campo from "../Campo/Campo.js"
import ListaOpciones from "../ListaOpciones/ListaOpciones.js"
import Boton from "../Boton/Boton.js"

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")


    const { registrarColaborador, crearEquipo} = props

    const manejarEnvio = (e)=>{
        e.preventDefault()
        console.log("Manejar el envio",)
        let datosAEnviar = {
            nombre : nombre,
            puesto : puesto,
            foto: foto,
            equipo : equipo,
            id: uuid(),
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color} )

    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresar Nombre" 
                required={true}
                valor={nombre}
                actualizarValor={actualizarNombre}/>
            <Campo 
                titulo="Puesto" 
                placeholder="Ingresar Puesto" 
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}/>
            <Campo 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto"
                required
                valor={foto}
                actualizarValor={actualizarFoto}/>
            <ListaOpciones
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Ingresar Titulo" 
                required={true}
                valor={titulo}
                actualizarValor={actualizarTitulo}/>
            <Campo 
                titulo="Color" 
                placeholder="Ingresar el color en Hexadecimal" 
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
                />
            <Boton>
                Registrar Equipo
            </Boton>
        </form>
    </section>
}

export default Formulario

import estilos from "./Detalles.module.css"
import { useEffect, useState } from "react";
function Detalles(){
    const [form, setForm]= useState({
        Detalles:'',
        eventos:1,
        periodo:'semana',
        icono:'😈',
        meta:52,
        plazo:'01/01/2023',
        completado: 0
    })
    const{ Detalles,eventos,periodo,icono,meta,plazo,completado}=form;
    const onChange=(event, prop) => {
        setForm(estado => ({...estado,[prop]: event.target.value}));
    }
    useEffect(() => {
       // console.log(form);
    },[form]);

    const crear = async () => {
        console.log(form);
    }
    const frecuencias=['dia','mes','semana','año'];
    const iconos =['🏃','📔','✈️','😈','💃','🎮']
    return(
        <div className="tarjeta">
             <form className="p-4">
                <label className="label">
                    Describe tu meta
                    <input 
                    className="input"
                    placeholder="ej. 52 caminatas"
                    value={Detalles}
                    onChange={e => onChange(e,'Detalles')}/>
                </label>
                <label className="label">
                    ¿Con que frecuencias deseas cumplir tu meta?<span>(ej. 1 vez a la semana)</span>
                    <div className="flex mb-6">
                        <input 
                        className="input mr-6"
                        type="number"
                        value={eventos}
                        onChange={e => onChange(e,'eventos')}/>
                        <select 
                        className="input"
                        value={periodo}
                        onChange={e => onChange(e,'periodo')}>
                            {frecuencias.map(opcion =><option value={opcion}>{opcion}</option>)}
                        </select>
                    </div>
                </label>
                <label className="label">
                    ¿Cuantas veces deseas completar esta meta?
                    <input
                    type="number"
                    className="input"
                    value={meta}
                    onChange={e => onChange(e,'meta')}
                    />
                </label>
                <label className="label">
                    ¿Tienes una fecha limite?
                    <input 
                    className="input"
                    type="date"
                    value={plazo}
                    onChange={e => onChange(e,'plazo')}
                    />
                </label>
                <label className="label">
                    ¿Cuantas veces haz completado ya esta meta?
                    <input 
                    className="input"
                    type="number"
                    value={completado}
                    onChange={e => onChange(e,'completado')}/>
                </label>
                <label className="label">
                    Escoge el icono para la meta
                    <select 
                    className="input"
                    value={icono}
                    onChange={e => onChange(e,'icono')}>                    
                        {iconos.map(opcion =><option value={opcion}>{opcion}</option>)}
                    </select>
                </label>
             </form>
             <div className={estilos.botones}>
                <button 
                    className="boton boton--negro"
                    onClick={crear}>
                Crear</button>
                <button className="boton boton--gris">Cancelar</button>  
             </div>
        </div>
    );
}
export default Detalles;
import React from "react";
import "./index.css";


function About() {
    return <div>
        <h2 className={"title"}><i className="fas fa-mitten"/> SOBRE MI</h2>
        <hr className={"line"}/>
        <div className={"about-container"}>
            <div className={"col-md-6"}>
                <div  className="img-cocina"/>
            </div>
                <div className={"col-md-6"}>
                    <h2 className={"title-about"}>
                        Soy teresa<br/>
                        aka señora Frost</h2>
                    <p className={"p-about"}>Soy un parrafo Haga clic aquí para agregar su propio texto y editarme. Es fácil.
                        Simplemente haga clic en "Editar texto" o haga doble clic en mí para agregar
                        su propio contenido y realizar cambios en la fuente. Siéntase libre de arrastrarme
                        y soltarme donde quiera en su página. Soy un gran lugar para que cuentes una historia
                        y les permitas a tus usuarios saber un poco más sobre ti.
                        <br/>
                        <br/>
                        Este es un gran espacio para escribir textos largos sobre su empresa y sus servicios.
                        Puede usar este espacio para entrar un poco más en detalles sobre su empresa. Hable
                        sobre su equipo y los servicios que brinda. Cuente a sus visitantes la historia de
                        cómo se le ocurrió la idea para su negocio y qué lo hace diferente de sus competidores.
                        Haga que su empresa se destaque y muestre a sus visitantes quién es usted.</p>
                </div>
        </div>
    </div>

}
export {About}
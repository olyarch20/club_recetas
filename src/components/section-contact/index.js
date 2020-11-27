import React from "react";
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import "./index.css";


function Contact() {
    return <div className={"contact-c"}>
        <h2 className={"title"}><i className="fas fa-envelope"/> CONTACTO</h2>
        <hr className={"line"}/>

        <div className={"img-container"}>
            <div className={" contact"}>
                <div className={" form-container"}>
                    <h4 className={"title-contact"}>Escríbeme acerca de las recetas:</h4>
                    <p className={"p-contact"}>Tel: 123-456-7890&nbsp;&nbsp;  |  &nbsp;&nbsp;info@my-domain.com</p>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control type="name" placeholder="Nombre" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control type="lastname" placeholder="Apellido" />
                            </Form.Group>

                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control type="email" placeholder="Correo" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control type="tel" placeholder="Teléfono" />
                            </Form.Group>

                        </Form.Row>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" placeholder="Mensaje" rows="5" />
                        </Form.Group>

                        <Button variant="light button-contact" type="submit">
                            Enviar
                        </Button>
                        {/*<div className={"social-media"}>*/}
                            {/*<i className="fab fa-whatsapp"/>*/}
                            {/*<i className="fab fa-facebook face"/>*/}
                            {/*<i className="fab fa-instagram"/>*/}
                        {/*</div>*/}
                    </Form>
                </div>
            </div>
        </div>
    </div>
}
export {Contact}
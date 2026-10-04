import { useState } from 'react'

function Contact() {
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState('')
    const [mensaje, setMensaje] = useState('')

    function enviarFormulario(evento) {
        evento.preventDefault()

        console.log({ nombre, correo, telefono, mensaje })
    }

    function limpiarFormulario() {
        setNombre('')
        setCorreo('')
        setTelefono('')
        setMensaje('')
    }

    return (
        <section className="contacto">
            <div className="contacto-informacion">
                <h1>Contáctanos</h1>

                <p>
                    ¿Tenés dudas o querés organizar tu próximo viaje?
                    Completá el formulario y nos comunicaremos con vos.
                </p>

                <div className="dato-contacto">
                    <div>
                        <h3>Teléfono</h3>
                        <p>(+54)3571 598388</p>
                    </div>
                </div>

                <div className="dato-contacto">
                    <div>
                        <h3>Correo electrónico</h3>
                        <p>evecarranza94@gmail.com</p>
                    </div>
                </div>

                <div className="dato-contacto">
                    <div>
                        <h3>Instagram</h3>
                        <p>@viajestravel</p>
                    </div>
                </div>

                <div className="dato-contacto">
                    <div>
                        <h3>Ubicación</h3>
                        <p>Tancacha, Córdoba, Argentina</p>
                    </div>
                </div>
            </div>

            <div className="contacto-formulario">
                <h2>Enviá tu consulta</h2>

                <form
                    onSubmit={enviarFormulario}
                    onReset={limpiarFormulario}
                >
                    <label htmlFor="nombre">Nombre y apellido</label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(evento) => {
                            setNombre(evento.target.value)
                            console.log('Nombre:', evento.target.value)
                        }}
                        required
                    />

                    <label htmlFor="correo">Correo electrónico</label>
                    <input
                        type="email"
                        id="correo"
                        value={correo}
                        onChange={(evento) => {
                            setCorreo(evento.target.value)
                            console.log('Correo:', evento.target.value)
                        }}
                        required
                    />

                    <label htmlFor="telefono">Teléfono</label>
                    <input
                        type="tel"
                        id="telefono"
                        value={telefono}
                        onChange={(evento) => {
                            setTelefono(evento.target.value)
                            console.log('Teléfono:', evento.target.value)
                        }}
                    />

                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea
                        id="mensaje"
                        rows="6"
                        value={mensaje}
                        onChange={(evento) => {
                            setMensaje(evento.target.value)
                            console.log('Mensaje:', evento.target.value)
                        }}
                        required
                    />

                    <button type="submit">Enviar mensaje</button>
                    <button type="reset">Limpiar</button>

                    <p>
                        Formulario de práctica: los datos se muestran
                        en la consola del navegador.
                    </p>
                </form>
            </div>
        </section>
    )
}

export default Contact
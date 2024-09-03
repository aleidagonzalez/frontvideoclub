import React, { useState } from 'react';
import axios from 'axios';

const Registro = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        contraseña: ''
    });

    const [mensaje, setMensaje] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('mongodb+srv://aleida1983:KlstI4vG4rN5ZMQK@cluster0.iy5ae.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', formData);
            setMensaje(response.data.message);
            setFormData({ nombre: '', correo: '', contraseña: '' });
        } catch (error) {
            setMensaje('Error al registrar usuario');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h2>Registro</h2>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="form-label">Nombre:</label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        className="form-control"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="correo" className="form-label">Correo Electrónico:</label>
                                    <input
                                        type="email"
                                        id="correo"
                                        name="correo"
                                        className="form-control"
                                        value={formData.correo}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="contraseña" className="form-label">Contraseña:</label>
                                    <input
                                        type="password"
                                        id="contraseña"
                                        name="contraseña"
                                        className="form-control"
                                        value={formData.contraseña}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Registrarse</button>
                            </form>
                            {mensaje && <div className="alert alert-info mt-3">{mensaje}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registro;

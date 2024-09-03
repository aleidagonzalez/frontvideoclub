import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Resetear el mensaje de error antes de intentar autenticar
        setError(null);

        try {
            const response = await fetch('mongodb+srv://aleida1983:KlstI4vG4rN5ZMQK@cluster0.iy5ae.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Guardar el token en el localStorage
                localStorage.setItem('token', data.token);

                // Redirigir al usuario a la página principal
                navigate('/');
            } else {
                setError(data.message || 'Error en las credenciales.');
            }
        } catch (error) {
            console.error('Error de autenticación:', error);
            setError('Error de servidor. Por favor, intenta de nuevo más tarde.');
        }
    };

    return (
        <div className="login-container">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Usuario</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="login-button">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default Login;

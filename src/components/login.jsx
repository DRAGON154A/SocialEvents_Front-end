import React from "react";
import { useState } from "react";
import "./styles/login.css";
import Facebook from '../assets/facebook.png';
import Google from '../assets/google.jpg';
import { use } from "react";

function Login()
{
    const [count,setCount] = useState(0)
    const[userName, setUserName]=useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit=(e)=> {
        e.preventDefault();
        if (!userName || !password) {
            setError("Veuillez remplir tous les champs.");
        } else{
            setError("");
            console.log("connexion reussie !")
        }

    };

    return(
        <div className="login">
                <h1>Connexion</h1>
            <form className="loginContainer" onSubmit={handleSubmit}>
                <label htmlFor="userName">Nom d'utilisateur</label>
                <input type="text" id="userName" placeholder="Entrez votre nom ou votre email" 
                value={userName} onChange ={(e) =>setUserName(e.target.value)}/>
             
                <label htmlFor="userPassword">Mot de passe</label>
                <input type="password" id="userPassword" placeholder="Entrez votre mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
                 {error && <p className="error">{error}</p>}
                
                </form>
            <div className="button-container">
                        <button type="submit" value="Connexion" id="submit">
                        Connexion
                        </button>
             </div>

            <div className="login-link" ><p> vous n'avez pas de compte?<a href="#">s'inscrire</a></p></div>
            <div className="social-login">
                <p>Ou connectez-vous avec:</p>
                <div className="social-icons">
                    <a href="#" className="social-icon"><img src={Facebook} alt="facebook_image" /></a> 
                <a href="#"className="social-icon"><img src={Google} alt="google_image" /></a> 
                </div>
               
            </div>
        </div>
    )
}

export default Login;
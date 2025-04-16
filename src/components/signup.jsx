import React from "react";
import { useState } from "react";
import "./styles/signup.css";
import Facebook from '../assets/facebook.png';
import Google from '../assets/google.jpg';

function Signup()
{
    const [count,setCount] = useState(0)
    return(
        <div className="signup">
                        <h1>Inscription</h1>
                    <div className="signupContainer">
                        <label htmlFor="userName">Nom d'utilisateur</label>
                        <input type="text" id="userName" placeholder="Entrez votre nom ou votre email" /><br />
                        <label htmlFor="pseudo">Pseudonyme:</label>
                        <input type="text" id="Pseudo" placeholder="Entrez votre pseudonyme" /><br />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" placeholder="nom@gmail.com" /><br />
                        <label htmlFor="phoneNumber">PhoneNumber:</label>
                        <input type="tel" id="PhoneNumber" placeholder="Entrez votre numero" /><br />
                        <label htmlFor="city">city:</label>
                        <input type="text" id="city" placeholder="Entrez votre ville" /><br />
                        <label htmlFor="profil">profil:</label>
                        <input type="file" id="profile" /><br />
         </div>
                    <div >
                        <p><a href="#">Inscription</a></p>
                    <input type="submit" value="Connexion" id="submit"/><br />
                    </div>
                    <div id="apiConnexion">
                       <a href="#"><img src={Facebook} alt="facebook_image" /></a> 
                       <a href="#"><img src={Google} alt="google_image" /></a> 
                    </div>
                </div>
    )
}
export default Signup
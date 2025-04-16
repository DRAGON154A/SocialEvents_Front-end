import React from "react";
import { useState,useEffect } from "react";
import "./styles/footer.css";

function Footer()
{
    const [count,setCount] = useState(0)
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Simulation d'une animation au montage du composant
        const timeout = setTimeout(() => {
            setVisible(true);
        }, 300); // petit délai pour l'effet
        return () => clearTimeout(timeout);
    }, []);


    return(
        <div className={`footer ${visible ? "fade-in" : ""}`}>
            <div className="footerContainer">
                <p>© The GOAT Programming 2025</p>
                <a href="#"><p>Politique de confidentialité</p></a>
                <a href="#"></a><p>Conditions d'utilisation</p>
            </div>
        </div>
    )
}
export default Footer;
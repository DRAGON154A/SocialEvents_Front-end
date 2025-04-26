import React from 'react';
import { useState } from 'react';
import './styles/header.css';
import event from '../assets/event.png';
import home from '../assets/home.png';
import profile from '../assets/profile.png';
import groupe from '../assets/groupe.png';

function Header()
{
    // cette partie est fait pour faire les mises à jours de la vue   
    const [count,setCount] = useState(0)
    const [activeButton, setActiveButton] = useState('home');
    const handleClick=(name)=>{
        setActiveButton(name);
        console.log(`Naviguer vers ${name}`);
    };

    return(
<div className="header">

    <div id="logo">Goat</div>

    <div className="buttonArea">
    <div className={`buttonHeader ${activeButton === 'home' ? 'active' : ''}`}>
                    <button onClick={() => handleClick('home')}>
                        <img src={home} alt="Accueil" />
                    </button>
                </div>

       <div className={`buttonHeader ${activeButton === 'event' ? 'active' : ''}`}>
                    <button onClick={() => handleClick('event')}>
                        <img src={event} alt="Événements" />
                    </button>
              </div>

              <div className={`buttonHeader ${activeButton === 'groupe' ? 'active' : ''}`}>
                    <button onClick={() => handleClick('groupe')}>
                        <img src={groupe} alt="Groupes" />
                    </button>
                </div>

                <div className={`buttonHeader ${activeButton === 'profile' ? 'active' : ''}`}>
                    <button onClick={() => handleClick('profile')}>
                        <img src={profile} alt="Profil" />
                    </button>
                </div>
    </div>
</div>
)
}

export default Header
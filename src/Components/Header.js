import React from "react";
import { useState, useEffect, useRef } from "react";
import './stylesheets/header.css'
import profilePhoto from '../Public/Images/Foto-Aniver.jpeg'
import brazilFlag from '../Public/Images/91993_brazil_planning_icon.png'
import englandFlag from '../Public/Images/16014_england_english_flag_great britain_inghilterra_icon.png'

function Header (props) {

    let nameButton = useRef()
    let nameButton2 = useRef()
    
    const changeCursor = () => {
        nameButton.current.style.cursor = 'pointer'
        nameButton2.current.style.cursor = 'pointer'
    }

    return (
        <header className="">
            <div className="imageDiv">
                <img src={profilePhoto} alt= 'Foto-Perfil'></img>
                <h2 className="name">Davi Oliveira</h2>
            </div>   
            <div className="informationListDiv">
                <ul className="informationListUl">
                    <li title="Home">Início</li>
                    <li title="About">Sobre</li>
                    <li title="Projects">Projetos</li>
                    <li>Contato</li>
                </ul>
            </div>
            <div className="languagesDiv">
                <div className="flagContainer">
                    <button ref={nameButton} onMouseOver={changeCursor} title='Portuguese'>
                        <img src={brazilFlag} alt='Brazilian Flag'></img>
                    </button>
                </div>
                <div className="flagContainer">                    
                    <button ref={nameButton2} onMouseOver={changeCursor} title='English'>
                        <img src={englandFlag} alt='British Flag'></img>
                    </button>                    
                </div>
            </div>
        </header>
    )
}

export default Header;
import Dropdown from 'react-bootstrap/Dropdown';
import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import Logo from '../Assets/logo.png';
import "./DropDown.css";
import DropdownButton from "react-bootstrap/DropdownButton";

class DropDown extends Component{
    render(){
        return(
            <Dropdown className = "Menu">
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                <Image src={ Logo } alt= "Code Diffrently Logo"
                 className = "logo"/>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="/sign-in" className="links">Login</Dropdown.Item>
                <Dropdown.Item href="/sign-up" className="links">Sign Up</Dropdown.Item>
                <Dropdown.Item href="/game-stats" className="links">Game Stats</Dropdown.Item>
                <Dropdown.Item href="/donate" className="links">Donate</Dropdown.Item>
                <Dropdown.Item href="/spanish-instruction" className="links">Spanish Instruction</Dropdown.Item>
                <Dropdown.Item href= "/english-instruction" className="links">English Instruction</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

export default DropDown;
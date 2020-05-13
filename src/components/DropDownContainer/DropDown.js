import Dropdown from 'react-bootstrap/Dropdown';
import React, { Component } from "react";
import "./DropDown.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Image from 'react-bootstrap/Image';
import Icon from '../Assets/icon.png';


class DropDown extends Component{
    render(){
        return(
            <Dropdown className = "Menu">
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                <Image src={ Icon } alt= "icon for the dropdown menu"
                className = "icon"/>
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
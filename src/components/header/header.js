import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import { IconButton } from '@material-ui/core';
import "./header.css";

export default function TinderHeader() {
    return (
        <div className="tinder_header">
            <IconButton>
                <PersonIcon className="header_icon"/>
            </IconButton>
            <img 
                className="tinder_headerLogo" 
                src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" 
                alt="tinder-logo"
            />
            <IconButton>
                <ForumIcon className="header_icon"/>
            </IconButton>
        </div>
    );
}
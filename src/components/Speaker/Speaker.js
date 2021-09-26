import React from 'react';
import './Speaker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser } from '@fortawesome/free-solid-svg-icons';

const Speaker = (props) => {
    const element = <FontAwesomeIcon icon={faUser} />
    // console.log(props.speaker)
    const{name,channel,topic,subscriber,fee,img} = props.speaker;
    return (
        <div>
            <div className="speaker-card">
                <div className="speaker-card-top">
                    <img src={img} alt="" />
                </div>
                <div className="speaker-card-bottom">
                    <h4>Name: {name}</h4>
                    <h5>Channel: {channel}</h5>
                    <p>Topic: {topic}</p>
                    <h5>Subscribers: {subscriber}</h5>
                    <p>Fee: ${fee}</p>
                    <button onClick={() => props.handleAdd(props.speaker)}>{element} Add Speaker</button>
                </div>
            </div>
            
            
        </div>
    );
};

export default Speaker;
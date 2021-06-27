import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Card = ({ name, image, jobTitle, profile_pic }) => {

    return (
        <div className="container">
            <div className="card">
                <img className="image-top" src={image} alt="" />
                    <div className="socialIcon">
                        <FontAwesomeIcon className="social" icon={faFacebook} size="1x"/>
                        <FontAwesomeIcon className="social" icon={faInstagram} size="1x"/>
                        <FontAwesomeIcon className="social" icon={faTwitter} size="1x"/>
                    </div>
                <div className="card-body">
                    <img className="avater" src={profile_pic} alt="" />
                    <div className="info">
                        <div className="info-content">
                            <h4>{name}</h4>
                            <h5>{jobTitle}</h5>
                        </div>
                        <div className="more">
                            <FontAwesomeIcon icon={faEllipsisH} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Card;
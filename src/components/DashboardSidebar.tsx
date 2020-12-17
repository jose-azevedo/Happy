import React, { useState } from 'react';
import { FiInfo, FiMapPin, FiPower } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import mapMarkerImg from '../images/map-marker.svg';
import "../styles/components/dashboard-sidebar.css";

export default function Sidebar() {
    const { goBack } = useHistory()
    const [selectedPage, setSelectedPage] = useState('registered');

    return (
        <aside className="app-sidebar">
            <img src={mapMarkerImg} alt="Happy" />

            <div id="options-buttons">
                <button
                    type="button"
                    className={selectedPage == 'registered' ? 'selected-page' : ''}
                    onClick={() => {setSelectedPage('registered')}}
                >
                    <FiMapPin size={24} color="#FFF" />
                </button>
                <button
                    type="button"
                    className={selectedPage == 'pending' ? 'selected-page' : ''}
                    onClick={() => {setSelectedPage('pending')}}
                >
                    <FiInfo size={24} color="#FFF" />
                </button>
            </div>


            <footer>
            <button type="button" onClick={goBack}>
                <FiPower size={24} color="#FFF" />
            </button>
            </footer>
        </aside>
    );
}
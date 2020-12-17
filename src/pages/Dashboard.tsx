import React from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
import { Map, Marker, TileLayer } from 'react-leaflet';

import { FiEdit3, FiTrash } from 'react-icons/fi';
import '../styles/pages/dashboard.css'


function Dashboard() {
    return (
        <div id="dashboard-page">
            <DashboardSidebar />
            <main id="main-section">
                <header id="dashboard-header">
                    <h1>Orfanatos Cadastrados</h1>
                    <p>2 orfanatos</p>
                </header>

                <div id="registered-orphanages">
                    <div className="orphanage-card">
                        <Map
                            center={[-1.4585092,-48.4727299]} 
                            style={{ width: '100%', height: 180 }}
                            zoom={15}
                            dragging={false}
                            zoomControl={false}
                            scrollWheelZoom={false}
                            doubleClickZoom={false}

                        >
                            <TileLayer 
                                url={`https://a.tile.openstreetmap.org/{z}/{x}/{y}.png`}
                            />
                        </Map>
                        <div className="orphanage-info">
                            <h2>Orfanato Esperança</h2>
                            <div className="options">
                                <button type="button">
                                    <FiEdit3 size={18} color="#15C3D6" />
                                </button>
                                <button type="button">
                                    <FiTrash size={18} color="#15C3D6" />
                                </button>
                            </div>
                        </div>
                    </div> 

                    <div className="orphanage-card">
                        <Map
                            center={[-1.4585092,-48.4727299]} 
                            style={{ width: '100%', height: 180 }}
                            zoom={15}
                            dragging={false}
                            zoomControl={false}
                            scrollWheelZoom={false}
                            doubleClickZoom={false}

                        >
                            <TileLayer 
                                url={`https://a.tile.openstreetmap.org/{z}/{x}/{y}.png`}
                            />
                        </Map>
                        <div className="orphanage-info">
                            <h2>Melhores Amigos</h2>
                            <div className="options">
                                <button type="button">
                                    <FiEdit3 size={18} color="#15C3D6" />
                                </button>
                                <button type="button">
                                    <FiTrash size={18} color="#15C3D6" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="orphanage-card">
                        <Map
                            center={[-1.4585092,-48.4727299]} 
                            style={{ width: '100%', height: 180 }}
                            zoom={15}
                            dragging={false}
                            zoomControl={false}
                            scrollWheelZoom={false}
                            doubleClickZoom={false}

                        >
                            <TileLayer 
                                url={`https://a.tile.openstreetmap.org/{z}/{x}/{y}.png`}
                            />
                        </Map>
                        <div className="orphanage-info">
                            <h2>Quianças Zika</h2>
                            <div className="options">
                                <button type="button">
                                    <FiEdit3 size={18} color="#15C3D6" />
                                </button>
                                <button type="button">
                                    <FiTrash size={18} color="#15C3D6" />
                                </button>
                            </div>
                        </div>
                    </div>
                    
                </div>

                


            </main>
        </div>
    )
}

export default Dashboard;
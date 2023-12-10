import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router";
import { Context } from "../store/appContext";

const People = () => {
    const { store, actions } = useContext(Context);
    const location = useLocation();
    const info = location.pathname;

    useEffect(() => {
        actions.handelInfoView(info);
    }, []);

    console.log(store.infoView);
    console.log(store.infoView.uid);
    const properties = store.infoView.properties;
    console.log(properties);
    const arrayIdenticator = location.pathname.split('/');
    console.log(arrayIdenticator);
    const identicator = arrayIdenticator[1];
    console.log('Hello identicator', identicator);

    return (
        identicator === 'people' ? (
            <div className="card mb-3">
            {store.infoView && properties && (
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img
                            src={`https://starwars-visualguide.com/assets/img/characters/${store.infoView.uid}.jpg`}
                            className="card-img"
                            alt={properties.name}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">{properties.name}</h3>
                            <p className="card-text">{store.infoView.description}</p>
                            <div className="card-text" style={{ borderTop: "1px solid gold", paddingTop: "30px" }}>
                                <div style={{ textAlign: "center" }}>
                                    <h5>Name</h5>
                                    <p style={{ color: "black" }}>{properties.name}</p>
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    <h5>Birth Year</h5>
                                    <p style={{ color: "black" }}>{properties.birth_year}</p>
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    <h5>Gender</h5>
                                    <p style={{ color: "black" }}>{properties.gender}</p>
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    <h5>Height</h5>
                                    <p style={{ color: "black" }}>{properties.height}</p>
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    <h5>Skin Color</h5>
                                    <p style={{ color: "black" }}>{properties.skin_color}</p>
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    <h5>Eye Color</h5>
                                    <p style={{ color: "black" }}>{properties.eye_color}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>

        ): identicator === 'planets' ?(
            <div className="card mb-3">
            {store.infoView && properties && (
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img
                            src={`https://starwars-visualguide.com/assets/img/planets/${store.infoView.uid}.jpg`}
                            className="card-img"
                            alt={properties.name}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">{properties.name}</h3>
                            <p className="card-text">{store.infoView.description}</p>
                            <div className="card-text" style={{ borderTop: "1px solid gold", paddingTop: "30px" }}>
                                <div style={{ textAlign: "center" }}>
                                    <h5>Name</h5>
                                    <p style={{ color: "black" }}>{properties.name}</p>
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    <h5>Climate</h5>
                                    <p style={{ color: "black" }}>{properties.climate}</p>
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    <h5>Diameter</h5>
                                    <p style={{ color: "black" }}>{properties.diameter}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
        ): identicator === 'starships' ?(
            <div className="card mb-3">
            {store.infoView && properties && (
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img
                            src={`https://starwars-visualguide.com/assets/img/starships/${store.infoView.uid}.jpg`}
                            className="card-img"
                            alt={properties.name}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">{properties.name}</h3>
                            <p className="card-text">{store.infoView.description}</p>
                            <div className="card-text" style={{ borderTop: "1px solid gold", paddingTop: "30px" }}>
                                <div style={{ textAlign: "center" }}>
                                    <h5>Model</h5>
                                    <p style={{ color: "black" }}>{properties.model}</p>
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    <h5>Manufacturer</h5>
                                    <p style={{ color: "black" }}>{properties.manufacturer}</p>
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    <h5>Cost in Credits</h5>
                                    <p style={{ color: "black" }}>{properties.cost_in_credits}</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
        ): null
    );
};

export default People;


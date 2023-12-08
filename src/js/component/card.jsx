import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = (props) => {
    const [buttonState, setButtonState] = useState(false);
    const {store,actions} = useContext(Context)

    const toggleButtonState = () => {
        setButtonState(!buttonState);

        if (!buttonState) {
            const newFavorite = [...store.favorite, { uid: props.uid, name: props.name, type: props.id }];
            actions.addFav(newFavorite)
            console.log(newFavorite);
        } else {
            const delFavorite = { uid: props.uid, name: props.name, type: props.id };
            actions.deleteFav(delFavorite);
        }
    };

    return (
        <div className="card" key={props.uid} style={{ minHeight: '300px', minWidth: '300px', marginRight: '5px' }}>
            <img src={`https://starwars-visualguide.com/assets/img/${props.type}/${props.uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <Link className="btn btn-primary" to={`/${props.id}/${props.uid}`}>
                    Check
                </Link>
                {buttonState ? (
                    <i className="btn fas fa-heart" onClick={toggleButtonState} style={{ color: '#f01414' }}></i>
                ) : (
                    <i className="btn far fa-heart" onClick={toggleButtonState} style={{ color: '#f01414' }}></i>
                )}
            </div>
        </div>
    );
};

export default Card;


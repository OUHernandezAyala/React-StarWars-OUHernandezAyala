import React, { useContext, useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "../component/card.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);
  
  useEffect(() => {
	actions.handelInfo();
  }, []);

  console.log('Home');
  console.log(store.people.results);
  console.log(store.planets.results);
  console.log(store.starships.results);

  return  (
    <div className="text-center mt-5">
      <h1>Characters</h1>
      <div className="d-flex flex-row flex-nowrap" style={{ overflowY: 'auto' }}>
			{store.people.results?.map((item) => (
		<Card key={item.uid} name={item.name} uid={item.uid} type='characters' id='people'
		style={  {
			minHeight: '300px',
			minWidth: '300px',
			marginRight: '5px',
		}    } />
		))}
    </div>
      <br></br>
      <h1>Planets</h1>
      <div className="d-flex flex-row flex-nowrap"style={{ overflowY: 'auto' }}>
			{store.planets.results?.map((item) => (
		<Card key={item.uid} name={item.name} uid={item.uid} type='planets' id='planets'
		/>
		))}
      <br></br>

      </div>
      <br></br>
      <h1>Starships</h1>
      <div className="d-flex flex-row flex-nowrap"style={{ overflowY: 'auto' }}>
			{store.starships.results?.map((item) => (
		<Card key={item.uid} name={item.name} uid={item.uid} type='starships' id='starships'
		/>
		))}
      <br></br>

      </div>
    
    </div>
  );
};


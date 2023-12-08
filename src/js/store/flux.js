const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people:{},
			planets:{},
			starships:{},
			favorite:[]
				
			
		},
		actions: {
			getPeople: async () =>{
				console.log('Entrando a Get')
				try{
					const response = await fetch("https://www.swapi.tech/api/people/")
						if(response.status != 200){
							console.log('Ocurrio un error' + response.status)
						}
					const body = await response.json()
					return body
				}
				catch(error){
					console.error(error)
				}
			},
			getPlanets: async () =>{
				console.log('Entrando a Get')
				try{
					const response = await fetch("https://www.swapi.tech/api/planets/")
						if(response.status != 200){
							console.log('Ocurrio un error' + response.status)
						}
					const body = await response.json()
					return body
				}
				catch(error){
					console.error(error)
				}
			},
			getStarships: async () =>{
				console.log('Entrando a Get')
				try{
					const response = await fetch("https://www.swapi.tech/api/starships/")
						if(response.status != 200){
							console.log('Ocurrio un error' + response.status)
						}
					const body = await response.json()
					return body
				}
				catch(error){
					console.error(error)
				}
			},
			handelInfo: async ()=> {
					const actions = getActions()
					const people = await actions.getPeople()
					const planets = await actions.getPlanets()
					const starships = await actions.getStarships()
					setStore({people: people,
						planets: planets,
						starships: starships,})
					
			}, 
			detailsInfo: async (info)=>{
				try{
					const response = await fetch (`https://www.swapi.tech/api${info}`)
					if(response.status != 200){
						console.log('Ocurrio un error'+ response.status)
					}
					const body = await response.json()
					console.log(body)
					return body
				}
				catch(error){
					console.error(error);
				}
			},
			addFav: (newFavorite)=>{
				setStore({ favorite: newFavorite });
			},
			deleteFav: (delFavorite)=>{ 
				const store = getStore()
				const updateFavorites = store.favorite.filter((fav)=>{
					return fav.uid !== delFavorite.uid ||
					fav.name !== delFavorite.name ||
					fav.type !== delFavorite.type
				})
				setStore({favorite:updateFavorites})
			}
				
			}
		}
	};


export default getState;

import axios from 'axios';

//Inhalte die aktion die gemacht werden
//Constante
const dataIni = {
    array:[],
    offset:0
}

//types la constante la podemos usar en otro componentes
const GET_Pokemon = 'GET_Pokemon';
const Next_GET_Pokemon = 'Next_GET_Pokemon';


//reducer acepta la api y los envia al estado o la constante
export default function pokeReducer(state= dataIni, action) {
    switch(action.type){
        case GET_Pokemon:
            return {...state, array: action.payload}
                case Next_GET_Pokemon:
            return {...state, array: action.payload.array, offset: 
                 action.payload.offset}         
        default:
            return state;
        } 
    }
//action consume la api
export const PokemonAktion =()=> async (dispatch, getState) =>{

    // console.log('getState',getState().pokemones.offset);
    const offset = getState().pokemones.offset 

 try{
    const res= await   
     axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`);
        dispatch ({
            type:GET_Pokemon,
            payload: res.data.results
        })
        
    }
    catch(error){
        console.log(error);
    }
  
}

export const nextPokemonAktion =(num)=> async(dispatch,getState)=>{

    //erste möglichkeit
    // const offset = getState().pokemones.offset
    // const next = offset + 20

    //zweite möglichkeit es ist die 2 funktion zu benutzen
    const offset = getState().pokemones.offset
    const next = offset + num

    try{
 const res = await 
 axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${next}&limit=20`)
  dispatch({
    type: Next_GET_Pokemon,
    payload: {
        array: res.data.results,
        offset: next
    }
  })
    }
    catch(error)
    {
        console.log(error);
    }
}

import React from 'react';
import {useDispatch, useSelector} from 'react-redux'; //hook react redux
import {PokemonAktion, nextPokemonAktion} from '../redux/pokereducer';

const Pokemon =()=>{
    //rufet die action
    const dispatch = useDispatch();
 //state  von die Store
    const pokemones = useSelector(store=> store.pokemones.array)
    console.log(pokemones);

    return(
      <div>
        <h2>Redux mit Hook und Duck</h2>
        <br></br>
        <button onClick={()=>dispatch(PokemonAktion())}>Get Pokemon</button>
        <button onClick={()=>dispatch(nextPokemonAktion(20))}>Next        
         Pokemon</button>
        <br></br>     
        <ul className='list-group'>
         {
            pokemones.map(item => (
            <li key={item.name} className='list-group-item list-group-item-warning'>{item.name}</li>
             ))
         }
 </ul>       
      </div>   
    )
}
export default Pokemon;
import React, {useState, useEffect, useRef} from 'react';
import classes from './Ecole.module.css';

//import styled component
import styledComponent from 'styled-components';

//import Eleve
import Eleve from '../../Components/Eleves/Eleve';

//import Search
import Search from '../../Components/Search/Search';

//import du HOC
import MonFragment from '../../HOC/MonFragment/MonFragment';

//import provider 
import ThemeContextProvider from '../../Context/theme-context';



function Ecole(){

  //state
  const [eleves,setEleves] = useState([
    {
      id:1,
      nom: 'Patoche Bruel', 
      moyenne:5,
      citation : "Casser la voix"
    },
    {
      id:2,
      nom: 'ZZ', 
      moyenne:15,
      citation : "Sur un coup de tête"
    }
  ]
    
  );

  const [transformation,setTransformation]=useState(false);

  const [afficherEleve,setAfficherEleve]=useState(true);
//useEffects
useEffect(()=>{
  console.log('[App.js] UseEffect');

  return()=>{
    console.log('[App.js] useEffect(willUnmount)');
  }
},[]);
  useEffect(()=>{
    console.log('[App.js] useEffect(didUpdate)');
  })
//ref input
  const elementInput = useRef(" ");
  const buttonClickedHandler = (nouveauNom,index) => {
      const nouveauxEleves = [...eleves];
      nouveauxEleves[index].nom = nouveauNom;
      setEleves(nouveauxEleves);
      setTransformation(true);
      elementInput.current.focus();//pour faire le focus
    }

  const h1Style={
    color:'green',
    backgroundColor:'lightgreen'
  }

  const MonBoutonStylise=styledComponent.button`
  //le css pour le bouton
  padding : 10px 30px;
  background-color : ${props=>props.transformed ? 'green':'black'};
  color:white;
  cursor:pointer;

  &:hover{
    background-color:${props=>props.transformed ? 'lightgreen':'white'};
    color:${props=>props.transformed ? 'white':'black'};
  }
  `

  const showHideClickHandler = () => {
    //permet de passer en true et en false => comme un toggle
    setAfficherEleve(!afficherEleve);
  }

  //supprimer un élève
  const removeClickHandler = index =>{
    const nouveauxEleves=[...eleves];
    nouveauxEleves.splice(index,1);
    setEleves(nouveauxEleves);
  }

  //Modifier l'élève
  const nameChangedHandler = (event,index)=>{
    const nouveauxEleves=[...eleves];
    nouveauxEleves[index].nom = event.target.value;
    setEleves(nouveauxEleves);
  }

  

  //Lister dynamiquement les composants
  let cartes = eleves.map((eleve,index)=>{
    let maVariableRef=null
    if(index === 0){
    maVariableRef= elementInput;
    }
    return (
    <Eleve
    key={index}
    nom={eleve.nom}
    moyenne={eleve.moyenne}
    clic={() => buttonClickedHandler('Thomas Dutronc',index)}
    supprimer={()=>removeClickHandler(index)}
    changerNom={(e)=>nameChangedHandler(e,index)}
    maRef={maVariableRef}
    >
    {eleve.citation}
    </Eleve>
    );
    });

    return (
     <ThemeContextProvider>
      <div className={classes.App}>
        <h1 style={h1Style}>Bienvenue dans la classe Terre </h1>
        <MonBoutonStylise
        onClick={showHideClickHandler}
        >Afficher/Masquer</MonBoutonStylise>
        <div>
          <MonBoutonStylise
          transformed={transformation}
           onClick={() =>buttonClickedHandler('james rodriguez',0)}
           >
           Modifier le premier élève
           </MonBoutonStylise>
        </div>
        <Search/>
        {afficherEleve ?
        <MonFragment>
          {cartes}
        </MonFragment>
        :null
      }  
      </div>
      </ThemeContextProvider>
    );
  }

export default Ecole;

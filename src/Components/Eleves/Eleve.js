// Librairies
import React, { useEffect,useContext } from 'react';
import classes from './Eleve.module.css';

//import contexte
import { themeContext } from '../../Context/theme-context';




function Eleve(props) {

//useEffect
useEffect(()=>{
console.log('[Eleve.js] UseEffect');
},[]);
useEffect(()=>{
console.log('[Eleve.js] UseEffect(didUpdate');
})
useEffect(()=>{
return()=>{
console.log('[Eleve.js] UseEffect(WillUnmount)');
}
},[]);

useEffect(()=>{
    console.log('[Eleve.js] le nom a été modifié');
})

//variables css

    const moyenneClasses=[];

    if(props.moyenne > 10){
        moyenneClasses.push(classes.green)
    }else if(props.moyenne == 10){
        moyenneClasses.push(classes.orange)
    }else{
        moyenneClasses.push(classes.red)
    }

//condition redoublement
    let message;

    if(props.moyenne<6){
        message=<p>Cet élève va redoubler</p>
    }

//récupération du contexte
const theme = useContext(themeContext);

//jsx
return (
<div className={classes.eleve}>
<h1 onClick={props.clic}>{props.nom}</h1>
<p>Moyenne scolaire : <b className={moyenneClasses.join(' ')}>{props.moyenne}/20</b></p>
<p>Age : {Math.floor(Math.random() * 100)}</p>
<i>{props.children}</i>
{message}
<input 
    ref={props.maRef} 
    type="text" 
    value={props.nom} 
    style={{
        width:'100%',
        background:theme.background,
        color:theme.foreground
    }} 
    onChange={props.changerNom}/>
<button onClick={props.changerNom} style={{marginTop:'5px'}}>Modifier</button>
<button onClick={props.supprimer} style={{marginTop:'5px'}}>Supprimer</button>
</div>
);
}
export default Eleve;
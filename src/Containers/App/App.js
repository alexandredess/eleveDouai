import React, { Component } from 'react';
import './App.css';

//import Eleve
import Eleve from '../../Components/Eleves/Eleve';

class App extends Component{

  state={
    eleves:[
      {
        nom: 'Patoche Bruel', 
        moyenne:5,
        citation : "Casser la voix"
      },
      {
        nom: 'ZZ', 
        moyenne:15,
        citation : "Sur un coup de tête"
      }
    ]
  }

buttonClickedHandler = (nouveauNom) =>{
    const nouveauState = [...this.state.eleves];
    nouveauState[0].nom = nouveauNom
    this.setState({
      ...this.state,
      eleves:nouveauState
    })
  }


  render(){
    return (
      <div className="App">
        <h1>Bienvenue dans la classe Terre </h1>
        <div>
          <button onClick={this.buttonClickedHandler.bind(this,"Elon Musk")}>Modifier le premier élève</button>
        </div>
        <Eleve 
          nom={this.state.eleves[0].nom} 
          moyenne={this.state.eleves[0].moyenne}
          citation={this.state.eleves[0].citation}
          clic={()=>this.buttonClickedHandler('July Martin')}>
        </Eleve>
        <Eleve 
          nom={this.state.eleves[1].nom}
          moyenne={this.state.eleves[1].moyenne}
          citation={this.state.eleves[1].citation}
          clic={this.buttonClickedHandler}>
        </Eleve>
      </div>
    );
  }
}


export default App;

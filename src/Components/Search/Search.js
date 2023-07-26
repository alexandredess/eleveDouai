import React from "react";

//import context
import {themeContext} from '../../Context/theme-context';

class Search extends React.Component{

    //constructor et étiquette
    constructor(props){
        super(props);
        this.searchRef = React.createRef();
    }

    //componentDidMount utilisation de la ref
    componentDidMount(){
        this.searchRef.focus();
    }

    //Contexte
    static contextType = themeContext;

    render(){
        return(
            <input 
            type="text"
            ref={(e)=>this.searchRef = e}
            style={{
                width:'90%',
                display:'block',
                margin:'auto',
                padding:'3px',
                background:this.context.background,
                color:this.context.foreground
            }}
            />
        )
    }
}

export default Search;
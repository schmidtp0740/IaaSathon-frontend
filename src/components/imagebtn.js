import React, { Component } from 'react';
import axios from 'axios';

class ImageBTN extends Component{
    constructor(props){
        super(props);

        this.sendVote = this.sendVote.bind(this);

    }

    determineFramework(props){
        if (props.name === "angular"){
            return "./images/angular.png"
        } else if (props.name === "ember"){
            return "./images/ember.png"
        } else if (props.name === "react"){
            return "./images/react.png"
        } else if (props.name === "vue"){
            return "./images/vue.png"
        }
    }
    
    sendVote(e) {
        let url = "http://" + window.location.hostname + ":8000/submitPoll"
        let data = {
            "name": this.props.name
        }
    
        axios.post(url, data)
            .then((resp)=>{
                console.log(resp.data);
                
            })
            .catch((err)=>{
                console.log(err)
            });
        
    }

    
    render(){
        return(                         
            <img onClick={this.sendVote} src={this.determineFramework(this.props)} alt="angular, ember, react, or vue"/>
        )

    }

}

export default ImageBTN;

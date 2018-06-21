import React, { Component } from 'react';
import axios from 'axios';

class ImageBTN extends Component{
    constructor(props){
        super(props);

        this.sendVote = this.sendVote.bind(this);

    }

    determineCatorDog(props){
        if (props.name === "dog"){
            return "./images/dog.png"
        } else if (props.name === "cat"){
            return "./images/cat.svg"
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
            <img onClick={this.sendVote} src={this.determineCatorDog(this.props)} alt="cat or dog"/>
        )

    }

}

export default ImageBTN;
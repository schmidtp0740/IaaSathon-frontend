import React, {Component} from 'react';
import axios from 'axios';

class PollData extends Component{
    constructor(props){
        super(props);
        this.getVotes = this.getVotes.bind(this)
        this.state = {
            cat: 0,
            dog: 0
        };

    }

    getVotes(){
        let url = "http://"+window.location.hostname + ":8000/getPolls"

        axios.get(url, {})
            .then((resp) =>{
                this.setState({
                    cat: resp.data.cat,
                    dog: resp.data.dog
                });
            })
            .catch((err) => {
                console.log(err.data);
            });
        
        
    }

    componentDidMount(){
        setInterval(this.getVotes, 1000)
    }

    render(){
        const cat = this.state.cat;
        return(
            <div>
                <h1>Cat : {cat}</h1>
                <h1>Dog: {this.state.dog}</h1>
            </div>
        )
    }

}

export default PollData;
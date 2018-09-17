import React, {Component} from 'react';
import axios from 'axios';

class PollData extends Component{
    constructor(props){
        super(props);
        this.getVotes = this.getVotes.bind(this)
        this.state = {
            angular: 0,
            react: 0,
            ember: 0,
            vue: 0
        };

    }

    getVotes(){
        let url = "http://"+window.location.hostname + ":8000/getPolls"

        axios.get(url, {})
            .then((resp) =>{
                this.setState({
                    angular: resp.data.angular,
                    react: resp.data.react,
                    ember: resp.data.ember,
                    vue: resp.data.vue
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
        const data = {
            angular: this.state.angular,
            react: this.state.react,
            ember: this.state.ember,
            vue: this.state.vue
        }
        return(
            <div>
                <h1>Angular: {data.angular}</h1>
                <h1>React: {data.react}</h1>
                <h1>Ember: {data.ember}</h1>
                <h1>Vue: {data.vue}</h1>
            </div>
        )
    }

}

export default PollData;

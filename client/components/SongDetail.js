import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import fetchSong from '../queries/fetchSong';

class SongDetail extends Component {
    render(){
        console.log(this.props);
        return(
            <div>
                <h3>Song Detail</h3>
            </div>
        );
    }
}

//Here we combine the props transfered by the react router into params, providing the ID
// and the wraping up with fetchSong Query in order to execute the mutation
export default graphql(fetchSong, {
    options: (props) => { return { variables: {id: props.params.id } } }
})(SongDetail);
import React, {Component}from 'react';
import axios from 'axios';
class Data extends Component{
    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/users/')
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    render(){
        return (
            <div>
                <p>Here is a list of contents!!</p>
                <p>Here you will find all the list of friends!!</p>

            </div>
        );
    }
}

export default Content;
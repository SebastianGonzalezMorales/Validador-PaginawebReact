import React, { Component } from 'react';


class MiComponente extends Component {


    render() {
        return (
        <div>
           0 <p>Hello world 2 mtf {this.props.mensaje}</p>  
            <input type="button" value="Presione aquí" />
            <img src="https://miro.medium.com/max/2400/1*VytWprd2ulmw2eIwnHMNJQ.jpeg" />

        </div>
        );
    }
}

export default MiComponente;
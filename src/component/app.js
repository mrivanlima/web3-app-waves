import ReactDom from "react-dom";
import React from 'react';

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {}
    }
    render () {
        return (
            <div className="container">
                <input classname="btn btn-primary" type="submit" value="Alert" onClick={() => {alert("Alert button onclick");}}/>
            </div>
        )
    }
}

const app = document.getElementById ('app');
if(app){
    ReactDom.render(<App/>, app);
}
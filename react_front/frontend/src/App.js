import React, { Component } from "react";
import FileExtensionCheck from "./component/FileExtensionCheck";
import DefaultExtension from "./component/DefaultExtension";
import CustomExteinson from "./component/CustomExtension";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {

  state = {
    isMJ: false,
    isJB: false,
    isDrake: false,
    files : []
  };

  

  toggleChangeMJ = () => {
    this.setState((prevState) => ({
      isMJ: !prevState.isMJ
    }));
  };

  toggleChangeJB = () => {
    this.setState((prevState) => ({
      isJB: !prevState.isJB
    }));
  };

  toggleChangeDrake = () => {
    this.setState((prevState) => ({
      isDrake: !prevState.isDrake
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  handleChange = (e) =>{
    e.preventDefault()
    this.setState({})
  }
  render() {
    return (
      <div className="container">
        <h2>File Extension Settings</h2>
        <hr />
        <FileExtensionCheck/>
        <DefaultExtension/>
        
      </div>
    );
  }
}

export default App;

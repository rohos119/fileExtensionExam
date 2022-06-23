import React, { Component } from "react";
import FileExtensionCheck from "./component/FileExtensionCheck";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {

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
      </div>
    );
  }
}

export default App;

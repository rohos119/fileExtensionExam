import React, { useState, Component ,useRef, useEffect } from "react";

class FileExtensionCheck extends Component{
    state = {
        filelist : []
    }

    handleFiles = (e) => {
        this.setState({
            filelist : e.target.files
        })
        console.log(this.filelist)
    }
    
    render(){
        return (
            <div>
                <h3>Upload File </h3>
                <div>
                    <input type='file' onChange={this.handleFiles} multiple/>
                </div>
                <hr />
            </div>
        )
    }
}

export default FileExtensionCheck;

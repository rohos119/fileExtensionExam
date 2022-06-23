import React, { useState, Component ,useRef, useEffect } from "react";

function FileExtensionCheck(){
    const[fileList, setFileList] = useState("");

    const handleFiles = (e) => {
        setFileList(e.target.files);
    }

    const ExteinsonCheck=()=>{

    }
    return (
            <div>
                <h3>Upload File </h3>
                <div >
                    <input type='file' onChange={handleFiles} multiple />
                    <div id="row" >
                    <p >{Object.keys(fileList).map((key,index)=>{
                        return (<span>"{fileList[key].name}" ,</span>);
                    })}</p>
                    </div>
                </div>
                <hr />
            </div>
        );
}

export default FileExtensionCheck;

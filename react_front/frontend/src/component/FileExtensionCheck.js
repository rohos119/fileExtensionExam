import React, { useState, useEffect } from "react";
import DefaultExtension from "./DefaultExtension";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";


function FileExtensionCheck(){
    const[fileList, setFileList] = useState("");

    const handleFiles = (e) => {
        setFileList(e.target.files);
    }

    const ExteinsonCheck=(getList)=>{
        var acceptExtension = []
        var fileExtension = []
        if (fileList) {
            for(var i=0; i<fileList.length;i++){
                fileExtension.push(fileList[i]['name'].slice(fileList[i]['name'].indexOf('.')+1).toLowerCase());
                
            }
            for(var j=0; j<getList.length;j++){
                if(!getList[j]['apply']){
                    acceptExtension.push(getList[j]['name']);
                }
            }
            var check =fileExtension.filter(x=> !acceptExtension.includes(x));
            if (check.length < fileExtension.length){
                let banExtension ='허용되지 않는 확장자가 포함되어 있습니다.\n'+ fileExtension.filter(x=> acceptExtension.includes(x));
                alert(banExtension);
            }
        }    
    }
    return (
            <div className="container">
                <h3>Upload File </h3>
                <div >
                    <input type='file' class="form-control-file" id="exampleFormControlFile1" onChange={handleFiles} multiple  />
                </div>
                <div className="row mt-2" >
                    <p >{Object.keys(fileList).map((key,index)=>{
                        return (<span className="badge bg-info me-2">{fileList[key].name}</span>);
                    })}</p>
                    </div>
                <hr />
                <DefaultExtension ExteinsonCheck ={ExteinsonCheck}/>
            </div>
            
        );
}

export default FileExtensionCheck;

import axios from "axios";
import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../src/CustomExtension.css";

function CustomExtension({getList}){
    const [selected, setSelected] = useState([]);
    const [tags, setTags] = useState([]);
    
    // useEffect(() => {
    //     onChange && onChange(tags);
    //   }, [tags]);
    
    //   const handleOnKeyUp = e => {
    //     e.stopPropagation();
    
    //     const text = e.target.value;
    
    //     if (e.key === "Backspace" && tags.length && !text) {
    //       setTags(tags.slice(0, -1));
    //     }
    
    //     if (text && (seprators || defaultSeprators).includes(e.key)) {
    //       if (tags.includes(text)) {
    //         onExisting && onExisting(text);
    //         return;
    //       }
    //       setTags([...tags, text]);
    //       e.target.value = "";
    //       e.preventDefault();
    //     }
    //   }
    const onSubmit=(e)=>{
        console.log(e);
    }

    const checkCharCode= (e)=>{
        const regExp = /[^a-zA-Z]/g;
        const ele = e.target;
        if(regExp.test(ele.value)){
            ele.value = ele.value.replace(regExp,'');
        }
    }

    const btnstyle ={
        height : "4vh",
        fontsize : "1rem"
    }

    const tageFieldstyle ={
        height : "500px",
    }


    return (
        <form onSubmit={onSubmit}>
        <div>
            <div className="row mt-3">
                <div className="col-2">
                    <span>커스텀 확장자</span>
                </div>
                <div className="col-5">
                    <input 
                        type="text"
                        className="extension"
                        placeholder="확장자 입력" 
                        // onKeyDown={selected}
                        onKeyUp={checkCharCode} 
                        // onBlur={selected}
                        maxLength = "20" 
                        />
                </div>
                <div className="col-3">
                    <button 
                        className="badge btn-info me-2"
                        style={btnstyle}
                        type="submit"
                        >
                        <span>
                            +추가
                        </span>
                    </button>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-2"></div>
                <div className="col-6 pl-1 ml-2 border border-info" style={tageFieldstyle}>
                   
                </div>
            </div>
        </div>
        </form>
  );
}
export default CustomExtension;
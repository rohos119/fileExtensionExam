import axios from "axios";
import { useState, useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../src/CustomExtension.css";

function CustomExtension({getList}){
    const [tags, setTags] = useState();
    const [customCheck, setCustomCheck] = useState();
    useEffect(() => {
        axios.get('http://143.244.178.231:5000/api/getCustom')
        .then(res => {
          setTags(res.data);
          localStorage.setItem("keepCustomCheck",JSON.stringify(res.data)); 
        })
    
      }, [tags])
     
    const onSubmit=(e)=>{
        e.preventDefault();
        console.log(e.target.tag.value);
        let keepCheck = JSON.parse(localStorage.getItem("keepCustomCheck"));
        keepCheck.push({'name' : e.target.tag.value});
        localStorage.setItem("keepCustomCheck", JSON.stringify(keepCheck));
        axios.post('http://143.244.178.231:5000/api/insertCustom/', 
            { name : e.target.tag.value })
            .then(res => {
                console.log(res);
            })
            .catch((e)=>{
                console.error(e);
            });
   }
   const tagDelete=(e)=>{
        e.preventDefault();
        console.log(e.target.value);
        axios.post('http://143.244.178.231:5000/api/deleteCustom/', 
        { name : e.target.value })
        .then(res => {
            console.log(res);
        })
        .catch((e)=>{
            console.error(e);
        });

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
        fontsize : "1rem",
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
                        name ="tag"
                        placeholder="확장자 입력" 
                        onKeyUp={checkCharCode} 
                        maxLength = "20" 
                        />
                </div>
                <div className="col-3">
                    <button 
                        className="badge btn-info me-2"
                        style={btnstyle}
                        type="submit"
                        >
                        <span>+추가</span>
                    </button>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-2"></div>
                <div className="tag col-6 pl-1 ml-2 border border-info" style={tageFieldstyle}>

                {tags&&tags.map(list=> 
                    <button
			key = {list.name}
                        value = {list.name} 
                        type="button" 
                        className="badge bg-info me-2" 
                        onClick={tagDelete}>
                        {list.name} X
                    </button>
                    )}
                </div>
            </div>
        </div>
        </form>
  );
}
export default CustomExtension;

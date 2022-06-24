import axios from "axios";
import { useEffect, useState  } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CustomExtension from "./CustomExtension";

function DefaultExtension({ExteinsonCheck}){
    const [getList, setGetList] = useState();
    const [mainTainChecked,setMainTainChecked] =useState();
    useEffect(() => {
      axios.get('http://localhost:5000/api/getDefault')
        .then(res => {
          setGetList(res.data);
        })
    }, [])
    ExteinsonCheck(getList);
    window.localStorage.setItem("keepCheck", JSON.stringify(getList));

    const toggleChange = (e) => {
        let changeItem = {};
        let keepCheck = JSON.parse(localStorage.getItem("keepCheck"));
        if(e.target.checked){
            for(var i=0; i < getList.length; i++){
                if(getList[i]['name'] === e.target.id){
                    getList[i]['apply'] = 1;
                    keepCheck[i]['apply'] = 1;
                    changeItem = getList[i];

                    break;
                }
            }
        }else{
            for(var j=0; j < getList.length; j++){
                if(getList[j]['name'] === e.target.id){
                    getList[j]['apply'] = 0;
                    keepCheck[j]['apply'] = 0;
                    changeItem = getList[j];
                    break;
                }
            }
        }
        axios.post('http://localhost:5000/api/updateDefault/', 
                    { name : changeItem['name'] , apply : changeItem['apply']})
                  .then(res => {
                    console.log(res);
                  })
                  .catch((e)=>{
                    console.error(e);
                  });
              
        localStorage.setItem("keepCheck", JSON.stringify(keepCheck));
      };
    const lastingCheck=()=>{
        var temp = JSON.parse(localStorage.getItem("keepCheck"));
        return console.log(temp);
    }
    return (
      <div>
      <form>
        <div className="row">
            <div className="col-2">
                <span>고정 확장자</span>
            </div>
            <div className="col">
            {lastingCheck}
            {getList&&getList.map(list=> 
                <div className="form-check form-check-inline">
                <input
                    id = {list.name}
                    type="checkbox"
                    value={list.apply}
                    className="form-check-input"
                    onChange={toggleChange}
                />
                <label className="form-check-label">{list.name}</label>
                </div>
                )}
            </div>
        </div>
      </form>
      <CustomExtension getDefaultList={getList} />
      </div>
    )
}

export default DefaultExtension;
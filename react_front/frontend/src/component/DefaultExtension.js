import axios from "axios";
import { useEffect, useState  } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CustomExtension from "./CustomExtension";

function DefaultExtension({ExteinsonCheck}){
    const [getList, setGetList] = useState();
    useEffect(() => {
      axios.get('http://localhost:5000/api/getDefault/')
        .then(res => {
          setGetList(res.data);
        })
    }, [])
    ExteinsonCheck(getList);
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
      };
    const toggleChange = (e) => {
        if(e.target.checked){
            for(var i=0; i < getList.length; i++){
                if(getList[i]['name'] == e.target.id){
                    getList[i]['apply'] = 1;
                    console.log(getList[i]);
                    console.log(getList);
                    break;
                }
            }
        }else{
            for(var j=0; j < getList.length; j++){
                if(getList[j]['name'] == e.target.id){
                    getList[j]['apply'] = 0;
                    console.log(getList[j]);
                    console.log(getList);
                    break;
                }
            }
        }
      };

    return (
      <div>
      <form>
        <div className="row">
            <div className="col-2">
                <span>고정 확장자</span>
            </div>
            <div className="col">
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
      <CustomExtension />
      </div>
    )
}

export default DefaultExtension;
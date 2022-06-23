import axios from "axios";
import { useEffect, useState  } from 'react';

function DefaultExtension(){
    const [getList, setGetList] = useState();
    useEffect(() => {
      axios.get('http://localhost:5000/api/getDefault/')
        .then(res => {
          setGetList(res.data);
        })
    }, [])
  
    return (
      <form>
        <div>
            <span>고정 확장자</span>
        </div>
        <div>
        {getList&&getList.map(list=> 
             <div className="form-check">
             <label className="form-check-label">
               <input
                 type="checkbox"
                 checked={list.name}
                 onChange={list.apply}
                 className="form-check-input"
               />
               {list.name}
             </label>
           </div>
            )}
       
        </div>
      </form>
    )
  }

// function DefaultExtension(){
//     const [getList , setGetList] = useState();

//     const GetDefaultList= () =>{
//         useEffect(()=>{
//             axios.get('/api/getDefault')
//             .then(res=>{
//                 console.log(res);
//             })
//         },[])
//     }  
// //   const dataMount=()=>{
// //     getDefaultList();
// //   }

// //   render(){ 
//     return (
//     <div >
//         {/* <form onSubmit={this.onSubmit}> */}
//         {}
//         {/* <p>{this.state.dataList.map((extension)=>{
//                         return (<span>"{extension}" ,</span>);
//         })}</p> */}
//         {/* //   <div className="form-check">
//         //     <label className="form-check-label">
//         //       <input
//         //         type="checkbox"
//         //         checked={this.state.isMJ}
//         //         onChange={this.toggleChangeMJ}
//         //         className="form-check-input"
//         //       />
//         //       MJ
//         //     </label>
//         //   </div>

//         //   <div className="form-check">
//         //     <label className="form-check-label">
//         //       <input
//         //         type="checkbox"
//         //         checked={this.state.isDrake}
//         //         onChange={this.toggleChangeDrake}
//         //         className="form-check-input"
//         //       />
//         //       Drake
//         //     </label>
//         //   </div>
//         //   <div className="form-group">
//         //     <button className="btn btn-primary">Submit</button>
//         //   </div> */}
//         {/* </form> */}
//     </div>
    
//   );
// }

// export default DefaultExtension;

export default DefaultExtension;
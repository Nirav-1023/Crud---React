import React,{useEffect,useState} from "react";
import { useNavigate,useParams } from "react-router-dom";

const Updatestudent = () =>{

    const {id} = useParams();
    const nav =  useNavigate();
    const API = 'https://6aa12c512703577aa1e35e69.mockapi.io/demo1';
    const [data,setData] = useState({
        rno:'',
        name:'',
        class:'',
        profile:''
    });


    useEffect(()=>{
        fetch(API + '/' + id)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            setData(data);
        })
    },[id])


    const Imgupload = (e) =>{
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () =>{
            setData({...data,profile:reader.result});
        }
        reader.readAsDataURL(file);
    }

    return(
        <>
            <h1>Update Form</h1>

            Roll Num:<input type="text" value={data.rno} onChange={(e)=>{
                setData({...data,rno:e.target.value});
            }}/>

            Name:<input type="text" value={data.name} onChange={(e)=>{
                setData({...data,name:e.target.value});
            }}/>

            Class:<input type="text" value={data.class} onChange={(e)=>{
                setData({...data,class:e.target.value});
            }}/>

            Profile:<input type="file" onChange={Imgupload}/>

            <input type="button" value='Upadate' onClick={()=>{
                fetch(API + '/' + id,{
                    method:'PUT',
                    body:JSON.stringify(data),
                    headers:{"Content-Type":'application/json'}
                })

                .then(()=>{
                    alert("Record Updated");
                    nav("/student");
                })
            }}/>
        </>

    );


}

export default Updatestudent;
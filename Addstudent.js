import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
const Addstudent = () => {

    const API = 'https://6aa12c512703577aa1e35e69.mockapi.io/demo1';
    const [data, setData] = useState({
        rno: '',
        name: ``,
        class: '',
        profile: ''
    })
    const nav = useNavigate();

    const imgUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setData({ ...data, profile: reader.result })
        }
        reader.readAsDataURL(file);
    }

    return (
        <>
            <h1>Add Student Form</h1>

            Roll Num: <input type="text" onChange={(e) => {
                setData({ ...data, rno: e.target.value });
            }} />
            Name:<input type="text" onChange={(e) => {
                setData({ ...data, name: e.target.value });
            }} />
            Class:<input type="text" onChange={(e) => {
                setData({ ...data, class: e.target.value })
            }} />
            Profile:<input type="file" onChange={imgUpload} />

            <input type="button" value='Add' onClick={(() => {
                fetch(API, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: { 'Content-Type': 'application/json' }
                })
                    .then(() => {
                        alert("Record Added");
                        nav("/student");
                    })
            })} />




        </>

    );

}

export default Addstudent;
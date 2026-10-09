import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
const Student = () => {

    const [student, setStudent] = useState([]);
    const API = 'https://6aa12c512703577aa1e35e69.mockapi.io/demo1';

    useEffect(() => {
        fetch(API)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setStudent(data);
            })
    })

    const deleteStudent = (id) => {
        fetch(API + '/' + id, {
            method: 'DELETE',
        })

            .then(() => {
                alert("Record Deleted");
                fetch(API)
                    .then((res) => {
                        return res.json();
                    })
                    .then((data) => {
                        setStudent(data);
                    })
            })
    }

    return (
        <>
            <Link to={'/student/add'} ><button>Add Data</button></Link>
            <table>
                <thead>
                    <tr>
                        <th>Roll Num</th>
                        <th>Name</th>
                        <th>Class</th>
                        <th>img</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {student.map((data) => (
                        <tr key={data.id}>
                            <td>{data.rno}</td>
                            <td>{data.name}</td>
                            <td>{data.class}</td>
                            <td>
                                <img src={data.profile} height={100} width={100} />
                            </td>
                            <td>
                                <input onClick={() => {
                                    deleteStudent(data.id);
                                }} type="button" value='Delete' />
                                <Link to={'/update/' + data.id} ><button>Update</button></Link>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </>
    );

}

export default Student;
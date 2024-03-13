import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios";


const TeacherDetails = () => {
  const { id } = useParams();
  const [teacher, setTeacher] = useState([])
  const navigate = useNavigate()
  const Data = async () => {
    const data = await axios.get("https://jsonplaceholder.typicode.com/users/1")
    console.log(data.data)
    setTeacher(data.data)
  }
  useEffect(() => {
    Data()
  }, [])
  const { name, address, email, phone } = teacher
  return (
    <div className='text-center' >
      <div
        key={id}
        className='border border-5 p-3 mt-2 text-dark bg-info mb-3'
        style={{ width: "280px", margin: "auto", height: "300px" }}
      >
        <h3 className='fs-5'>{name}</h3>
        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`} class="rounded-circle border border-danger border-3" style={{ height: "95px" }} alt="avatar" />


        <h4 className='fs-6'>e-mail:{email}</h4>
        <h4 className='fs-6'>City:{address?.city}</h4>
        <h4 className='fs-6'>Phone:{phone}</h4>



      </div>
      <div>
        <button className='mt-2 btn btn-danger' onClick={() => navigate(-1)}>Go Back</button>
        <button className='mt-2 btn btn-danger' onClick={() => navigate("/")}>Go Home</button>
      </div>

    </div>
  )
}

export default TeacherDetails
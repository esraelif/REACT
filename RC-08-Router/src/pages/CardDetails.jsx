import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import data from "../data"

const CardDetails = () => {
  //routerdan path olarak gelen name burada userParams hook'u ile yakalandı
  const { name } = useParams()


  //Bir önceki sayfaya geri dönebilmek için useNavigate kullanıyorum:
  const navigate = useNavigate()
  return (
    <div className='container text-center mt-4'>
      {data.map((i) => i.name === name && (
        <div>
          <h3>{i.name}</h3>
          <img src={i.img} alt="" width="200px" />
          <h3>{i.text} </h3>
          <h4>{i.yorum} </h4>
          <div>
            <button className='btn btn-warning' onClick={() => navigate(-1)}>Go Back</button>
            <button className='btn btn-primary' onClick={() => navigate("/")}>Go Home</button>
          </div>

        </div>
      ))}

    </div>
  )
}

export default CardDetails
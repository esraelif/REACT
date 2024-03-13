import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Buton = () => {

  const navigate = useNavigate()

  return (
    <div className='text-center'>
      <Button className='btn btn-danger p-4 m-2'>LOGIN</Button>
      <Button className='btn btn-danger p-4 m-2'>CLOSE</Button>
      <Button className='btn btn-danger p-4 m-2'>ERASE</Button>
    </div>
  )
}

export default Buton
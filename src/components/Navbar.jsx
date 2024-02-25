import React,{useContext, useState} from 'react'
import NoteContext from '../context/NoteContext'

const Navbar = () => {
  const context=useContext(NoteContext)
  const {setShare}=context
  const [search, setSearch]=useState('')

  const handleSubmit=(e)=>{
    e.preventDefault()
    setShare(search)
    setSearch("")
  }


  return (
    <>
      <div className='d-flex my-3'>
        <a className="navbar-brand" href="#"><img  style={{ width: "150px", marginLeft: "25px" }} src="src\assets\3-13-removebg-preview.png " alt="" /></a>


        <input className="form-control me-2" type="search" style={{ width: "60%", marginLeft:"100px", borderRadius:"20px" }} placeholder="Search" aria-label="Search" onChange={(e)=>setSearch(e.target.value)} />
        <button type='button' style={{borderRadius:"10px"}} onClick={handleSubmit}>Search</button>
      </div>


    </>
  )
}

export default Navbar
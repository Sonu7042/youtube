import React, { useState } from 'react'
import NoteContext from './NoteContext'

const NoteState = ({children}) => {
    const [share, setShare]=useState('')
   

  return (
    <NoteContext.Provider value={{share, setShare}}>
        {children}
    </NoteContext.Provider>
    
  )
}

export default NoteState
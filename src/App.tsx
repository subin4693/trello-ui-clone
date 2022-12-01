import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './components/Navbar';

import InputBox from './components/InputBox';
import InputBtn from './components/InputBtn';


type ReduxStateType = {
  Notes: {
    allCards: 
    {
      cardTitle: string
      cardId: number,
      lists: 
      {
        listTitle: string,
        listId: number,
        cardId: number
      }[]   
    }[]
  }
  
}

const App = () => {
  const [allNotes, setAllNotes] = useState(useSelector((state: ReduxStateType) => state.Notes.allCards));
  const [openInput, setOpenInput] = useState<boolean>(false);
  console.log(allNotes)
  return (
    <div>
      <Navbar />
      {
        openInput ?
          (<InputBtn setOpenInput={setOpenInput} cardId="af" />) :
          (<InputBox cardId="afasf" setOpenInput={setOpenInput} />)
      }
    </div>
  )
}

export default App;
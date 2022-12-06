import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { db } from './firebase';
import { collection, onSnapshot, query, doc } from 'firebase/firestore';

import { setAllCardsFromFb } from './features/NotesSlice';

import Navbar from './components/Navbar';
import InputBox from './components/InputBox';
import InputBtn from './components/InputBtn';
import CardContainer from './components/CardContainer';

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
  const allNotes = useSelector((state: ReduxStateType) => state.Notes.allCards)
  const [notesFb, setNotesFb] = useState([]);
  const [openInput, setOpenInput] = useState<boolean>(true)
  const dispatch = useDispatch();

  useEffect(() => {
    const q = query(collection(db, "cards"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        dispatch(setAllCardsFromFb(doc.data()))    
      })
    })
    // const changeNoteTitle = doc(db, "cards", "59b9a24c-32b4-45da-9661-8e31f6adde88");
    // const unsub = onSnapshot(changeNoteTitle, (docs: any) => {
    //   console.log(docs.data());
    // });
    return unsub


  }, [])


  return (
    <div>
      <Navbar />
      <div className="flex px-2 flex-wrap">
        {
          allNotes.map((val, index) => {
            if (val.lists)
              return <CardContainer key={val.cardId} cardItem={val.lists} cardId={val.cardId} cardTitle={val.cardTitle} index={index} /> 
          })
        }
        {
          openInput ?
            (<InputBtn setOpenInput={setOpenInput} cardId={3432} />) :
            (<InputBox cardId={3232} setOpenInput={setOpenInput} />)
        }
      </div>
    </div>
  )
}

export default App;
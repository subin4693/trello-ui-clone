import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

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
  const [openInput, setOpenInput] = useState<boolean>(true)


  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, "cards"));
      querySnapshot.forEach((doc) => {

        console.log(`${doc.id}`);
        console.log({ ...doc.data() })
      });
    }
    getData();
  }, [])


  return (
    <div>
      <Navbar />
      <div className="flex px-2 flex-wrap">
        {
          allNotes.map((val, index) => {
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
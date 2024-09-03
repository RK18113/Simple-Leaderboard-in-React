import { useState } from 'react'
import Header from './components/Header.jsx'
import CategoryBtn from './components/CategoryBtn.jsx'
import Winners from './components/Winners.jsx'
import Participants from './components/Participants.jsx'

function App() {
  const [isOrganisation, setOrganisation] = useState(true);

  const [winners, setWinners] = useState(["Eudeb", "Jackson", "Emma Aria"]);
  const [winnerPoints, setWinnerPoints] = useState([2430, 1847, 1674]);

  const [participants, setParticipants] = useState(["Sebastian", "Jason", "Natalie", "Serenity", "Hannah"]);
  const [participantPoints, setParticipantPoints] = useState([1124, 875, 774, 723, 559]);
  const [isNetPositive, setIsNetPositive] = useState([true, false, true, true, false]);

  const handleOrganisation = (value) => {
    setOrganisation(value)
  }

  return (
    <div className='bg-[#E7F0FE] h-screen'>  {/* remove the full screen style after completing */}
      <Header></Header>
      <CategoryBtn isOrganisation={isOrganisation} handleOrganisation={handleOrganisation}></CategoryBtn>

      {/* for now its the same for both... it can be changed to display diffent for organisation and department */}
      {
        isOrganisation ? 
        <div className='flex flex-wrap justify-around w-full lg:flex-nowrap sm:mt-10 lg:mt-[15vh]'>
          <Winners winners={winners} winnerPoints={winnerPoints}></Winners>
          <Participants participants={participants} participantPoints={participantPoints} isNetPositive={isNetPositive}></Participants>
        </div> : 
        <div className='flex flex-wrap justify-around w-full lg:flex-nowrap sm:mt-10 lg:mt-[15vh]'>
          <Winners winners={winners} winnerPoints={winnerPoints}></Winners>          
          <Participants participants={participants} participantPoints={participantPoints} isNetPositive={isNetPositive}></Participants>
        </div>
      }

    </div>
      )
}
export default App
import { useState } from 'react'
import Header from './components/Header.jsx'
import CategoryBtn from './components/CategoryBtn.jsx'
import Winners from './components/Winners.jsx'
import Participants from './components/Participants.jsx'

function sortWinners(winners, rating){
  for (let i = 0; i < rating.length; i++){
    for (let j = 0; j < rating.length - i - 1; j++){
      if (rating[j] < rating[j+1]){
        const temp = rating[j];
        rating[j] = rating[j+1];
        rating[j+1] = temp;

        const temp2 = winners[j];
        winners[j] = winners[j+1];
        winners[j+1] = temp2;
      }
    }
  }
}

function sortParticipants(participants, rating, net){
  for (let i = 0; i < rating.length; i++){
    for (let j = 0; j < rating.length - i - 1; j++){
      if (rating[j] < rating[j+1]){
        const temp = rating[j];
        rating[j] = rating[j+1];
        rating[j+1] = temp;

        const temp2 = participants[j];
        participants[j] = participants[j+1];
        participants[j+1] = temp2;
        
        const temp3 = net[j];
        net[j] = net[j+1];
        net[j+1] = temp2;
      }
    }
  }
}

function App() {
  const [isOrganisation, setOrganisation] = useState(true);

  const [winners, setWinners] = useState(["Eudeb", "Jackson", "Emma Aria"]);
  const [winnerPoints, setWinnerPoints] = useState([2430, 1847, 1674]);

  const [participants, setParticipants] = useState(["Sebastian", "Jason", "Natalie", "Serenity", "Hannah", "Jason", "Natalie", "Serenity", "Hannah"]);
  const [participantPoints, setParticipantPoints] = useState([1124, 875, 774, 723, 559, 875, 774, 723, 559]);
  const [isNetPositive, setIsNetPositive] = useState([true, false, true, true, false, false, true, true, false]);

  const handleOrganisation = (value) => {
    setOrganisation(value)
  }

  sortWinners(winners, winnerPoints);
  sortParticipants(participants, participantPoints, isNetPositive);

  return (
    <div className='bg-[#E7F0FE] h-screen'>
      <Header></Header>
      <CategoryBtn isOrganisation={isOrganisation} handleOrganisation={handleOrganisation}></CategoryBtn>

      {/* for now its the same for both... it can be changed to display diffent for organisation and department */}
      {
        isOrganisation ? 
        <div className='flex flex-wrap justify-around w-full lg:flex-nowrap lg:mt-[10vh]'>
          <Winners winners={winners} winnerPoints={winnerPoints}></Winners>
          <Participants participants={participants} participantPoints={participantPoints} isNetPositive={isNetPositive}></Participants>
        </div> : 
        <div className='flex flex-wrap justify-around w-full lg:flex-nowrap lg:mt-[10vh]'>
          <Winners winners={winners} winnerPoints={winnerPoints}></Winners>          
          <Participants participants={participants} participantPoints={participantPoints} isNetPositive={isNetPositive}></Participants>
        </div>
      }

    </div>
    )
}
export default App

import { useState } from 'react'
import './App.css'
import RatingCard from './components/RatingCard'
import SelectedCard from './components/SelectedCard'

function App() {

  const [selectedRating, setSelectedrating] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleRatingSubmit = () => {
    if(selectedRating) {
      setIsSubmitted(true)
    }
  }


  return(
    <div className='main-container'>

      {
        !isSubmitted ? (<RatingCard setRating={setSelectedrating}  onSubmit={handleRatingSubmit}/>

        ): (
          <SelectedCard rating={selectedRating} />
        )

      }
    
      
    </div>
  )
  
 
}

export default App

import React from 'react'
import starIcon from '../assets/images/icon-star.svg'



const RatingCard = ({setRating, onSubmit}) => {
  return (
    <div className='raiting-container'>
       

       <div className='starIcon-div'>
      <img src={starIcon} alt="" />
      </div>
      

      <h2 className='ratinghead'>How Did We Do?</h2>
      <p className='ratingP'>Please let us know how we  did with your support request. All feedback is appreciated to help us improve our offering!</p>

     
      <div className="ratingBtns">
        {[1, 2, 3, 4, 5].map((num) => (
          <button key={num} onClick={() => setRating(num)}>
            {num}
          </button>
        ))}
      </div>

  
     <button className='rating-container-btn' onClick={onSubmit}>SUBMIT</button>
    

      
    </div>
  )
}

export default RatingCard

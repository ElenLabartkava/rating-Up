import React from 'react'
import thankIcon from '../assets/images/illustration-thank-you.svg'

const SelectedCard = ({rating}) => {
  return (
    <div className='raiting-container'>

        <div className='selectedCard-container'>
       

    <img src={thankIcon} alt="" />
    <p className='selected-paragraph1'>You selected {rating} out of 5</p>

    <h3 className='selected-head'>Thank you!</h3>
    <p className='selected-paragraph2'>We appreciate you taking the time to give a rating . if you ever need more support, do not hesitate to get in touch!  </p>
    </div>
   
 </div>
  )
}

export default SelectedCard

import React from 'react'
import './possibility.css'

import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
    return (
        <div className='gpt3__possibility section__padding' id='possibility'>
            <div className='gpt3__possibility-image'>
                <img src={possibilityImage} alt='possibility' />
            </div>
            <div className='gpt3__possibility-content'>
                <h4><a href='https://chat.openai.com/' rel='noreferrer' target='_blank'>Request access to get started.</a></h4>
                <h1 className='gradient__text'>Possibilites are beyond your imagination</h1>
                <p>
                    As an advanced language model, I can generate coherent and high-quality text for various applications, from chatbots to automatic translation and text summarization.
                </p>
                <h4><a href='https://chat.openai.com/' rel='noreferrer' target='_blank'>Request access to get started.</a></h4>
            </div>
        </div>
    )
}

//2.20

export default Possibility
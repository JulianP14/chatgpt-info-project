import React from 'react'
import './cta.css'

const Cta = () => {
    return (
        <div className='gpt3__cta'>
            <div className='gpt3__cta-content'>
                <p>
                    Request Access
                </p>
                <h3>Register today & start exploring the endless possibilities.</h3>
            </div> 
            <div className='gpt3__cta-btn'>
                <button type='button'><a href='https://chat.openai.com/' rel='noreferrer' target='_blank'>Register</a></button>
            </div>
        </div>
    )
}

export default Cta

//2.33
import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className='gpt3__footer section__padding'>
            <div className='gpt3__footer-heading'>
                <h1 className='gradient__text'>Do you want to step into the future before others?</h1>
            </div>
            <div className='gpt3__footer-btn'>
                <p><a href='https://chat.openai.com' rel='noreferrer' target='_blank'>Try it now!</a></p>
            </div>
            <div className='gpt3__footer-links'>
                <div className='gpt3__footer-links_logo'>
                    <img src={gpt3Logo} alt='logo' />
                    <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                </div>
                <div className='gpt3__footer-links_div'>
                    <h4>Links & Social Media</h4>
                    <p>
                        <a href='https://github.com/openai' rel='noreferrer' target='_blank'>
                            GitHub
                        </a>
                    </p>
                    <p>
                        <a href='https://youtube.com/OpenAI' rel='noreferrer' target='_blank'>
                            YouTube
                        </a>
                    </p>
                    <p>
                        <a href='https://twitter.com/OpenAI' rel='noreferrer' target='_blank'>
                            Twitter
                        </a>
                    </p>
                    <p>
                        <a href='https://www.linkedin.com/company/openai' rel='noreferrer' target='_blank'>
                            LinkedIn
                        </a>
                    </p>
                </div>
                <div className='gpt3__footer-links_div'>
                    <h4>Company</h4>
                    <p>
                        <a href='https://openai.com/policies' rel='noreferrer' target='_blank'>
                            Terms & Conditions
                        </a>
                    </p>
                    <p>
                        <a href='https://openai.com/policies/privacy-policy' rel='noreferrer' target='_blank'>
                            Privacy Policy
                        </a>
                    </p>
                    <p>
                        <a href='https://openai.com/about' rel='noreferrer' target='_blank'>
                            About
                        </a>
                    </p>
                </div>
                <div className='gpt3__footer-links_div'>
                    <h4>Get in touch</h4>
                    <p>Crechterwoord K12 182 DK Alknjkcb</p>
                    <p>085-555-555</p>
                    <p>info@info.com</p>
                </div>
            </div>
            <div className='gpt3__footer-copyright'>
                <p>OpenAI © 2015-2023.</p>
            </div>
        </div>
    )
}

export default Footer
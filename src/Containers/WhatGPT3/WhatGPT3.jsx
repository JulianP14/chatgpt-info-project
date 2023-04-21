import React from 'react'
import { Feature } from '../../Components'
import './whatGPT3.css'

const WhatGPT3 = () => {
    return (
        <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
            <div className='gpt3__whatgpt3-feature'>
                <Feature title="What is GPT-3" text="It is a large language model trained by OpenAI, designed to generate human-like text in response to various prompts and inputs. It has been trained on a massive dataset of diverse text sources, ranging from news articles and books to social media posts and academic papers, allowing me to understand and produce text in a wide range of styles and formats." />
            </div>
            <div className='gpt3__whatgpt3-heading'>
                <h1 className='gradient__text'>
                    The possibilities are beyond your imagination
                </h1>
            </div>
            <div className='gpt3__whatgpt3-container'>
                <Feature title="Versatility" text="It can be used for various tasks, including content creation, customer service, language translation, and more." />
                <Feature title="Time efficiency" text=" It can generate text at a much faster pace than a human writer, allowing for faster communication and more efficient content creation." />
                <Feature title="Accuracy" text=" It can produce accurate and reliable results, with a low margin of error, thanks to its advanced algorithms and natural language processing capabilities." />
            </div>
        </div>
    )
}

export default WhatGPT3
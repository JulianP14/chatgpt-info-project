import React from 'react'
import Feature from '../../Components/Feature/Feature';
import './features.css'

const featuresData = [
    {
        title: 'Language Generation',
        text: 'It can generate human-like text in various styles and formats, including conversational, informative, persuasive, and more.',
    },
    {
        title: 'Contextual Understanding',
        text: ' It can analyze and understand the context of a given text, including grammar, syntax, semantics, and tone, to provide accurate and relevant responses.',
    },
    {
        title: 'Learning Ability',
        text: 'It can learn and adapt to new information and styles of writing based on the data and feedback provided by users.',
    },
    {
        title: 'Multilingual Capability',
        text: 'It can understand and generate text in multiple languages, including English, Spanish, French, German, and many others.',
    },
];

const Features = () => {
    return (
        <div className="gpt3__features section__padding" id="features">
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into it Today & Make it Happen.</h1>
                <p><a href='https://chat.openai.com/' rel='noreferrer' target='_blank'>Request access to get started.</a></p>
            </div>
            <div className="gpt3__features-container">
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
    )
}

export default Features
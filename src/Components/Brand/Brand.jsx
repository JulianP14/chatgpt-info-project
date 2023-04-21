import React from 'react'
import { google, slack, atlassian, dropbox, shopify } from './imports'
import './brand.css'
const imports = { google, slack, atlassian, dropbox, shopify };

const Brand = () => {
    return (
        <div className='gpt3__brand section__padding'>
            {Object.values(imports).map((importImg, index) => (
                <div key={index}>
                    <img src={importImg} alt={importImg} />
                </div>
            ))}
        </div>
    );
};





export default Brand
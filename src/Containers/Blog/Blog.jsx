import React from 'react'
import './blog.css'
import { Article } from '../../Components'
import { blog01, blog02, blog03, blog04, blog05 } from './imports.js'
const Blog = () => {
    return (
        <div className='gpt3__blog section__padding'>
            <div className='gpt3__blog-heading'>
                <h1 className='gradient__text'>A lot is happening. We are blogging about it</h1>
            </div>
            <div className='gpt3__blog-container'>
                <div className='gpt3__blog-container_groupA'>
                    <Article imgUrl={blog01} date='Mar 01, 2023' title='Introducing ChatGPT and Whisper APIs...'/>
                </div>
                <div className='gpt3__blog-container_groupB'>
                    <Article imgUrl={blog02} date='Apr 11, 2023' title="Announcing OpenAI's Bug Bounty Program..."/>
                    <Article imgUrl={blog03} date='Apr 05, 2023' title='Our approach to AI safety...'/>
                    <Article imgUrl={blog04} date='Mar 24, 2023' title='March 20 ChatGPT outage: Here’s what happened...'/>
                    <Article imgUrl={blog05} date='Mar 23, 2023' title='ChatGPT plugins...'/>
                </div>
            </div>
        </div>
    )
}

export default Blog
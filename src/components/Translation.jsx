import React from 'react'

const Translation = ({ setInput, doStuff, result }) => {
    return (
        <div className='translation'>
        <h1></h1>
            <textarea className="text-area" onChange={(e) => setInput(e.target.value)
            }></textarea>
            <div>
                <button className="action-btn" onClick={doStuff}>DO YOUR STUFF !</button>
            </div>
            <h3 className='result-text'>{result.length > 0 ? result : ""}</h3>
            
        </div>
    )
}

export default Translation;
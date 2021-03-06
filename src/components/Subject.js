import React from 'react';

const Subject = (props) => {
    function handleEnterButton(value) {
        if (window.event.keyCode === 13) {
            props.saveSubjectTitle()
        }
    }
    if(props.titleToggle === false) {
        return (
            <div className='subject'>
                <input 
                    type='text' 
                    className='input-title' 
                    value={props.title} 
                    onFocus={props.toggleTitleFocus}
                    onChange={function(){}} 
                ></input>
            </div>
        )
    } else {
        return (
            <div className='subject'>
                Title:
                <input 
                    type='text' 
                    value={props.title}
                    className='input-title2' 
                    onKeyUp={(e) => handleEnterButton(e.target.value)}
                    onChange={(e) => props.handleAddSubjectTitle(e.target.value)}
                ></input>
            </div>
        )
    }
}
    


export default Subject;
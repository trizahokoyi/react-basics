import React from 'react';
const Option = (props) => (
    <div className="option">
       <p className="option_text">{props.optionText}</p>
        <button className="button button--link"
        onClick={(e) => {
            props.handleRemove(props.optionText);
        }}
        >
        remove
        
       </button>
    </div>
);
export default Option;
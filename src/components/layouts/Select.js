import React from 'react';

const Select = (props) => {
    console.log(props);
    return(
        <div className="input-field col sm-12">
            <label htmlFor={props.name}>{props.title}</label>
            <select name={props.name} value={props.value} onChange={props.handleChange}>
                <option value="" disabled>{props.placeholder}</option>
                {props.options.map(option => {
                    return (
                        <option key={option.value} value={option.value} label={option.label}>{option.label}</option>
                    );
                })}
            </select>
        </div>
    )
}

export default Select;
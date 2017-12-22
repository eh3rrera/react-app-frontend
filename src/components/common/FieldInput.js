import React from 'react';


const FieldInput = ({input, type, name, label, placeholder, meta: {touched, error, warning}}) => {
    return(
            <div className="form-group">
                <label htmlFor={name}>{label}</label>

                <div className="field">
                    <input 
                        {...input} 
                        type={type}
                        name={name}
                        className="form-control"
                        placeholder={placeholder} 
                    />
                    
                    {touched && ((error && <p className="text-danger">{error}</p>) || (warning && <p className="text-danger">{warning}</p>))}
                </div>
            </div>
    );
};



export default FieldInput;

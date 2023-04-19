import React from 'react';
import styles from './FormControls.module.css'

export const FormControl = ({ input, meta: {touched, error}, typeElem, ...props }) => {
    const hasError = touched  && error;
    return (
        <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
            <div>
                {React.createElement(typeElem, {...input,...props})}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}
export const Input = (props) => {
    return <FormControl typeElem={'input'} {...props} /> 
}
export const Textarea = (props) => {
    return <FormControl typeElem={'textarea'} {...props} /> 
}

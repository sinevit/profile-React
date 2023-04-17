import React from 'react';
import styles from './FormControls.module.css'

export const FormControl = ({ input, meta, type, ...props }) => {
    const hasError = meta.touched  && meta.error;
    return (
        <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
            <div>
                {React.createElement(type, {...input,...props})}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const Input = (props) => {
    return <FormControl type={'input'} {...props} /> 
}
export const Textarea = (props) => {
    return <FormControl type={'textarea'} {...props} /> 
}

export const required = value => {
    if(value) return undefined; 
    return 'Field is required';
}

export const maxLengthCreator = maxLength => (value) => value.length > maxLength ? `Max length is ${maxLength} symbol` : undefined;
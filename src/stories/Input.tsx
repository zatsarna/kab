import React, {RefObject} from 'react';
type InputProps={
    value?: string
    onChange?: (text: string)=>void
}
const Input = (props: InputProps) => {
    return (
        <input value={props.value} onChange={(event)=>props.onChange ? props.onChange(event.currentTarget.value) : ""} />
    );
};

export default Input;
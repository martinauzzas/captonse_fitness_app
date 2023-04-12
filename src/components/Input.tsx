import { forwardRef } from "react";
import { TextField } from '@mui/material';

interface InputType {
    name: string,
    placeholder: string
}

const Input = forwardRef(( props: InputType, ref ) => {
    return (
        <TextField
            margin= "dense"
            inputRef= {ref}
            fullWidth
            type= 'text'
            {...props}
        >
        </TextField>
    )
})

export default Input
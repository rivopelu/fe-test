import { InputAdornment, TextField } from '@mui/material';
import { HTMLInputTypeAttribute, ReactNode } from 'react';
import { StyleVariable } from '../constants/StyleVariable.ts';

export function InputText(props: IProps) {
  return (
    <div className={'w-full flex flex-col items-center justify-start'}>
      <div className={'w-full text-start text-sm pb-1 text-slate-700'}>
        {props.label} {props.required && <span className={'text-red-700'}>*</span>}
      </div>
      <TextField
        name={props.name}
        id-={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        required={props.required}
        disabled={props.disable}
        type={props.type}
        error={!!props.errorMessage}
        color={props.errorMessage ? 'error' : 'primary'}
        helperText={props.errorMessage ? props.errorMessage : ''}
        sx={{ width: '100%', borderRadius: 2 }}
        placeholder={props.placeholder}
        InputProps={{
          sx: {
            borderRadius: 2,
            background: props.errorMessage ? StyleVariable.colors.system.errors['10'] : StyleVariable.colors.system.white,
          },
          startAdornment: props.startAdornment ? <InputAdornment position="start">{props.startAdornment}</InputAdornment> : undefined,
          endAdornment: props.endAdornment ? <InputAdornment position="end">{props.endAdornment}</InputAdornment> : undefined,
        }}
      />
    </div>
  );
}

interface IProps {
  label?: string;
  placeholder?: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  type?: HTMLInputTypeAttribute;
  name?: string;
  id?: string;
  required?: boolean;
  onChange?: any;
  onBlur?: any;
  errorMessage?: any;
  value?: any;
  disable?: boolean;
}

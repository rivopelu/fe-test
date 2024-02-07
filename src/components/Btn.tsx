import { Button } from '@mui/material';
import { ReactNode } from 'react';
import { ButtonVariant, ColorType } from '../model/type/FeatureType.ts';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

export function Btn(props: IProps) {
  return (
    <Button
      onClick={props.onClick}
      variant={props.variant || 'contained'}
      sx={{ borderRadius: 2, background: props.variant === 'outlined' ? 'white' : undefined, ...props.sx }}
      color={props.color}
      startIcon={props.startIcon}
      endIcon={props.endIcon}
    >
      {props.children}
    </Button>
  );
}

interface IProps {
  children: ReactNode | string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  color?: ColorType;
  variant?: ButtonVariant;
  onClick?: () => void;
  sx?: SxProps<Theme>;
}

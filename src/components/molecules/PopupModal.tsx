import { useTranslation } from 'react-i18next';
import { Backdrop, Box, Button, Fade, IconButton, Modal } from '@mui/material';
import { Close } from '@mui/icons-material';
import { ColorType } from '../../model/type/FeatureType.ts';
import { MainCard } from '../atoms/MainCard.tsx';

interface IProps {
  okLabel?: string;
  okButtonColor?: ColorType;
  cancelButtonColor?: ColorType;
  cancelLabel?: string;
  onClose?: () => void;
  onCancel?: () => void;
  isOpen: boolean;
  hiddenButton?: boolean;
  components?: any;
  children?: any;
  hiddenCloseButton?: boolean;
  singleButton?: boolean;

  widthFit?: boolean;
  onSubmit?: () => void;
  verticalBtn?: boolean;
}

export const PopupModal = (props: IProps) => {
  const { t } = useTranslation();
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.isOpen}
        onClose={props.onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.isOpen}>
          <Box sx={style}>
            <MainCard className={`${props.widthFit ? 'w-fit' : 'min-w-[642px]'} pt-7 ${props.verticalBtn ? 'min-w-[400px]' : ''}`}>
              <div className={'flex flex-col'} style={{ width: '100%' }}>
                {props.hiddenCloseButton !== false ||
                  (props.hiddenCloseButton !== undefined && (
                    <div className={'flex justify-end'}>
                      <IconButton component="label" onClick={props.onClose}>
                        <Close />
                      </IconButton>
                    </div>
                  ))}

                {props.components || props.children}
                {!props.hiddenButton && (
                  <div className={`flex justify-between  gap-3 mt-8 ${props.verticalBtn ? 'flex-col-reverse' : ''}`}>
                    {!props.singleButton && (
                      <Button
                        onClick={props.onCancel ?? props.onClose}
                        color={'inherit'}
                        classes={{ contained: 'border w-full uppercase' }}
                        variant={'contained'}
                      >
                        {props.cancelLabel ? props.cancelLabel : t('cancel').toUpperCase()}
                      </Button>
                    )}

                    <Button classes={{ contained: 'border w-full uppercase' }} variant={'contained'} type={'submit'} onClick={props.onSubmit}>
                      {props.okLabel ? props.okLabel : t('oke').toUpperCase()}
                    </Button>
                  </div>
                )}
              </div>
            </MainCard>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

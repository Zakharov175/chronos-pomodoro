import { ToastContentProps } from 'react-toastify';
import { DefaultButton } from '../DefaultButton';
import { ThumbsDown, ThumbsUpIcon } from 'lucide-react';

import styles from './styles.module.css';

export const Dialog = ({ closeToast, data }: ToastContentProps<string>) => {
  return (
    <>
      <div className={styles.container}>
        <p>{data}</p>
      </div>
      <div className={styles.buttonsContainer}>
        <DefaultButton
          onClick={() => closeToast(true)}
          icon={<ThumbsUpIcon />}
          aria-braillelabel='Confirmar ação e fechar'
          title='Confirmar ação e fechar'
        />
        <DefaultButton
          icon={<ThumbsDown />}
          onClick={() => closeToast(false)}
          color='red'
          arial-label='Cancelar ação e fechar'
          title='Cancelar ação e fechar'
        />
      </div>
    </>
  );
};

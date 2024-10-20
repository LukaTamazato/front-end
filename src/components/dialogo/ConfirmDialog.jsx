import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Botao from '../btn/Botao';

const ConfirmDialog = ({action, toggleDialog, open, content}) => {

  return (
    <>
      <Dialog
        open={open}
        onClose={toggleDialog}
      >
        <DialogTitle>
          {content.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {content.body}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Botao onClick={() => {action(), toggleDialog()}} txt="Confirmar"/>
          <Botao onClick={toggleDialog} variant='outlined' txt="Cancelar"/>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ConfirmDialog;
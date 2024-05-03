import "./DialogError.scss"
import { Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { PrimaryButton } from "../common/PrimaryButton/PrimaryButton"

interface DialogProps {
    title: string,
    description: string,
    isOpen: boolean,
    onClose: () => void
}

export const DialogError = ({
    title,
    description,
    isOpen,
    onClose
}: DialogProps) => {

    const handleConfirm = () => {
        
        onClose()
    }

    return (
        <Dialog open={isOpen} onClose={onClose} className="container-dialog">
            <DialogTitle className="dialog-text dialog-title">
                {title}
            </DialogTitle>

            <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[200],
                }}
            >
                <CloseIcon />
            </IconButton>
            
            <DialogContent className="dialog-content">
                <DialogContentText className="dialog-text dialog-textcontent">
                    {description}
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <PrimaryButton value="Aceptar" onClick={handleConfirm} disabled={false} />
            </DialogActions>
        </Dialog>
    )
}
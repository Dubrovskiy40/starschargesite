import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const styles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    height: '40%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: 'auto'
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const ModalWindow = ({ openModalWindow, setOpenModalWindow, title, children }) => {
    const handleClose = () => setOpenModalWindow(false);

    return (
        <div>
            <Modal
                open={openModalWindow}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styles}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {title}
                    </Typography>
                    <Typography id="modal-modal-text" variant="h6" component="div">
                        {children ? children : ''}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};

export default ModalWindow;
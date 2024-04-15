
import { useState } from 'react'
 
import { Modal, Box, Typography, Button } from '@mui/material'
import SignIn from './components/SignIn'
 
function SimpleModal() {
 
    const [ open, setOpen ] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
 
    const style = {
        width: '25rem',
        bgcolor: 'background.default',
        p: 2,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }
 
    return (
        <div>
            <Button variant='contained' onClick={handleOpen}>Open Modal</Button>
            <SignIn />

        </div>
    )
}
 
export default SimpleModal
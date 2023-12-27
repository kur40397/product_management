import React, { useState } from 'react'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import LockIcon from '@mui/icons-material/Lock';
import { Alert, Avatar, IconButton } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../database/firebaseAuth';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';
import toast, { Toaster } from 'react-hot-toast';




function Login() {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [open, setOpen] = React.useState(false);
    const history = useHistory();


    const handleInputChange = (e) => {
        const { id, value } = e.target;
        //target: represent DOM li kay trigerri levent
        // desctructing 
        if (id === "Email") {
            setEmail(value);
        }
        if (id === "Password") {
            setPassword(value);
        }
    }
    const handleToClose = (event, reason) => {
        // reason : kat3tik detail dual l'action 
        // wech click away: l'user click out of snackbar
        // action: user click f button
        // timeout : timout kml
        if ("clickaway" == reason) return;
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, Email, Password)
            // method kat5ali user iloga
            .then((userCredential) => {
                const user = userCredential.user
                //Swal objet dial alert
                // fire method li kataffichi lik l'alert
                Swal.fire({
                    title: "welcome!",
                    text: "you are connected!",
                    icon: "success"
                });
                history.replace("/Home")
            }).catch((error) => {

                //error.code kat3tik label dial lcode
                switch (error.code) {
                    case 'auth/invalid-credential':
                        toast.error('Sorry invalid credential !')
                        break
                    case 'auth/invalid-email':
                        toast.error('sorry invalid email')
                        break
                    case 'auth/operation-not-allowed':
                        toast.error('sorry invalid operation')
                        break
                    case 'auth/weak-password':
                        toast.error('Sorry weak password')
                        break
                }
            })
    }

    // snackbar: popup dynamic
    // Alert:popup static
    // drna Alert wast mn snackbar 7it Alert katholdi juste le message et snackbar kat7akm b opening and state
    // mnin katclicki 3la handleToClose rah automatiquement katclosi snack and alert
    return (
        <div>
            <Toaster
                position="bottom-left"
                reverseOrder={true}
            />

            <Box sx={{
                position: 'relative', top: 80, margin: 'auto', width: '500px'
            }}>
                <Avatar sx={{ bgcolor: 'primary.main', margin: 'auto' }}>
                    {/* margin auto : kaycentri horizntallement + 
                kaygol lgoogle 7sb 3al lisr and limn et centrih wast */}
                    <ExitToAppIcon />
                </Avatar>

                <form onSubmit={(e) => handleSubmit(e)}>

                    <TextField
                        label="Email"
                        id="Email"
                        variant="outlined"// katmanipuli l'apparence dialek
                        fullWidth
                        margin="normal"
                        onChange={(e) => handleInputChange(e)}
                    />
                    <TextField
                        label="Password"
                        id="Password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type='password'

                        onChange={(e) => handleInputChange(e)}
                    />

                    <Button
                        variant="contained" // ya3ni mnin kaklikou katchanga l'apparence
                        color="primary"
                        type="submit"
                        fullWidth
                    >
                        Submit
                    </Button>

                </form>

                <Typography variant="h6" component="div" align="center" sx={{ flexGrow: 2, margin: '7px' }}>
                    New to Product Manager ? <Link to="/Register">Create a new Account</Link>
                </Typography>
            </Box >
        </div >
    )
}

export default Login

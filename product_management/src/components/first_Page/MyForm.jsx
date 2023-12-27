import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Alert, Avatar } from '@mui/material';

import LockIcon from '@mui/icons-material/Lock';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../database/firebaseAuth';
import { useHistory } from 'react-router-dom';



function MyForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const history = useHistory();
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        //target: represent the event li kay trigerri levent
        // desctructing 
        if (id === "FirstName") {
            setFirstName(value);
        }
        if (id === "LastName") {
            setLastName(value);
        }
        if (id === "Email") {
            setEmail(value);
        }
        if (id === "Password") {
            setPassword(value);
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        // on créer l'utilisateur avec email et mot de passe
        await createUserWithEmailAndPassword(auth, Email, Password)
            // userCredential objet lih a5ir user li tkriya
            .then((userCredential) => {
                const user = userCredential.user;
                history.push("/Login")
            })
            .catch((error) => {
                const errorMessage = error.message;
                switch (error) {

                }


                console.log("first message" + errorMessage)
                console.log("second message " + error)
            })
    }
    return (
        <Box sx={{
            position: 'relative', top: 80
        }}>
            <Avatar sx={{ bgcolor: 'primary.main', margin: 'auto' }}>
                {/* margin auto : kaycentri horizntallement + 
                kaygol lgoogle 7sb 3al lisr and limn et centrih wast */}
                <LockIcon />
            </Avatar>
            <form onSubmit={(e) => handleSubmit(e)} >

                <Grid container spacing={2}>
                    <Grid item xs={6} >
                        <TextField
                            label="First Name"
                            id="FirstName"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            onChange={(e) => handleInputChange(e)}
                        // margin around the testfield
                        />
                    </Grid>
                    <Grid item xs={6}
                    // kat specifie ch7al mn column had Grid katchd 
                    >
                        <TextField
                            label="Last Name"
                            id="LastName"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            onChange={(e) => handleInputChange(e)}
                        />
                    </Grid>
                </Grid>
                <TextField
                    label="Email"
                    id="Email"
                    variant="outlined"
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
        </Box >
    );
}

export default MyForm;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { auth } from '../../database/firebaseAuth';
import { signOut } from "firebase/auth";
import Swal from 'sweetalert2';


export default function Navbar() {
    const history = useHistory();
    const location = useLocation();// les components kaydeclaraou f functional compo wla f hook
    // useHistory: hook kay3tik l'acces l'objet history bach tmanipuli 
    // la redirection dial les liens
    const handleLogout = () => {
        signOut(auth).then(
            () => {
                Swal.fire({
                    title: "Are you sure?",
                    text: "Are you sure you want to disconnect ?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Disconnected"
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: "your have been disconnected!",
                            icon: "success"
                        });
                        history.replace('/Login')
                    } else {
                        return;
                    }
                });
            }
        ).catch((error) => {
            console.log(error)
        })

    }
    const handleLink = () => {
        if (location.pathname === '/Login') {
            history.push('/Register');
        } else {
            history.push('/Login');
        }

    }
    return (
        <Box sx={{ flexGrow: 15 }}>
            <AppBar position="static"> {/*AppBar: la création du header */}
                <Toolbar>
                    {/* Toolbar: is often used to create a section where u can place buttons , icons and text */}
                    {/*Typography: component used to structure the texte in a consiste way */}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    {auth.currentUser &&
                        <> &#128075; , {auth.currentUser.email}
                            <Button color="inherit" onClick={handleLogout}>
                                Logout
                            </Button>
                        </>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    );
}
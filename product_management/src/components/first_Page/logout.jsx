import React from 'react'
import { auth } from '../../database/firebaseAuth';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
function logout() {
    const navigate = useNavigate();
    return (
        <div>

        </div>
    )
}

export default logout

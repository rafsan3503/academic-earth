import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => unsubscribe();
    },[])

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password
        );
    }

    const updateUserInfo = (fullName,url) => {
        return updateProfile(auth.currentUser, {
            displayName: fullName,photoURL: url
        })
    }

    const userLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const resetPassword = email => {
        return sendPasswordResetEmail(auth,email)
    }

    const authInfo = {
      user,
      createUser,
      updateUserInfo,
      userLogIn,
      resetPassword,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
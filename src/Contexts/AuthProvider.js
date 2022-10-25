import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, TwitterAuthProvider, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
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
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const resetPassword = email => {
        return sendPasswordResetEmail(auth,email)
    }

    const googleLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const twitterLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, twitterProvider);
    }


    const githubLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth,githubProvider)
    }
    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = {
      user,
      createUser,
      updateUserInfo,
      userLogIn,
      resetPassword,
      googleLogIn,
      logOut,
      twitterLogIn,
        githubLogIn,
      loading
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
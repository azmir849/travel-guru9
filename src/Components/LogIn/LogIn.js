import React, { useState } from 'react';
import './LogIn.css'
import LogInBgImg from '../../Image/Rectangle 1.png'
import Header from '../Header/Header';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
firebase.initializeApp(firebaseConfig);

const LogIn = () => {
    const [user ,setUser] = useState({
        isSignedIn:false,
        name:''
    })
    const provider = new firebase.auth.GoogleAuthProvider();
    const HandleGoogleLogIn =() =>{
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            const{displayName} = res.user;
            const gmailUser = {
                isSignedIn:true,
                name:displayName
            }
            setUser(gmailUser);
            // console.log(displayName);
          }).catch(error => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    return (
        <div>
          <img className="LogInBgImg" src={LogInBgImg} alt=""/>
          <Header></Header>
          <button onClick={HandleGoogleLogIn}>Continue with Google</button>{
              user.isSignedIn && <div> <p>{user.name}</p></div>
          }
        </div>
    );
};

export default LogIn;
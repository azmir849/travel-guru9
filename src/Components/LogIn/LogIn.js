import React, { useState } from 'react';
import './LogIn.css'
import LogInBgImg from '../../Image/Rectangle 1.png'
import Header from '../Header/Header';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
firebase.initializeApp(firebaseConfig);

const LogIn = () => {
    const[newUser,setNewUser] =useState(false);
    const [user ,setUser] = useState({
        isSignedIn:false,
        newUser:false,
        name:'',
        email:'',
        password:'',
        error:''
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

    const handleBlur =(event) =>{
        let isFieldValid = true;
       if(event.target.name==='email'){
        isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
       }
       if(event.target.name ==='password'){
        const isPasswordValid = event.target.value.length > 6;
        const isPassNumber = /\d{1}/.test(event.target.value);
        isFieldValid = isPasswordValid && isPassNumber;
       }
       if(isFieldValid){
           const newUserInfo ={...user};
           newUserInfo[event.target.name] = event.target.value;
           setUser(newUserInfo);
       }

    }
    const handleSubmit =(e) =>{
        if(newUser && user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then( res =>{
                const newUserInfo = {...user};
                newUserInfo.error = '';
                setUser(newUserInfo);
            })
            .catch(error =>{
                // Handle Errors here.
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                var errorCode = error.code;
                var errorMessage = error.message;
                setUser(newUserInfo);
                // ...
              });
        }
        if(!newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res =>{
                console.log("sign In successfully");
            })
            .catch(function(error) {
                // Handle Errors here.
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                var errorCode = error.code;
                var errorMessage = error.message;
                setUser(newUserInfo);
                // ...
              });
        }
        e.preventDefault();
    }
    return (
        <div>
            <img className="LogInBgImg" src={LogInBgImg} alt=""/>
            <Header></Header>
          
          <div>
              <h1>LogIn Page</h1>
              <input type="checkbox" onChange={()=> setNewUser(!newUser)}  name="newUser" id=""/>
              <label htmlFor="newUser">Register Now</label>
              <form onSubmit={handleSubmit}>
                {newUser && <input type="text" onBlur={handleBlur} name="name" id="" placeholder="Name"/>}<br/>
                <input type="text" onBlur={handleBlur} name="email" id="" placeholder="Email address" required/><br/>
                <input type="password" onBlur={handleBlur} name="password" id="" placeholder="Password" required/><br/>
                <input type="submit" value="Submit Now"/>
              </form>
             <p style={{color:'red'}}>{user.error}</p>
            </div>
            <button onClick={HandleGoogleLogIn}>Continue with Google</button>{
            user.isSignedIn && <div> <p>{user.name}</p></div>
          }
        </div>
    );
};

export default LogIn;
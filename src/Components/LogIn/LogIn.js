import React, { useContext, useState } from 'react';
import './LogIn.css'
import LogInBgImg from '../../Image/Rectangle 1.png'
import Header from '../Header/Header';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
firebase.initializeApp(firebaseConfig);

const LogIn = () => {
    const[newUser,setNewUser] =useState(false);
    const history =useHistory();
    const [user ,setUser] = useState({
        isSignedIn:false,
        newUser:false,
        name:'',
        email:'',
        password:'',
        error:''
    });

    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    
    const provider = new firebase.auth.GoogleAuthProvider();
    const FBprovider = new firebase.auth.FacebookAuthProvider();
    const HandleGoogleLogIn =() =>{
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            const{displayName} = res.user;
            const gmailUser = {
                isSignedIn:true,
                name:displayName
            }
            setUser(gmailUser);
            setLoggedInUser(gmailUser);
            history.push('/search');
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
    
    const handleFbSignIn = () =>{
        firebase.auth().signInWithPopup(FBprovider)
        .then(function(result) {
            const{displayName} = result.user;
            const fbUser = {
                isSignedIn:true,
                name:displayName
            }
            setUser(fbUser);
            setLoggedInUser(fbUser);
            history.push('/search');
            // ...
          }).catch(function(error) {
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
                window.alert("Create account suuccessfully.Uncheck toggle to LogIn");
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
                const newUserInfo = {...user};
                newUserInfo.error = '';
                setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
               history.push('/search');
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
          
          <div className="form">
              <h1>LogIn/Create new account</h1>
              <input className="checkbox" type="checkbox" onChange={()=> setNewUser(!newUser)}  name="newUser" id=""/>
              <label htmlFor="newUser">Create new account</label>
              <form onSubmit={handleSubmit}>
                {newUser && <input className="input-teaxt-area" type="text" onBlur={handleBlur} name="name" id="" placeholder="First Name"/>}<br/>
                {newUser && <input className="input-teaxt-area" type="text" onBlur={handleBlur} name="last-name" id="" placeholder="Last Name"/>}<br/>
                <input className="input-teaxt-area" type="text" onBlur={handleBlur} name="email" id="" placeholder="Email address" required/><br/>
                <input className="input-teaxt-area" type="password" onBlur={handleBlur} name="password" id="" placeholder="Password" required/><br/>
                {newUser &&<input className="input-teaxt-area" type="confirm-password" onBlur={handleBlur} name="confirm-password" id="" placeholder="Confirm Password" required/>}<br/>
                <input className="submit-btn" type="submit" value={newUser ? 'Create an account' : 'LogIn'}/>
              </form>
             <p style={{color:'red'}}>{user.error}</p>
             <h6 className="d-flex justify-content-center">Or</h6>
             <button className="google-btn" onClick={HandleGoogleLogIn}>Continue with Google</button>
            <button className="facebook-btn" onClick={handleFbSignIn}>Continue with Facebook</button>
            </div>
            
        </div>
    );
};

export default LogIn;
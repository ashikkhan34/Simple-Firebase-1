import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../Firebase/Firebase.init";
import { useState } from "react";

const Login = () => {

    //display user information 
    const [user,setUser] = useState(null)
    const provider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider()

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth,provider)
        .then( (result)=>{
            console.log(result)
            setUser(result.user)
        })
        .catch(error => {
            console.log('Error',error)
            setUser(null)
        });
    }
// account sign out 
    const handleSingOut = () =>{
        signOut(auth)
        .then(()=>{
            console.log('sing out done')
            setUser(null)
        })
        .catch(error => console.log(error))
    }

    //create github account
    const handleGithubSignIn = () =>{
        signInWithPopup(auth,gitHubProvider)
        .then(result =>{
            console.log(result.user)
            setUser(result.user)
        })
        .catch(error => console.log('error',error))

    }
    return (
        <div>
            {/* <button onClick={handleGoogleSignIn}>Login with Google</button>
            <button onClick={handleSingOut}>Sign Out</button> */}
            {
                user ?
                <button onClick={handleSingOut}>Sign Out</button>
                :
                <div>
                    <button onClick={handleGoogleSignIn}>Login with Google</button>
                    <button onClick={handleGithubSignIn}>Login with github</button>
                </div>

            }

            {
                user && <div>
                    <h4>{user.displayName}</h4>
                    <p>{user.email}</p>
                    <img src={user.photoURL} alt="ashik" />
                </div>
            }
        </div>
    );
};

export default Login;
import { useEffect, useState } from "react"
import { GoogleAuthProvider, signInWithEmailAndPassword , getAuth , signInWithPopup,onAuthStateChanged, signOut} from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [])



    return {
        user,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;
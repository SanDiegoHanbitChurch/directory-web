import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import firebaseApp from '../firebase';

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

const login = async () => {
    let currentUser = auth.currentUser;
    if (currentUser) {
        return currentUser;
    }

    try {
        const result = await signInWithPopup(auth, provider);
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // The signed-in user info.
        console.log('result.user', result.user);
        const { displayName, email, accessToken } = result.user;

        return { displayName, email, accessToken };
    } catch (error) {
        // // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);

        throw error;
    }
}

const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error(error);
    }
};

export {
    login,
    logout
}

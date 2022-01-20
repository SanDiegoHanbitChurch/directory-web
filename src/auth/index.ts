/* eslint-disable no-console */
/* eslint-disable no-return-await */
/* eslint-disable no-useless-catch */
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  User as GoogleUser,
} from "firebase/auth";
import firebaseApp from "../firebase";
import { User } from "../types";

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

async function getUser(googleUser: GoogleUser) {
  const { displayName, email, photoURL } = googleUser;
  const accessToken = await googleUser.getIdToken();

  return {
    displayName,
    email,
    photoURL,
    accessToken,
  };
}

const login = async (): Promise<User> => {
  const googleUser = auth.currentUser;
  if (googleUser) {
    return await getUser(googleUser);
  }

  try {
    const result = await signInWithPopup(auth, provider);
    // The signed-in user info.
    return await getUser(result.user);
  } catch (error) {
    throw error;
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
  }
};

export { login, logout };

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCMpSrH2OZZJ0kBDw0S_WafKyNsEvUNmJM',
  authDomain: 'udemy-react-clothes.firebaseapp.com',
  projectId: 'udemy-react-clothes',
  storageBucket: 'udemy-react-clothes.appspot.com',
  messagingSenderId: '1086746902973',
  appId: '1:1086746902973:web:91281aa76ce104f55912d4',
};

const firebaseApp = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});
export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userAuth);
  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot);
  // console.log(userSnapshot.exists());

  if(!userSnapshot.exists()){
    const {displayName,email} = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef,{
        displayName,email,createdAt
      })
    } catch (error) {
      console.log(error);
    }
  }
return userDocRef
};

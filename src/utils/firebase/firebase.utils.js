import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import {getFirestore ,doc,setDoc,getDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCMpSrH2OZZJ0kBDw0S_WafKyNsEvUNmJM',
  authDomain: 'udemy-react-clothes.firebaseapp.com',
  projectId: 'udemy-react-clothes',
  storageBucket: 'udemy-react-clothes.appspot.com',
  messagingSenderId: '1086746902973',
  appId: '1:1086746902973:web:91281aa76ce104f55912d4',
};

const firebaseApp = initializeApp(firebaseConfig);

export const provider =new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:'select_account'
})
export const auth= getAuth()

export const signInWithGooglePopup= ()=>signInWithPopup(auth,provider)

export const db = getFirestore()

// import { useEffect } from 'react';
import SignUpForm from '../../components/sign-up/SignUpForm';
import {
  // auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
} from '../../utils/firebase/firebase.utils';
// import { getRedirectResult } from 'firebase/auth';

const SignIn = () => {
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await getRedirectResult(auth);
  //     if(response){
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   }
  //   fetchData();
  // }, []);
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={logGoogleUser}>click</button>

      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>click Redirect</button> */}
    </div>
  );
};

export default SignIn;

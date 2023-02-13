// import { useEffect } from 'react';
import SignInForm from '../../components/sign-in/SignInForm';
import SignUpForm from '../../components/sign-up/SignUpForm';
import './authentication.styles.scss'
import // auth,
// createUserDocumentFromAuth,
// signInWithGooglePopup,
// signInWithGoogleRedirect,
'../../utils/firebase/firebase.utils';
// import { getRedirectResult } from 'firebase/auth';

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;

// import { useEffect } from 'react';
import SignInForm from '../../components/sign-in/SignInForm';
import SignUpForm from '../../components/sign-up/SignUpForm';
import // auth,
// createUserDocumentFromAuth,
// signInWithGooglePopup,
// signInWithGoogleRedirect,
'../../utils/firebase/firebase.utils';
import { AuthenticationContainer } from './authentication.styles';
// import { getRedirectResult } from 'firebase/auth';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;

import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logGooglrUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={logGooglrUser}>click</button>
    </div>
  );
};

export default SignIn;

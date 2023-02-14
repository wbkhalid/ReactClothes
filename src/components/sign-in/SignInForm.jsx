import { useState } from 'react';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import Button from '../button/Button';
import FormInputs from '../form-inputs/FormInputs';
import './signIn.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFiels] = useState(defaultFormFields);
  const { email, password } = formFields;

  const reSetFormFiels = () => {
    setFormFiels(defaultFormFields);
  };

  const SignInWithGoogle = async () => {
   await signInWithGooglePopup();
    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFiels({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      // setCurrentUser(user)
    } catch (error) {
      console.error(error);
    }
    reSetFormFiels();
  };
  return (
    <div className="sign-in-container">
      <h3>I have an account</h3>
      <form onSubmit={handleSubmit}>
        <FormInputs
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInputs
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={SignInWithGoogle}>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;

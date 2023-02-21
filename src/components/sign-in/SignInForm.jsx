import { useState } from 'react';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import Button,{BUTTON_TYPE_CLASS
} from '../button/Button';
import FormInputs from '../form-inputs/FormInputs';
import { ButtonContainer, SignInContainer } from './signIn.styles';


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
    <SignInContainer>
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
        <ButtonContainer>
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASS.google} onClick={SignInWithGoogle}>
            Sign In With Google
          </Button>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;

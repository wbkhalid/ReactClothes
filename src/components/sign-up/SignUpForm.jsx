import { useState } from 'react';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import Button from '../button/Button';
import FormInputs from '../form-inputs/FormInputs';
import './signUp.styles.jsx';
import { SignUpContainer } from './signUp.styles.jsx';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFiels] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const reSetFormFiels = () => {
    setFormFiels(defaultFormFields);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFiels({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email already exists');
      } else {
        console.error(error);
      }
    }
    reSetFormFiels();
  };
  return (
    <SignUpContainer>
      <h3>I do not have an Account</h3>
      <span>Sign Up with Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInputs
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInputs
          label="confirmPassword"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;

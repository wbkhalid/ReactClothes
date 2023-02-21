import './forminputs.styles.jsx';
import { FormInputLabel, Group, Input } from './forminputs.styles.jsx';

const FormInputs = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInputs;

import PropTypes from 'prop-types';
import Input from '@mui/joy/Input';

function InputComponent({placeholder}) {
  return (
    <div className= "InputContainer">
  <Input placeholder={placeholder}  variant="outlined"  sx={{ borderRadius:4}} />
</div>)
}

InputComponent.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default InputComponent;

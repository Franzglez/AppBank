import Input from '@mui/joy/Input';

function InputComponent({placeholder}) {
  return (
    <div class= "InputContainer">
  <Input placeholder={placeholder}  variant="outlined"  sx={{ borderRadius:4}} />
</div>)
}

export default InputComponent;

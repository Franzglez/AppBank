
import Input from '@mui/joy/Input';

function InputComponent({placeholder,onChange,type,value,name}) {

  return (
    <div className= "InputContainer">
  <Input onChange={onChange} value={value} name={name} type={type} placeholder={placeholder}  variant="outlined"  sx={{ borderRadius:4}} />
</div>)
}



export default InputComponent;

import "../App.css";
import { useState } from "react";
import InputComponent from "./Input";
import ButtonComponent from "./Button";
import H2 from "./H2";
import Logo from "./Logo";
import axios from "axios";

function Singup() {
  const [formData, setFormData] = useState({
    firstName: "",

    secondName: "",

    username: "",

    password: "",

    confirmPassword: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:9500/user", formData)

      .then((response) => {
        console.log(response.data); // Respuesta del servidor

        // Puedes realizar acciones adicionales después de agregar el usuario
      })

      .catch((error) => {
        console.error(error);

        // Manejar errores de manera adecuada
      });
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <Logo />
        <H2 />
        <InputComponent
          type="text"
          name="First Name"
          value={formData.firstName}
          onChange={(event) =>
            setFormData({ ...formData, name: event.target.value })
          }
          placeholder="First Name*"
        ></InputComponent>

        
        <InputComponent
          type="text"
          name="Last Name"
          value={formData.secondName}
          onChange={(event) =>
            setFormData({ ...formData, name: event.target.value })
          }
          placeholder="Last Name*"
        ></InputComponent>

        

        <InputComponent
          type="text"
          name="Username"
          value={formData.username}
          onChange={(event) =>
            setFormData({ ...formData, name: event.target.value })
          }
          placeholder="Username"
        ></InputComponent>

        
        <InputComponent
          type="text"
          name="Password"
          value={formData.password}
          onChange={(event) =>
            setFormData({ ...formData, name: event.target.value })
          }
          placeholder="Password*"
        ></InputComponent>

        

        <InputComponent
          type="text"
          name="Confirm Password"
          value={formData.confirmPassword}
          onChange={(event) =>
            setFormData({ ...formData, name: event.target.value })
          }
          placeholder="Confirm Password*"
        ></InputComponent>

        
        <ButtonComponent type="submit">SING UP</ButtonComponent>
      </form>
    </>
  );
  
}


export default Singup;

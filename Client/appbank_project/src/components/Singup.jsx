import "../App.css";
import { useState } from "react";
import InputComponent from "./Input";
import Button from "./Button";
import H2 from "./H2";
import Logo from "./Logo";
import axios from "axios";
import SideBar from "./Sidebar";

function Signup() {
  const handleClick = () => {};
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [mostrarComponenteB, setMostrarComponenteB] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // axios
    //   .post("http://localhost:9500/user", formData)
    //   .then((response) => {
    //     console.log(response.data); // Respuesta del servidor
    //     // Puedes realizar acciones adicionales después de agregar el usuario

      setMostrarComponenteB(true); // Mostrar el componente SideBar después de realizar la solicitud POST correctamente
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     // Manejar errores de manera adecuada
    //   });
  };

  return (
    <div>
      {!mostrarComponenteB ? (
        <form className="form-container" onSubmit={handleSubmit}>
          <Logo />
          <H2 />
          <InputComponent
            type="text"
            name="First Name"
            value={formData.firstName}
            onChange={(event) =>
              setFormData({ ...formData, firstName: event.target.value })
            }
            placeholder="First Name*"
          />

          <InputComponent
            type="text"
            name="Last Name"
            value={formData.secondName}
            onChange={(event) =>
              setFormData({ ...formData, secondName: event.target.value })
            }
            placeholder="Last Name*"
          />

          <InputComponent
            type="text"
            name="Username"
            value={formData.username}
            onChange={(event) =>
              setFormData({ ...formData, username: event.target.value })
            }
            placeholder="Username"
          />

          <InputComponent
            type="text"
            name="Password"
            value={formData.password}
            onChange={(event) =>
              setFormData({ ...formData, password: event.target.value })
            }
            placeholder="Password*"
          />

          <InputComponent
            type="text"
            name="Confirm Password"
            value={formData.confirmPassword}
            onChange={(event) =>
              setFormData({ ...formData, confirmPassword: event.target.value })
            }
            placeholder="Confirm Password*"
          />

          <Button
            text="SIGN UP"
            onClick={handleClick}
            color="white"
            width="300px"
            height="30px"
            border="none"
            fontsize="50px"
            borderRadius={2}
            backgroundColor="#1976D2"
          />
        </form>
      ) : (
        <SideBar formData={formData} />
      )}
    </div>
  );
}

export default Signup;

import Input from "./Input";
import img2 from "../assets/img2.png";
import Button from "./Button";
import Card from "./Card";

function UserSetting() {
  const handleClick = () => {};
  const styleForm = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: "20px",
    margin: "30px 35px 0px 1px",
  };
  return (
    <>
     <Card
  display="flex"
  width="800px"
  gap="10px"
  boxShadow= "0px 2px 4px rgba(0, 0, 0, 0.2)"
  background="linear-gradient(180deg, rgba(255, 255, 255, 1)"
  backgroundSize="cover"
  backgroundPosition="center"
>
  <div style={{ margin: '10px' }}>
    <img
      src={img2}
      width="300px"
      height="100%"
      alt="user settings"
    />
  </div>

  <div className="info" style={styleForm}>
    <Input />
    <Input />
    <Input />
    <Input />
    <Button
      text="SAVE"
      onClick={handleClick}
      color="white"
      backgroundColor="#1976d2"
      width="75px"
      height="30px"
      border="none"
      fontsize="50px"
      borderRadius={2}
    />
  </div>
</Card>

    </>
  );
}

export default UserSetting;

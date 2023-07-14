import Input from "./Input";
// import img2 from "../assets/img2.png";
import Button from "./Button";

function UserSetting() {
  const handleClick = () => {};
  return (
    <>
      <div className="imagen">
        {/* <img src={img2} alt="user settings" /> */}
      </div>
      <div className="info">
        <Input />
        <Input />
        <Input />
        <Input />
        <Button
          text="SAVE"
          onClick={handleClick}
          color="#096BDE"
          width="75px"
          height="30px"
          border="none"
          fontsize="50px"
          borderRadius={2}
        />
      </div>
    </>
  );
}

export default UserSetting;


import AvatarLogo from "./AvatarLogo";
function DivLogoInfo(props) {
  const style = {
    div: {  display: "flex" ,
             justifyContent: "space-between",
            padding: "20px"}
  };

  const {formData} = props;
  return (
    <div style={style.div}>
      <AvatarLogo/>
     <div>
     <p>{formData.firstName}</p>
      <p>{formData.secondName}</p>
     </div>
    </div>
  );
}

export default DivLogoInfo;

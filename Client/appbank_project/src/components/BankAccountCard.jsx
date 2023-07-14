import Button from "./Button";
function BankAccountCard() {
  const style = {
    button : {
        display:'flex',
        justifyContent: 'space-between',
        padding: '20px',
        width: "500px",
        height: "100px",
        backgroundColor: "white",
        borderRadius: "5px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
        transition: "box-shadow 0.3s ease-in-out"
      },

      divButton:{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }
  } ;
  return (
    <div style={style.button}>
      BankAccountCard
      <div style={style.divButton}>
        <Button
          text="CREATE"
          color="white"
          width="100px"
          height="30px"
          border="none"
          fontsize="50px"
          borderRadius={2}
         
          backgroundColor="#1976D2"
          
        ></Button>
        <Button
          text="DELETE"
          color="black"
          fontColor="black"
          width="100px"
          height="30px"
          boxShadow= "0px 2px 4px rgba(0, 0, 0, 0.5)"
          fontsize="50px"
          borderRadius={2}
          border="none"
        ></Button>
      </div>
    </div>
  );
}

export default BankAccountCard;

import SignupForm from "../../components/Auth/SignUpForm";
import logo from "../../assets/final.png";


function Signup() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
     
      {/* LEFT SECTION (WHITE - LOGO + SLOGAN) */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px",
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{ width: "450px", marginBottom: "10px" }}
        />


       


       
      </div>


      {/* RIGHT SECTION (BLUE - FORM) */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#0B3954",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SignupForm />
      </div>
    </div>
  );
}


export default Signup;

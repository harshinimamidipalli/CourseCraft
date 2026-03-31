import SigninForm from "../../components/Auth/SignInForm";
import logo from "../../assets/final.png";
import "../../index.css";


function Signin() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
     
      {/* LEFT SECTION (FORM) */}
<div
  style={{
    flex: 1,
    backgroundColor: "#ffffff",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  {/* 🔥 LOGO TOP LEFT (LEFT SECTION) */}
  <div style={{ position: "absolute", top: "20px", left: "20px" }}>
    <img src={logo} alt="logo" style={{ width: "100px" }} />
  </div>


  {/* FORM CENTER */}
  <SigninForm />
</div>


      {/* RIGHT SECTION */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#0B3954",
          color: "white",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* CENTER CONTENT */}
        <div style={{ textAlign: "center", width: "500px" }}>
          <h1 style={{ marginBottom: "20px" }}>
            Learn Smarter with CourseCraft
          </h1>


          {/* SCROLLING FEATURES */}
          <div className="feature-container">
            <div className="feature-slider">
              <div className="feature-card"> Best Video Recommendation</div>
              <div className="feature-card"> AI Generated Notes</div>
              <div className="feature-card"> Smart Quiz System</div>
              <div className="feature-card"> Revision Scheduler</div>


              {/* duplicate for smooth loop */}
              <div className="feature-card"> Best Video Recommendation</div>
              <div className="feature-card"> AI Generated Notes</div>
              <div className="feature-card"> Smart Quiz System</div>
              <div className="feature-card"> Revision Scheduler</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Signin;

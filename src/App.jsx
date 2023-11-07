import { Outlet } from "react-router";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div>Nav bar</div>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center",}}>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>{" "}
        </div>
        <div>
          <Link to="/contact">Contact</Link>{" "}
        </div>
        <div>
          <Link to="/github" >Github</Link>
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default App;

import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { UserProvider, useUser } from "./lib/context/user";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./sass/nav.scss";

function App() {
  const isLoginPage = window.location.pathname === "/login";

  return (
    <div>
      <UserProvider>
        <Navbar /> {/* Add the navbar before page content */}
        <main>{isLoginPage ? <Login /> : <Home />}</main>
      </UserProvider>
    </div>
  );
}

function Navbar() {
  const user = useUser();

  return (

    <nav className="flex justify-between">

      <a href="/">Codindev / Quick blog</a>

      <div className="user">

        {user.current ? (

          <>
            
            <span className="currentemail"> <small>{user.current.labels}</small> <AccountCircleIcon/> {user.current.email}</span>

            <button type="button" onClick={() => user.logout()}>
              Logout
            </button>

          </>

        ) : (

          <a href="/login">Login</a>

        )}

      </div>{/* .user */}
      
    </nav>
  );
}

export default App;
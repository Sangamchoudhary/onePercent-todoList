import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { isUserLoggedIn } from "../../userLoggedIn";
import "./Header.css";

export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      if (response.ok) {
        response.json().then((userInfo) => {
          setUserInfo(userInfo);
        });
      }
    });
  }, []);

  async function logout() {
    await fetch("http://localhost:4000/api/user/logout", {
      credentials: "include",
      method: "GET",
    });
    setUserInfo(null);
    window.location.reload();
  }

  return (
    <header>
      <Link to="/" className="Logo">
        1% CLUB - TODIST
      </Link>
      <nav>
        {isUserLoggedIn() && (
          <>
            <Link to="/">
              <button class="logoutButton" onClick={logout}>
                Logout
              </button>
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}

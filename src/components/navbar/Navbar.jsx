import { useState } from "react";
import "./navbar.scss";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    
    <nav>
      <div className="left">
        <a href="" className="logo">
          <img src="/logo.png" alt="logo" />
          <span>ELMJACK</span>
        </a>
        <a href="/">Inicio</a>
        <a href="/">Nosotros</a>
        <a href="/">Contacto</a>
        <a href="/">Agentes</a>
      </div>
      <div className="right">
        <a href="/" className="login">Log in</a>
        <a href="/" className="register">
          Sign in
        </a>
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Inicio</a>
          <a href="/">Nosotros</a>
          <a href="/">Contacto</a>
          <a href="/">Agentes</a>
          <a href="/">Log in</a>
          <a href="/">Registrarse</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

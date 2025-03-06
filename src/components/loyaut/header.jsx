import React, {useState} from 'react';

export default function Header() {

  const [isClick, setClick] = useState(false)


  const burgerIsOpen = isClick ? 'burger-panel open' : 'burger-panel';
    const burgerIcon = isClick ? '../images/burger-click.svg' : '../images/burger-btn.svg';

  return (
    <>
     <header>
      <div className="container">
        <div className="header-wrapper">
            <a href="">
              <picture>
                  <source media="(max-width: 991px)" srcSet="../images/logo-mob.svg" />
                  <img src="../images/logo.svg" alt="logo" />
              </picture>
            </a>
            <nav>
              <ul className="header-menu">
                <li><a href="">Our products</a></li>
                <li><a href="">Commission</a></li>
                <li><a href="">Benefits</a></li>
                <li><a href="">FAQ</a></li>
                <li><a href="">Contacts</a></li>
              </ul>
            </nav>
            <div className="header-links">
              <a href="" className="header-links-link login-btn">Log in</a>
              <a href="" className="header-links-link registration-btn">Registration</a>
            </div>
            <button className="burger-btn" onClick={() => setClick(!isClick)}>
              <img src={burgerIcon} alt="burger-button" />
            </button>
          </div>
        </div>
     </header>
    <div className={burgerIsOpen}>
        <div className="burger-content">
          <ul>
            <li><a href="">Our products</a></li>
            <li><a href="">Commission</a></li>
            <li><a href="">Benefits</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">Contacts</a></li>
          </ul>
          <div className="burger-links">
            <a href="" className="header-links-link login-btn">Log in</a>
            <a href="" className="header-links-link registration-btn">Registration</a>
          </div>
        </div>
     </div>
    </>
  );
}
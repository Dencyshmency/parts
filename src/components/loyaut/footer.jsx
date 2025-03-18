
export default function Footer() {
  return (
    <>
     <footer>
      <div className="container">
        <div className="footer-wrapper">
            <a href="">
              <picture>
                  <source media="(max-width: 768px)" srcSet="../images/logo-f-m.svg" />
                  <img src="../images/logo.svg" alt="logo" />
              </picture>
            </a>
            <nav>
              <ul className="header-menu footer-menu">
                <li><a href="">Our products</a></li>
                <li><a href="">Commission</a></li>
                <li><a href="">Benefits</a></li>
                <li><a href="">FAQ</a></li>
                <li><a href="">Contacts</a></li>
              </ul>
            </nav>
            <div className="header-links footer-links">
              <a href="" className="header-links-link login-btn">Log in</a>
              <a href="" className="header-links-link registration-btn">Registration</a>
            </div>
          </div>
          <div className="under-footer-items">
            <a href="/privat-policy/" target="_blank">Privacy Police</a>
            <a href="/traffics-guidelines/" target="_blank">Traffic Guidelines for XADS Ad Network</a>
          </div>
        </div>
     </footer>
    </>
  );
}

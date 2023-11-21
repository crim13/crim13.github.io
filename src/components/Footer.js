export default function Footer() {
  return (
    <>
      <div className="contact section">
        <div className="section-header">
          <h2 className="section-title">./myInfo</h2>
        </div>
        <div className="contact-info">
          <a
            className="contact-link mail"
            href="mailto:morosanu.cristian98@gmail.com"
          >
            Mail
            <span className="contact-value">morosanu.cristian98@gmail.com</span>
          </a>
          <a
            className="contact-link linkedin"
            href="https://www.linkedin.com/in/cristian-morosanu-434aa1106"
            target="blank"
          >
            LinkedIn
            <span className="contact-value">https://linkedIn.com/Cristian</span>
          </a>
          <a
            className="contact-link github"
            href="https://crim13.github.io/"
            target="blank"
          >
            GitHub
            <span className="contact-value">https://crim13.github.io/</span>
          </a>
        </div>
      </div>
      <div className="section copyright-footer">
        <p>
          Created with yarn create-react-app by
          <span className="gold">:Crim</span> © 2023
        </p>
      </div>
    </>
  );
}

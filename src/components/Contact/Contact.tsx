import "../../styles/components/_contact.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Contact = () => {
  return (
    <section className="contact">
      <h2>Contato</h2>

      <div className="contact-card">
        <form action="mailto:seuemail@email.com" method="POST" encType="text/plain">
          <input type="text" name="name" placeholder="Seu nome" required />
          <input type="email" name="email" placeholder="Seu email" required />
          <textarea name="message" rows={5} placeholder="Sua mensagem" required />
          <button type="submit">Enviar mensagem</button>
        </form>
      </div>

      <p className="contact-alt">ou me encontre em:</p>

      <div className="contact-social">
        <a
          href="https://www.linkedin.com/in/brunosilvadealmeida/"
          target="_blank"
          rel="noreferrer"
          className="social-btn"
        >
          <FaLinkedin />
          LinkedIn
        </a>

        <a
          href="https://github.com/brunosilvade"
          target="_blank"
          rel="noreferrer"
          className="social-btn"
        >
          <FaGithub />
          GitHub
        </a>
      </div>
    </section>
  );
};
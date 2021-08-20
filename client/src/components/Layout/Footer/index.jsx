import './style.css';

const Footer = () => {
  return (
    <footer className="general_footer">
      <span className="copyright">OK GO, {new Date().getFullYear()}. by Ars</span>
      <ul>
        <li className="footer_link">
          <a href="https://vk.com/ratatatata1989" target="_blank" rel="noopener noreferrer">My BK</a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer;

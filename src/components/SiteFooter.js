import { Link } from "react-router-dom"
import "../styles/components/SiteFooter.css"

const SiteFooter = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-title">K.O.D.</h3>
            <p className="footer-description">Пространство для творчества, развлечений и незабываемых впечатлений</p>
            <div className="footer-social">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="icon-instagram"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="icon-facebook"></i>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Контакты</h3>
            <div className="contact-list">
              <div className="contact-item">
                <i className="icon-phone"></i>
                <a href="tel:+71234567890" className="contact-link">
                  +7 (123) 456-7890
                </a>
              </div>
              <div className="contact-item">
                <i className="icon-mail"></i>
                <a href="mailto:info@kod.ru" className="contact-link">
                  info@kod.ru
                </a>
              </div>
              <div className="contact-item">
                <i className="icon-map"></i>
                <span className="contact-text">г. Москва, ул. Примерная, д. 123</span>
              </div>
            </div>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Навигация</h3>
            <nav className="footer-nav">
              <Link to="/" className="footer-link">
                О нас
              </Link>
              <Link to="/personal-parties" className="footer-link">
                Персональные вечеринки
              </Link>
              <Link to="/open-parties" className="footer-link">
                Открытые вечеринки
              </Link>
              <Link to="/kids-games" className="footer-link">
                Игры для детей
              </Link>
              <Link to="/adult-games" className="footer-link">
                Игры для взрослых
              </Link>
            </nav>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">© {new Date().getFullYear()} K.O.D. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter


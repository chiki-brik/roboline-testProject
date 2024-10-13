import TelegramIconSrc from './../../resources/img/telegram_white.png';
import GithubIconSrc from './../../resources/img/github_white.png';
import './footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer">
                    <div className="footer-autor">
                        Тестовое задание выполина Федюшина Алина
                    </div>
                    <div className="footer-website">
                        <a href="https://webdev-fedalv.ru/" >Сайт-портфолио</a>
                    </div>
                    <div className="footer-networks">
                        <div className="footer-networks__telegram">
                            <a href="https://t.me/awvsvs">
                                <img src={TelegramIconSrc} alt="telegram" />
                            </a>
                        </div>

                        <div className="footer-networks__github">
                            <a href="https://github.com/chiki-brik">
                                <img src={GithubIconSrc} alt="github" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
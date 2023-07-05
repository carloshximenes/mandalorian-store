import MandalorianLogo from '../../assets/images/mandalorian.svg';
import './Header.scss';

function Header() {
	return (
		<header className="header">
			<img className="header__logo"src={MandalorianLogo} />
			<span className="header__title">Mandalorian Store</span>
			<img className="header__logo"src={MandalorianLogo} />
		</header>
	);
}

export default Header;

import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<nav>
			<Link activeClassName={style.active} href="/">Me</Link>
			<Link activeClassName={style.active} href="/profile">Work</Link>
			<Link activeClassName={style.active} href="/profile/john">Contact</Link>
		</nav>
	</header>
);

export default Header;

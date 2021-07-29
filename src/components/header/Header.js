function Header() {
	return (
		<>
			<header className="banner">
				<div className="banner__contents">
					<h1 className="banner__title">The Witcher</h1>
					<div className="banner__buttons">
						<button className="banner__button">Play</button>
						<button className="banner__button">My List</button>
					</div>
					<h1 className="banner__description">
						The witcher Geralt, a mutated monster hunter, struggles to find his
						place in a world in which people often prove more wicked than
						beasts.
					</h1>
				</div>
				<div className="banner--fadeBottom"></div>
			</header>
		</>
	);
}

export default Header;

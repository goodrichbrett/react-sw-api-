import React from 'react';

const Navbar = (props) => {
	return (
		<header className="App-header">
			<img
				src="/logo.gif"
				alt=""
				className="App-logo"
				style={{ width: '100px', height: '100px' }}
			/>
			{props.navItems.map((navItem, idx) => (
				<a key={idx} href={navItem.url}>
					{navItem.name}
				</a>
			))}
		</header>
	);
};

export default Navbar;

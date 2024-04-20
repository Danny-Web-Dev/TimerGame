import { useState, useRef } from 'react';

const Player = () => {
	const playerName = useRef();
	const [enteredPlayedName, setEnteredPlayerName] = useState(null);

	const handleClick = () => {
		setEnteredPlayerName(playerName.current.value);
		playerName.current.value = '';
	};

	return (
		<section id='player'>
			<h2>Welcome {enteredPlayedName ?? 'unknown entity'}</h2>
			<p>
				<input ref={playerName} type='text' />
				<button onClick={handleClick}>Set Name</button>
			</p>
		</section>
	);
};

export default Player;

import React from 'react';
import { useState, useRef } from 'react';
import ResultModal from './ResultModal';

const TimerChallange = ({ title, targetTime }) => {
	const timer = useRef();
	const dialog = useRef();
	const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
	const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

	if (timeRemaining <= 0) {
		clearInterval(timer.current);
		setTimeRemaining(targetTime * 1000);
		dialog.current.open();
	}

	const handleStart = () => {
		timer.current = setInterval(() => {
			setTimeRemaining((prevTimeRemaining) => {
				return prevTimeRemaining - 10;
			});
		}, 10);
	};

	const handleStop = () => {
		clearInterval(timer.current);
		dialog.current.open();
	};

	return (
		<>
			<ResultModal ref={dialog} targetTime={targetTime} result='lost' />
			<section className='challenge'>
				<h2>{title}</h2>
				{timerIsActive && <p>You lost!</p>}
				<p className='challenge-time'>
					{targetTime} second{targetTime > 1 ? 's' : ''}
				</p>
				<p>
					<button onClick={timerIsActive ? handleStop : handleStart}>{timerIsActive ? 'Stop' : 'Start'} challenge</button>
				</p>
				<p className={timerIsActive ? 'active' : undefined}>{timerIsActive ? 'Time is running...' : 'Timer inactive'}</p>
			</section>
		</>
	);
};

export default TimerChallange;

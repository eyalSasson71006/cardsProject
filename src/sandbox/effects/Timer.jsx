import React, { useState, useEffect } from "react";

function Timer() {
	const [count, setCount] = useState(0);
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		if (!isActive) return;

		const interval = setInterval(() => {
			setCount((prevCount) => prevCount + 1);
		}, 1000);

		return () => clearInterval(interval);
	}, [isActive]);

	const toggleActive = () => setIsActive(!isActive);
	const resetCounter = () => {
		setCount(0);
		setIsActive(false);
	};

	return (
		<div>
			<h2>Counter: {count}</h2>
			<button onClick={toggleActive}>
				{isActive ? "Stop" : "Start"}
			</button>
			<button onClick={resetCounter}>Reset</button>
		</div>
	);
}

export default Timer;

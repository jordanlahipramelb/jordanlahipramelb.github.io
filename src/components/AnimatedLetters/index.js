import "./index.scss";

/** Animated Letters Component
 *
 * Reusable component that helps with animating letters.
 *
 * Maps through each character of the strArr and provides an idx number for it.
 */

const AnimatedLetters = ({ letterClass, strArr, idx }) => {
	return (
		<span>
			{strArr.map((char, i) => (
				<span key={char + i} className={`${letterClass} _${i + idx}`}>
					{char}
				</span>
			))}
		</span>
	);
};

export default AnimatedLetters;

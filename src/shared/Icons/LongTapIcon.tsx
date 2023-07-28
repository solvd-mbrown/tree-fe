import React from 'react';
import {Icon} from 'native-base';
import {Path, G, Defs, ClipPath, Circle} from 'react-native-svg';

const LongTapIcon = () => {
	return (
		<Icon size="48px" viewBox="0 0 48 48">
			<G clipPath="url(#a)">
				<Path
					fill="#fff"
					d="m41.14 26.468-7.522-8.261c-1.442-1.446-3.946-1.456-5.413.012a3.74 3.74 0 0 0-.966 1.651c-1.46-1.12-3.688-.997-5.034.348a3.792 3.792 0 0 0-.97 1.65c-1.456-1.12-3.686-.991-5.03.35a3.797 3.797 0 0 0-.96 1.614l-3.544-3.544a3.829 3.829 0 0 0-5.416.012 3.823 3.823 0 0 0 0 5.402l13.616 13.616-8.072 1.268A4.48 4.48 0 0 0 8 44.999c0 1.654 1.346 3 3 3h18.858c2.935 0 5.697-1.144 7.781-3.224l3.144-3.145A10.908 10.908 0 0 0 44 33.862c0-2.74-1.016-5.366-2.86-7.394Zm-1.774 13.75-3.144 3.145A8.952 8.952 0 0 1 29.856 46H11c-.55 0-1-.448-1-1 0-1.216.908-2.262 2.124-2.438l10.03-1.575a1 1 0 0 0 .552-1.694L7.699 24.286a1.829 1.829 0 0 1 2.588-2.584l5.872 5.872c.014.016.032.032.048.048l4.088 4.086a1 1 0 0 0 1.414-1.414l-4.122-4.122a1.83 1.83 0 0 1 .046-2.552c.688-.684 1.884-.688 2.572 0l1.966 1.968c.012.012.022.024.034.034l2.088 2.086a1 1 0 0 0 1.414-1.414l-2.112-2.11a1.834 1.834 0 0 1 .038-2.564c.686-.684 1.884-.688 2.572 0l2.088 2.096c.002.002.002.004.004.004l.002.002.008.004s0 .002.002.002l.002.002.002.002h.004a1 1 0 0 0 1.39-1.438l-.12-.12a1.83 1.83 0 0 1 .043-2.553c.688-.684 1.916-.654 2.54-.035l7.488 8.23a8.965 8.965 0 0 1 2.34 6.048 8.936 8.936 0 0 1-2.632 6.354Z"
				/>
				<Path
					fill="#fff"
					d="M28.304 23.726h.002a.238.238 0 0 0-.004-.002c.002.002.004.002.002.002ZM17.193 19.308c-1.458-3.224-4.672-5.307-8.193-5.307-4.962 0-9 4.037-9 9 0 3.519 2.084 6.735 5.306 8.193a1.005 1.005 0 0 0 1.324-.5 1.002 1.002 0 0 0-.5-1.324A7.013 7.013 0 0 1 2 23c0-3.86 3.14-7 7-7a7.013 7.013 0 0 1 6.37 4.13 1 1 0 1 0 1.823-.822Z"
				/>
				<Circle cx="39.5" cy="8.5" r="7.5" stroke="#fff" strokeWidth="2" />
				<Path stroke="#fff" strokeWidth="2" d="M39.5 4v5h3" />
			</G>
			<Defs>
				<ClipPath id="a">
					<Path fill="#fff" d="M0 0h48v48H0z" />
				</ClipPath>
			</Defs>
		</Icon>
	);
};

export default LongTapIcon;
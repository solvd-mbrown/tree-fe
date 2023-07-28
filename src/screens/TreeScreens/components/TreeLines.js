import React from 'react';
import {Line} from 'react-native-svg';

const TreeLines = ({linesData}) => {
	return (
		<>
			{linesData.map((line, index) => (
				<Line
					key={index}
					x1={line.start.x}
					y1={line.start.y}
					x2={line.end.x}
					y2={line.end.y}
					stroke="black"
					strokeWidth="2"
				/>
			))}
		</>
	);
};

export default TreeLines;

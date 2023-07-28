import React, {useEffect, useState} from 'react';
import {select, event} from 'd3-selection';
import {zoom as d3Zoom} from 'd3-zoom';
import calculateTreeLayout from '../../utils/calculateTreeLayout';

export default function Tree({data}) {
	const [treeData, setTreeData] = useState(null);

	useEffect(() => {
		if (data) {
			const {nodePositions, svgPaths} = calculateTreeLayout(data);
			setTreeData({nodePositions, svgPaths});
		}
	}, [data]);

	useEffect(() => {
		const svg = select('svg');
		const zoom = d3Zoom().on('zoom', () => {
			svg.attr('transform', event.transform);
		});
		svg.call(zoom);
	}, []);

	if (!treeData) {
		return null;
	}

	return (
		<svg width="100%" height="100%">
			<g>
				{treeData.svgPaths.map(d => (
					<path
						key={`path-${d.source}-${d.target}`}
						d={`M${d.source.x},${d.source.y} L${d.target.x},${d.target.y}`}
					/>
				))}
				{treeData.nodePositions.map(d => (
					<circle key={`node-${d.id}`} cx={d.x} cy={d.y} r={10} />
				))}
			</g>
		</svg>
	);
}

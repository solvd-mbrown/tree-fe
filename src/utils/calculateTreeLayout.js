import {hierarchy, tree} from 'd3';

export function calculateTreeLayout(treeData) {
	// Check if treeData is null or not an object
	if (!treeData || typeof treeData !== 'object') {
		throw new Error('Invalid treeData: must be a non-null object');
	}

	// Convert the tree data into a hierarchy
	const root = hierarchy(treeData, d => d.children);

	// Check if root is null or not an object
	if (!root || typeof root !== 'object') {
		throw new Error('Failed to convert treeData into a hierarchy');
	}

	// Create a tree layout function with the desired size
	const treeLayout = tree().size([1000, 1000]);

	// Apply the tree layout to the hierarchy
	const d3Tree = treeLayout(root);

	// Extract the node positions and paths from the layout
	const nodePositions = {};
	const svgPaths = [];
	d3Tree.each(node => {
		// Store the node's computed position
		nodePositions[node.data.id] = {x: node.x, y: node.y};

		// Create paths from this node to each of its children
		if (node.children) {
			for (let child of node.children) {
				svgPaths.push({
					d: `M${node.x} ${node.y} L ${child.x} ${child.y}`,
					stroke: '#000',
					strokeWidth: 2,
				});
			}
		}
	});

	// Return the node positions and paths
	return {svgDimensions: {width: 1000, height: 1000}, nodePositions, svgPaths};
}

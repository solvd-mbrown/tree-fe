import {Dimensions, ScaledSize} from 'react-native';
import {HierarchyPointNode} from 'd3-hierarchy';
import {stratify, tree as d3Tree} from 'd3';

// Define the type for a tree node
interface TreeNode {
	children: TreeNode[];
	id: string;
	parentId: string | null;
	data: any;
}

export function calculateSvgPaths(
	nodePositions: Record<string, {x: number; y: number}>
): {d: string; stroke: string; strokeWidth: number}[] {
	const svgPaths: {d: string; stroke: string; strokeWidth: number}[] = [];
	for (const nodeId in nodePositions) {
		const nodePosition = nodePositions[nodeId];
		const path = `M${nodePosition.x},${nodePosition.y} L100,100`;
		svgPaths.push({d: path, stroke: 'black', strokeWidth: 2});
	}
	return svgPaths;
}

export function calculateNodePositions(
	rootNode: HierarchyPointNode<TreeNode>
): Record<string, {x: number; y: number}> {
	const nodePositions: Record<string, {x: number; y: number}> = {};
	rootNode.each(node => {
		nodePositions[node.data.id] = {x: node.x, y: node.y};
	});
	return nodePositions;
}
// Function to calculate the tree layout
export function calculateTreeLayout(treeNodes: TreeNode[], setSvgDimensions: {
	width: number;
	height: number
}, svgPaths: number): {
	svgPaths: { d: string; stroke: string; strokeWidth: number }[];
	svgDimensions: ScaledSize;
	nodePositions: Record<string, { x: number; y: number }>
} {
	// Convert the tree data to a hierarchy
	const dataStratify = stratify<TreeNode>()
		.id((d: TreeNode) => d.id)
		.parentId((d: TreeNode) => d.parentId);
	const rootNode = dataStratify(treeData);

	// Calculate the tree layout
	const layoutRoot = d3Tree<TreeNode>().size([360, 1])(rootNode);

	// Calculate the node positions
	const nodePositions = calculateNodePositions(layoutRoot);

	// Calculate the SVG paths
	const svgPaths = calculateSvgPaths(nodePositions);

	// Get the SVG dimensions
	const svgDimensions = Dimensions.get('screen');

	return {svgDimensions, nodePositions, svgPaths};
}

import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Svg, {G} from 'react-native-svg';
import {useSelector} from 'react-redux';
import {RootState} from '~redux/store';
import TreeMember from '../components/TreeMember';
import {calculateTreeLayout} from '~utils/TreeUtils';
import TreeActions from '../components/TreeActions';

export interface TreeNode {
	// Define the type for TreeNode
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	svgContainer: {
		position: 'absolute',
		top: 0,
		left: 0,
	},
});

const TreeScreen = () => {
	// @ts-ignore
	// @ts-ignore
	let treeData: any,
		svgDimensions: {width: number; height: number},
		setSvgDimensions: (
			value:
				| ((prevState: {width: number; height: number}) => {
						width: number;
						height: number;
				  })
				| {width: number; height: number}
		) => void,
		nodePositions: {},
		setNodePositions: (value: ((prevState: {}) => {}) | {}) => void,
		svgPaths: any[],
		setSvgPaths: (value: ((prevState: any[]) => any[]) | any[]) => void;
	// @ts-ignore
	treeData = useSelector(({treeData: treeData1}: RootState) => treeData1);

	[svgDimensions, setSvgDimensions] = useState({
		width: 0,
		height: 0,
	});
	[nodePositions, setNodePositions] = useState({});

	// @ts-ignore
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	[svgPaths, setSvgPaths] = useState([]);
	useEffect(() => {
		const {width, height} = Dimensions.get('window');
		setSvgDimensions({width, height});
	}, [setSvgDimensions]);

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-shadow
		let nodePositions: Record<string, {x: number; y: number}>,
			svgPaths: {d: string; stroke: string; strokeWidth: number}[];
		({nodePositions, svgPaths} = calculateTreeLayout(treeData, svgDimensions, 100));
		setNodePositions(nodePositions);
		// @ts-ignore
		setSvgPaths(svgPaths);
	}, [setNodePositions, setSvgPaths, svgDimensions, treeData]);

	// @ts-ignore
	// eslint-disable-next-line no-undef
	let treeMember = value;
	return (
		<>
			<View style={styles.container}>
				<Svg style={styles.svgContainer}>
					<G>
						<TreeMember nodePositions={nodePositions} />
					</G>
				</Svg>
				<TreeActions treeMember={treeMember} />
			</View>
		</>
	);
};

export default TreeScreen;

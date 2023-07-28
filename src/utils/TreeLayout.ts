export interface ITreeLayout {
	svgDimensions: {width: number; height: number};
	nodePositions: Record<string, {x: number; y: number}> | undefined;
	svgPaths: {d: string; stroke: string; strokeWidth: number}[];
}

export class TreeLayout implements ITreeLayout {
	private _nodePositions: Record<string, {x: number; y: number}> | undefined;
	private _svgDimensions: {width: number; height: number} | undefined;
	private _svgPaths: {d: string; stroke: string; strokeWidth: number}[] = [];
	nodePositions: Record<string, {x: number; y: number}> | undefined;
	svgDimensions!: {width: number; height: number};
	svgPaths: {d: string; stroke: string; strokeWidth: number}[] = [];
}

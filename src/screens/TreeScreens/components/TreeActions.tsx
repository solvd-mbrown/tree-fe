import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {deleteTreeMember, setTreeMemberToEdit} from 'src/redux/slices/tree';
import {TreeMember as TreeMemberType} from '../../../types/TreePart';
// eslint-disable-next-line react-native/split-platform-components
import {Text, TouchableOpacity, ActionSheetIOS} from 'react-native';

type TreeActionsProps = {
	treeMember: TreeMemberType;
};

const TreeActions: React.FC<TreeActionsProps> = ({treeMember}) => {
	const navigation = useNavigation();
	const dispatch = useDispatch();

	const handleEdit = () => {
		// @ts-ignore
		dispatch(setTreeMemberToEdit(treeMember.id));
		// @ts-ignore
		navigation.navigate('EditTreeMember');
	};

	const handleDelete = () => {
		// @ts-ignore
		dispatch(new deleteTreeMember(treeMember.id));
	};

	const handlePress = () => {
		ActionSheetIOS.showActionSheetWithOptions(
			{
				options: ['Cancel', 'Edit', 'Delete'],
				destructiveButtonIndex: 2,
				cancelButtonIndex: 0,
			},
			buttonIndex => {
				if (buttonIndex === 1) {
					handleEdit();
				} else if (buttonIndex === 2) {
					handleDelete();
				}
			}
		);
	};

	return (
		<TouchableOpacity onPress={handlePress}>
			<Text>{treeMember.name}</Text>
		</TouchableOpacity>
	);
};

export default TreeActions;

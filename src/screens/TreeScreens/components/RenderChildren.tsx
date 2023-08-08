import React, { ReactNode } from 'react';
import { View } from 'react-native';
import TreeMember from '../components/TreeMember';

interface ITreeMemberDescendant {
  id: string;
  name: string;
  children: Array<ITreeMemberDescendant>;
}

const renderChildren = (childrenData: Array<ITreeMemberDescendant>): ReactNode => {
  return (
    <View>
      {childrenData.map(child => (
        <TreeMember key={child.id} member={child} />
      ))}
    </View>
  );
};

export default renderChildren;

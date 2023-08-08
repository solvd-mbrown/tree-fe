import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TreeNode = ({ nodeData }) => {
  return (
    <View style={styles.nodeContainer}>
      <Text style={styles.nodeName}>{nodeData.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nodeContainer: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'lightblue',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  nodeName: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default TreeNode;

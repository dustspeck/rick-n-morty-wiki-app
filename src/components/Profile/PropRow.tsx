import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {ReactNode, useState} from 'react';
import {CARD_BG, GREY} from '../../constants/colors';
import {BORDER_RADIUS} from '../../constants/styles';

interface PropRowPros {
  type: string;
  value: string;
  expandable?: boolean;
  onPress?: Function;
  ExpandedChild?: React.ReactNode;
}

const PropRow = ({
  type,
  value,
  expandable,
  ExpandedChild,
  onPress,
}: PropRowPros) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePress = () => {
    setIsExpanded(!isExpanded);
    if (onPress) onPress();
  };

  const rowWrapper = (children: ReactNode, ExpandedChild: React.ReactNode) =>
    expandable ? (
      <View>
        <Pressable onPress={handlePress}>{children}</Pressable>
        {isExpanded && <>{ExpandedChild}</>}
      </View>
    ) : (
      <View>{children}</View>
    );

  return rowWrapper(
    <View>
      <View style={styles.container}>
        <Text style={styles.type}>{`${type}`.toUpperCase()}</Text>
        <Text
          numberOfLines={2}
          style={[styles.value, expandable && styles.squareRight]}>
          {value}
        </Text>
        {expandable && (
          <Text style={[styles.value, styles.expandableButton]}>
            {isExpanded ? '▲' : '▼'}
          </Text>
        )}
      </View>
    </View>,
    ExpandedChild,
  );
};

export default PropRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: '10%',
    marginVertical: 5,
  },
  type: {
    color: GREY,
    borderRadius: BORDER_RADIUS / 2,
    backgroundColor: CARD_BG,
    fontSize: 13,
    paddingHorizontal: 10,
    marginRight: 5,
    paddingVertical: 5,
    textAlignVertical: 'center',
    textAlign: 'center',
    minWidth: '20%',
  },
  value: {
    color: GREY,
    borderRadius: BORDER_RADIUS / 2,
    backgroundColor: `${CARD_BG}55`,
    flex: 1,
    textAlign: 'center',
    fontSize: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  squareRight: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  expandableButton: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    maxWidth: 30,
    padding: 0,
    textAlignVertical: 'center',
  },
});

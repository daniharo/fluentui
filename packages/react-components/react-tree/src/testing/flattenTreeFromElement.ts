import { TreeItemProps } from '../TreeItem';
import * as React from 'react';
import { FlatTreeItemProps } from '../hooks/useFlatTree';

let count = 1;
/**
 * @internal
 */
export const flattenTreeFromElement = (
  root: React.ReactElement<{
    children?: React.ReactElement<TreeItemProps> | React.ReactElement<TreeItemProps>[];
  }>,
  parent?: FlatTreeItemProps,
  level = 1,
): FlatTreeItemProps[] => {
  const children = React.Children.toArray(root.props.children) as React.ReactElement<TreeItemProps>[];
  return children.reduce<FlatTreeItemProps[]>((acc, curr, index) => {
    const childrenArray = React.Children.toArray(curr.props.children);
    const subtree = (childrenArray.length === 3 ? childrenArray[2] : childrenArray[1]) as typeof root | undefined;
    const [content] = childrenArray;
    const actions = (childrenArray.length === 3 ? childrenArray[1] : undefined) as React.ReactNode | undefined;
    const id = curr.props.id ?? `fui-FlatTreeItem-${count++}`;
    const flatTreeItem: FlatTreeItemProps = {
      'aria-level': level,
      'aria-posinset': index + 1,
      'aria-setsize': children.length,
      parentValue: parent?.value,
      value: curr.props.value ?? id,
      ...curr.props,
      children: actions ? [content, actions] : content,
    };
    acc.push(flatTreeItem);
    if (subtree !== undefined) {
      acc.push(...flattenTreeFromElement(subtree, flatTreeItem, level + 1));
    }
    return acc;
  }, []);
};
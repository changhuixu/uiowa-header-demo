import { TreeNode } from './tree-node';

export interface TreeBranch {
  parent: TreeNode;
  children: TreeNode[];
}

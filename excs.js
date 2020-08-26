/* eslint-disable no-console */
const BST = require('./bst');


function main() {
  const BST1 = new BST();
  const BST2 = new BST();
  const BST3 = new BST();

  const data = [3, 1, 4, 6, 9, 2, 5, 7];
  const balance = [3, 1, 4];
  const letters = ['E', 'A', 'S', 'Y', 'Q', 'U', 'E', 'S', 'T', 'I', 'O', 'N'];

  for (let i = 0; i < data.length; i++) {
    BST1.insert(data[i], data[i]);
  }
  for (let i = 0; i < letters.length; i++) {
    BST2.insert(letters[i], letters[i]);
  }

  for (let i = 0; i < balance.length; i++) {
    BST3.insert(balance[i], balance[i]);
  }

  console.log(BST1);
  console.log(BST2);
  console.log(treeHeight(BST1));
  console.log(isItBST(BST1));
  console.log(thirdLargest(BST1));
  console.log(balanceBST(BST1));

  const arrA = [3, 4, 1, 2, 6, 0, 7, 5, 9];
  const arrB = [7, 2, 5, 1, 0, 6, 3, 4, 8];
  console.log(sameBST(arrA, arrB));
}

main();

//4- What does this program do?
function tree(t) {
  if (!t) {
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}

//5-  height bst
function treeHeight(t) {
  console.log('working with ' + t.value);
  console.log('right is ' + t.right);
  console.log('left is ' + t.left);
  if (t.right === null && t.left === null) {
    console.log('at the bottom');
    return 1;
  }
  console.log('moving down a level');
  if (t.right !== null && t.left !== null) {
    return Math.max(treeHeight(t.right), treeHeight(t.left)) + 1;
  }
  if (t.right !== null && t.left === null) {
    return 1 + treeHeight(t.right);
  }
  if (t.left !== null && t.right === null) {
    return 1 + treeHeight(t.left);
  }
}


function minHeight(t) {
  if (t.right === null && t.left === null) {
    return 1;
  }
  if (t.right !== null && t.left !== null) {
    return Math.min(minHeight(t.right), minHeight(t.left)) + 1;
  }
  if (t.right !== null && t.left === null) {
    return 1 + minHeight(t.right);
  }
  if (t.left !== null && t.right === null) {
    return 1 + minHeight(t.left);
  }
}

//6- is it bst

function isItBST(t) {
  if (t.right === null && t.left === null) {
    return true;
  }
  if (t.left !== null && t.right === null) {
    return isItBST(t.left);
  }
  if (t.right !== null && t.left === null) {
    return isItBST(t.right);
  }
  if (t.left !== null && t.right !== null) {
    if (t.left.value < t.right.value) {
      return isItBST(t.left) && isItBST(t.right);
    } else {
      return false;
    }
  }
}

function sortArray(arr) {
  return arr.sort((a, b) => b - a);
}

//7- 3rd largest node
function thirdLargest(t, num = []) {

  if (!t.left && !t.right) {
    num.push(t.value);
    const sorted = sortArray(num);
    return sorted[2] ? sorted[2] : 'The tree has less than 3 nodes.';
  }
  if (t.left !== null && t.right === null) {
    num.push(t.value);
    return thirdLargest(t.left, num);
  }
  if (t.right !== null && t.left === null) {
    num.push(t.value);
    return thirdLargest(t.right, num);
  }
  if (t.right !== null && t.left !== null) {
    num.push(t.value);
    return thirdLargest(t.right, num);
  }

}

function helperHeight(t) {
  if(t === null){
    return 0;
  }
  return Math.max(helperHeight(t.left),helperHeight(t.right)) + 1;
}

//8- Balanced BST
function balanceBST(t) {

  if(t === null) {
    return true;
  }
  let rightSide = helperHeight(t.right);
  let leftSide = helperHeight(t.left);
 

  const diff = Math.abs(rightSide - leftSide);
  if (diff > 1) {
    return false;
  }
  else {
    return balanceBST(t.left) && balanceBST(t.right);
  }
}

//9. Are they the same BSTs?
function sameBST(arr1, arr2) {
  arr1.sort();
  arr2.sort();
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
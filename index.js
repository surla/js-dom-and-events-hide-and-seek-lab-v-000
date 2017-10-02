function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  let node = document.getElementById('grand-node');
  let nextNode = node.children[0];

  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }

  return node;
}

function increaseRankBy(n) {
  let rankedList = document.querySelectorAll('.ranked-list');

  for (let i = 0, l = rankedList.length; i < l; i++) {
    rankedList[i].innerHTML = parseInt(rankedList[i]) + n;
  }
}

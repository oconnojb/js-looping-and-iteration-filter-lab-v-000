// Code your solution in this file
function findMatching(collection, string){
  const newCollection = [];

  for (var i = 0; i < collection.length; i++) {
    if (collection[i] === string) {
      newCollection.push(colleciton[i]);
    }
  }

  return newCollection;
}

// Code your solution in this file
function findMatching(collection, string){
  const newCollection = [];

  for (var i = 0; i < collection.length; i++) {
    if (collection[i].toUpperCase() === string.toUpperCase()) {
      newCollection.push(collection[i]);
    }
  }

  return newCollection;
}

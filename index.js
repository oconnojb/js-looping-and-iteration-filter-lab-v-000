// Code your solution in this file
function findMatching(collection, string){
  const newCollection = [];

  for (const item of collection) {
    for (var i = 0; i < collection.length; i++) {
      if (item[i] === string) {
        newCollection.push(item[i])
      }
    }
  }

  return newCollection;
}

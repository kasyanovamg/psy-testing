import sum from 'lodash-es/sum';

const countAverage = (arr) => {
  const len = arr.length;
  return sum(arr) / len;
};

export const getAverage = (projects, group) => {

  let counter = 1;
  let temp = {
    [counter]: []
  };

  for (let i = 0; i < projects.length; i++) {
    let check = temp[counter].find(item => item.authorId === projects[i].authorId);
    if (!check) {
      temp[counter].push(projects[i]);
    } else {
      counter = counter + 1;
      temp[counter] = [];
      temp[counter].push(projects[i]);
    }
  }
  const results = {};
  const finalResults = [];
  Object.values(temp).forEach(
    (project, i) => {
      results[i] = {
        shulte: [],
        shulteRed: [],
        perception: [],
        count: [],
        memoryWords: []
      };
      project.forEach(p => {
        if (p.generalResult) {
          if (p.generalResult.shulte > 0) {
            results[i].shulte.push(p.generalResult.shulte)
          }
          if (p.generalResult.shulteRed > 0) {
            results[i].shulteRed.push(p.generalResult.shulteRed)
          }
          if (p.generalResult.perception > 0) {
            results[i].perception.push(p.generalResult.perception)
          }
          if (p.generalResult.count > 0) {
            results[i].count.push(p.generalResult.count)
          }
          if (p.generalResult.memoryWords > 0) {
            results[i].memoryWords.push(p.generalResult.memoryWords)
          }
        }

      });
      results[i].shulte = countAverage(results[i].shulte);
      results[i].shulteRed = countAverage(results[i].shulteRed);
      results[i].perception = countAverage(results[i].perception);
      results[i].count = countAverage(results[i].count);
      results[i].memoryWords = countAverage(results[i].memoryWords);
      finalResults.push({generalResult: results[i], authorId: group})
    });

  return finalResults;

};
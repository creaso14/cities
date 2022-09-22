const cities = [
  { name: 'Hilo', population: 44100 },
  { name: 'Honolulu', population: 350000 },
  { name: 'Kailua', population: 40500 },
  { name: 'Kaneohe', population: 37400 },
  { name: 'Pearl City', population: 46000 },
  { name: 'Waipahu', population: 43500 },
];

function averagePopulation(data) {
  const popArr = _.pluck(data, 'population');
  const arrLen = popArr.length;

  return ((_.reduce(popArr, function (memo, num) { return memo + num; }, 0)) / arrLen);
}

function biggestAndSmallest(data) {
  const biggest = _.max(data, function (num) { return num.population; });
  const smallest = _.min(data, function (num) { return num.population; });
  return `Biggest: ${biggest.name}; Smallest: ${smallest.name}`;
}

console.log(averagePopulation(cities));
console.log(biggestAndSmallest(cities));

const appleProducts = [
  "MacBook Air",
  "MacBook Pro",
  "iMac",
  "Mac mini",
  "Mac Studio",
  "Mac Pro",
  "iPhone SE",
  "iPhone 14",
  "iPhone 14 Pro",
  "iPhone 14 Pro Max",
  "iPhone 13",
  "iPad",
  "iPad mini",
  "iPad Air",
  "iPad Pro",
  "Apple Watch",
  "Apple Watch SE",
  "Apple Watch Ultra",
  "AirPods",
  "AirPods Pro",
  "AirPods Max",
  "HomePod",
  "HomePod mini",
  "Apple TV 4K",
  "AirTag",
  "Apple Pencil",
  "Magic Keyboard",
  "MagSafe Charger",
  "Apple Vision Pro"
];


function range (rngStart, rngEnd, step) {
  const steps = [];

  for(let element = rngStart; element < rngEnd; element += step) {
    steps.push(element);
  }
  return steps;
}

const compareStringAndNumber = function (a, b) {

}

const compareLength = function (a, b) {
  if (a.length === b.length) {
    return compareStringAndNumber(a, b);
  }
  return a.length - b.length;
}

const getSorter = function (subString) {
  return function (a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a.indexOf(subString) === b.indexOf(subString)) {
      return compareLength(a, b);
    }
    return a.indexOf(subString) - b.indexOf(subString);
  }
}

const createSearch = function (array) {
  return function (subString) {
    return array.filter(function (string) {
      return string.toLowerCase().includes(subString);
    }).sort(getSorter(subString))
  }
}

const arrayPaddEnd = function (array) {
  const sizeOfPadding = 18 - array.length;
  for (const times in range(0, sizeOfPadding, 1)) {
    array.push("");
  }
  array.unshift("\n");
  array.push("\n");

  return array;
}

const takeUserInput = function () {
  let keyword = "";
  const search = createSearch(appleProducts);
  while(true) {
    console.clear()
    console.log(arrayPaddEnd(search(keyword.toLowerCase())).join("\n"));
    const input = prompt("Enter the word to search: ", keyword);
    keyword = input;
  }
}

takeUserInput()
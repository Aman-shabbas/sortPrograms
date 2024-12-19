  const sortWithLength = function (a, b) {
    return a.length - b.length;
  }

  const acendingOrder = function (a, b) {
    return a - b;
  }

  const sortString = function (a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
  }

  const isSame = function (array1, array2) {
    for (const index in array1) {
      if (array1[index] < array2[index]) {
        return -1;
      }
      
      if (array1[index] > array2[index]) {
        return 1;
      }
    }

    return 0;
  }

  const sortArray = function (a, b) {
    a.sort(acendingOrder);
    b.sort(acendingOrder);
    if (a.length === b.length) {
      return isSame(a, b);
    }
    return a.length - b.length;
  }
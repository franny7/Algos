// Intersection of Two Arrays

// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

var intersection = function (nums1, nums2) {
  let sortedArr1 = nums1.sort((a, b) => a - b);
  let sortedArr2 = nums2.sort((a, b) => a - b);

  let filteredArray = sortedArr2.filter((value) => sortedArr1.includes(value));
  let sortedFilteredArr = filteredArray.sort((a, b) => a - b);

  if (sortedArr1 === sortedArr2) {
    return sortedArr1;
  } else if (sortedFilteredArr.length === 1) {
    return sortedFilteredArr;
  } else {
    for (let i = 0; i < sortedFilteredArr.length; i++) {
      if (sortedFilteredArr[i] === sortedFilteredArr[i + 1]) {
        sortedFilteredArr.splice(i, 1);
        i--;
      }
    }
    return sortedFilteredArr;
  }
};

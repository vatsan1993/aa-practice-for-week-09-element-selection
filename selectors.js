const select = () => {
  /* Write queries for each of the following */

  /* Section 1 */
  // 1. Get all seeded fruit elements
  // Your code here
  let seededFruits = document.querySelectorAll('.seed');

  // 2. Get all seedless fruit elements
  // Your code here
  let seedlessFruits = document.querySelectorAll('.seedless');

  // 3. Get first seedless fruit element
  // Your code here
  let firstSeedlessFruit = document.querySelector('.seedless');
  /* Section 2 */
  // 4. Get inner span with text "you"
  // Your code here
  let span = document.querySelector('span');

  // 5. Get all children of element "wrapper"
  // Your code here
  let wrapperChildren = document.querySelector('#wrapper').childNodes;

  // 6. Get all odd number list items in the list
  // Your code here
  let oddNumbers = document.querySelectorAll('.odd');
  // 7. Get all even number list items in the list
  // Your code here
  let ol = document.querySelector('ol');
  let firstEven = ol.children[1];
  let secondEven = ol.children[3];
  /* Section 3 */
  // 8. Get all tech companies without a class name
  // Your code here
  let companyWithoutClass = document.querySelector('a');

  // 9. Get "Amazon" list element
  // Your code here
  let amazonListElement = document.querySelector('a.shopping');

  // 10. Get all unicorn list elements (not the image element)
  // Your code here
  let allUnicorns = document.querySelectorAll('ul')[1].children;
  debugger;
};

window.onload = select;

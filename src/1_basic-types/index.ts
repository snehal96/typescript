// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
//   Exercise 1 – Basic Types
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈

// Objectives:
// • Annotate primitive types, arrays, and 'any' types
// • Identify when type checking happens
// • Afterwards we will analyze transpiler output

export default (() => {
  // ======== Exercise 1.1 ========
  // Instructions:
  // • Hover over red squigglies to inspect the TS errors.
  //   (OR follow the steps present in /learning/typescript/README.md to view the TS errors in terminal)
  // • Hover over variables to inspect their types.
  // • Fix the error on line 18 by changing the value of pi to the expected type.

  let pi = 3.14159;
  let tau = pi * 2;

  console.log('[Exercise 1.1]', `${tau} is ${pi} times two.`);

  // ======== Exercise 1.2 ========
  // Instructions:
  // • Inspect type of `pie`
  // • Add an explicit type annotation to `pie`
  // • Try assigning invalid types, for fun

  let pie;
  pie = 'blueberry';

  console.log('[Exercise 1.2]', `I like to eat ${pie}-flavored pie.`);

  // ======== Exercise 1.3 ========
  // Instructions:
  // • Inspect the error, then fix it.

  let isMark: boolean;
isMark = false;
  console.log('[Exercise 1.3]', `${isMark ? 'Oh, hi Mark' : 'Who are you?'}`);

  // ======== Exercise 1.4 ========
  // Instructions:
  // • Add type annotations (as explicit as possible)
  // • Fix errors (if applicable)

  const integer:Number = 6;
  const float:Number = 6.66;
  const hex:Number = 0xf00d;
  const binary:Number = 0b1010011010;
  const octal:Number = 0o744;
  const negZero:Number = -0;
  const actuallyNumber:Number = NaN;
  const largestNumber:Number = Number.MAX_VALUE;
  const mostBiglyNumber:Number = Infinity;

  const members: any[] = [
    integer,
    float,
    hex,
    binary,
    octal,
    negZero,
    actuallyNumber,
    largestNumber,
    mostBiglyNumber
  ];

  members[0] = '12345';

  console.log('[Exercise 1.4]', members);

  // ======== Exercise 1.5 ========
  // Instructions:
  // • Add type annotations (as explicit as possible)
  // • Fix errors (if applicable)

  const sequence = Array.from(Array(10).keys());
  const animals = ['pangolin', 'aardvark', 'echidna', 'binturong'];
  const stringsAndNumbers = [1, 'one', 2, 'two', 3, 'three'];
  const allMyArrays = [sequence, animals, stringsAndNumbers];

  console.log('Exercise 1.5', allMyArrays);

  // ======== Exercise 1.6 ========
  // Goal:
  // • Add type annotations (as explicit as possible)
  // • Fix errors (if applicable)

  // We want to represent an inventoryItem as a structure where
  // the first entry is the item name and the second is the quantity

  const inventoryItem = ["fidget wibbit", 11];

  // later we destructure it
  let name:any, qty:any;
  [name, qty] = inventoryItem;

  const msg = addInventory(name, qty);

  console.log('[Exercise 1.6]', msg);

  function addInventory(name: string, quantity: number): string {
    return `Added ${quantity} ${name}s to inventory.`;
  }
})();

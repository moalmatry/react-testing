const getFullName = (fname, lname) => {
  return `${fname} ${lname}`;
};

const actualName = getFullName("Bruce ", "Wayne");
const expectedFullName = `Bruce Wayne`;

if (actualName === expectedFullName) {
  throw new Error(`${actualName} is not equal to ${expectedFullName}`);
}

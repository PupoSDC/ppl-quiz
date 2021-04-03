/**
 * Sorting algorithm that is strongly biased towards keeping the first
 * entries of an array in  the begining of the array.
 */
export default <T>(arr: T[]) => {
  return arr.sort(() => Math.random() - 0.5);
};

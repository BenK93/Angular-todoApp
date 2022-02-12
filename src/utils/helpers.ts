export const makeCounter = (): () => number =>  {
  let i = 0;
  // tslint:disable-next-line:only-arrow-functions
  return function(): number {
    return i++;
  };
};

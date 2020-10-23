const add = (a: number, b: number): number => {
  console.info('I am add func');
  return a + b;
};

const minus = (a: number, b: number) => {
  console.info('I am minus func');
  return a - b;
};

export { add, minus };

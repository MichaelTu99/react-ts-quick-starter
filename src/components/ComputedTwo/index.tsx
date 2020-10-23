import * as React from 'react';
import { add } from 'Utils/math';
import './index.scss';

interface IProps {
  a: number;
  b: number;
}

const ComputedTwo = (props: IProps) => {
  const { a, b } = props;
  const sum = add(a, b);
  return <p className='computed-two'>{`Hi, I'm computed one, my sum is ${sum}.`}</p>;
};

export default ComputedTwo;

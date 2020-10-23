import React, { Suspense, useState } from 'react';
import Menu from 'Components/menu';
import './app.css';

const ComputedOne = React.lazy(() => import('Components/ComputedOne'));
const ComputedTwo = React.lazy(() => import('Components/ComputedTwo'));

interface IProps {
  name: string;
  age: number;
}

const App = (props: IProps) => {
  const [showTwo, setShowTwo] = useState(false);
  const { name, age } = props;
  return (
    <div className='page'>
      <span>{`Hello! I'm ${name}, ${age} years old.`}</span>
      <Menu />
      <Suspense fallback={<div>Loading...</div>}>
        <ComputedOne a={1} b={2} />
        {showTwo && <ComputedTwo a={3} b={4} />}
        <button type='button' onClick={() => setShowTwo(true)}>
          显示Two
        </button>
      </Suspense>
    </div>
  );
};

export default App;

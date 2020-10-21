import React from 'react';
import './app.css';
import Menu from 'Components/menu';

interface IProps {
  name: string;
  age: number;
}

const App = (props: IProps) => {
  const { name, age } = props;
  return (
    <div className='page'>
      <span>{`Hello! I'm ${name}, ${age} years old.`}</span>
      <Menu />
    </div>
  );
};

export default App;

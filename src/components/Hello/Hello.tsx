import * as React from 'react';

import { useState, useEffect } from 'react';
import type { HelloProps } from '../../../common-types/types';

import STYLE from './Hello.module.scss';


export const Hello = () => {
  const [data, setData] = useState({} as HelloProps);

  useEffect(() => {
    fetch('http://localhost:3000')
       .then(res => res.json())
       .then(res => setData(res))
       .catch(e => console.log('ERROR: ', e));
  });
  
  return (
    <div className={STYLE.Hello}>
      Hello from {data.compiler} and {data.framework}!
    </div>
  );
};

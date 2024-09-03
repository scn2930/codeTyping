import { c } from '@/assets/data';
import { useState } from 'react';

const PracticeItem = () => {
  return (
    <>
      {c?.map((x: any, i: number) => {
        return <div>{x.lang + i}</div>;
      })}
    </>
  );
};

export default PracticeItem;

import PracticeItem from '@/components/PracticeItem';
import { PracticePageStyle } from './style';
import Category from '@/components/Category';
import { useState } from 'react';

const PracticePage = () => {
  const [select, setSelect] = useState('');
  const SelectLang = (click: string) => {
    setSelect(click);
  };

  return (
    <PracticePageStyle>
      <div className="categorys">
        <Category SelectLang={SelectLang} />
      </div>
      <div className="items">
        <PracticeItem select={select} />
      </div>
    </PracticePageStyle>
  );
};

export default PracticePage;

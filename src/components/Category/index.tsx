import { lang } from '@/assets/data';
import { CategoryStyle } from './style';

interface selectProps {
  SelectLang(click: string): void;
}

const Category = (props: selectProps) => {
  return (
    <CategoryStyle>
      {lang?.map((x: string, i: number) => {
        return (
          <p onClick={() => props.SelectLang(x)} key={i + 'category'}>
            {x}
          </p>
        );
      })}
    </CategoryStyle>
  );
};

export default Category;

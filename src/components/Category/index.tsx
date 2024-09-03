import { lang } from '@/assets/data';

const Category = () => {
  return (
    <>
      {lang?.map((x: string, i: number) => {
        return <div key={i + 'category'}>{x + 'category'}</div>;
      })}
    </>
  );
};

export default Category;

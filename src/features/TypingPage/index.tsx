import { useRouter } from 'next/router';
import { c, js, java, python } from '@/assets/data';
import { Input } from 'antd';
import { TyingPageStyle } from './style';

const TypingPage = () => {
  const router = useRouter();
  const { title, id } = router.query;
  const lang = id === 'c' ? c : id === 'js' ? js : id === 'java' ? java : python;

  const code = lang.filter((target: any) => target.title === title)[0].code;
  console.log('code', code);

  return (
    <TyingPageStyle>
      {code.map((x: string, i: number) => {
        return (
          <>
            <div key={i + 'code'}>
              <p>{x}</p>
              <Input />
            </div>
          </>
        );
      })}
    </TyingPageStyle>
  );
};

export default TypingPage;

import { codeData } from '@/assets/data';
import { PracticeItemStyle } from './style';
import { useRouter } from 'next/router';

interface langProps {
  select: string;
}

const PracticeItem = (props: langProps) => {
  const router = useRouter();
  const RoutingTyping = (x: any) => {
    router.push({
      pathname: `/practice/typing/${x.lang}`,
      query: { title: x.title },
    });
  };
  let data =
    props.select === 'all' || props.select.length === 0
      ? codeData
      : codeData.filter((i: any) => i.lang === props.select);

  return (
    <PracticeItemStyle>
      <>
        {data?.map((x: any, i: number) => {
          return (
            <div
              key={i + 'data'}
              onClick={() => {
                RoutingTyping(x);
              }}
              className="item"
            >
              <div className="lang">{x.lang}</div>
              <div className="title">{x.title}</div>
            </div>
          );
        })}
      </>
    </PracticeItemStyle>
  );
};

export default PracticeItem;

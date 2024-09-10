import { useRouter } from 'next/router';
import { c, js, java, python } from '@/assets/data';
import { StaticStyle, TyingPageStyle } from './style';
import { useState } from 'react';
import TypingInput from '@/components/TypingInput';

const TypingPage = () => {
  const router = useRouter();
  const { title, id } = router.query;
  const lang = id === 'c' ? c : id === 'js' ? js : id === 'java' ? java : python;
  const codeData = lang.filter((target: any) => target.title === title)[0]?.code;

  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [pastTime, setPastTime] = useState(0);
  const [errorCount, setErrorCount] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [typing, setTyping] = useState(0);
  const inputCount = codeData?.length;
  const [focusIndex, setFocusIndex] = useState<number>(0);

  return (
    <>
      <StaticStyle>
        <p>경과 시간 : {pastTime} 초</p>
        <p>오타 수 : {errorCount}</p>
        <p>정확도 : {accuracy}%</p>
        <p>타수 : {typing} 타</p>
      </StaticStyle>
      <TyingPageStyle>
        {codeData?.map((x: string, i: number) => (
          <TypingInput
            code={x}
            key={i + 'keyType'}
            indexNumber={i}
            startTime={startTime}
            setStartTime={setStartTime}
            endTime={endTime}
            setEndTime={setEndTime}
            typing={typing}
            setTyping={setTyping}
            errorCount={errorCount}
            setErrorCount={setErrorCount}
            accuracy={accuracy}
            setAccuracy={setAccuracy}
            pastTime={pastTime}
            setPastTime={setPastTime}
            inputCount={inputCount}
            focusIndex={focusIndex}
            setFocusIndex={setFocusIndex}
          />
        ))}
      </TyingPageStyle>
    </>
  );
};

export default TypingPage;

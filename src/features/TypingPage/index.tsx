import { useRouter } from 'next/router';
import { c, js, java, python } from '@/assets/data';
import { StaticStyle, TyingPageStyle } from './style';
import { useEffect, useState } from 'react';
import TypingInput from '@/components/TypingInput';
import { Modal } from 'antd';

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
  const [totalErrors, setTotalErrors] = useState<string[]>([]);
  const [totalAccuracy, setTotalAccuracy] = useState<string[]>([]);
  const [totalTyping, setTotalTyping] = useState<string[]>([]);
  const [data, setData] = useState<any>();
  const [isOpen, setIsOpen] = useState(false);

  const sumError = totalErrors?.reduce((acc, cur) => {
    return acc + Number(cur);
  }, 0);
  const sumAcc = totalAccuracy?.reduce((acc, cur, i) => {
    return Number(acc) + Number(cur);
  }, 0);
  const sumTyping = totalTyping?.reduce((acc, cur, i) => {
    return Number(acc) + Number(cur);
  }, 0);
  const avgAcc = Number(sumAcc / inputCount).toFixed(2);
  const avgTyping = Number(sumTyping / inputCount).toFixed(2);

  useEffect(() => {
    if (isOpen) {
      const localString = localStorage.getItem('data');
      if (localString) {
        try {
          const localData = JSON.parse(localString);
          const sec = Math.floor(localData?.Times * 0.001);
          const min = Math.floor(sec / 60 >= 60 ? sec % 60 : sec / 60);
          const hour = Math.floor(sec / 3600);
          setData({
            sec: sec % 60,
            min: min,
            hour: hour,
            Accuracys: localData?.Accuracys,
            Typings: localData?.Typings,
          });
        } catch (error) {
          console.log('에러');
        }
      }
    }
  }, [isOpen]);

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };
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
            totalErrors={totalErrors}
            setTotalErrors={setTotalErrors}
            totalTyping={totalTyping}
            setTotalTyping={setTotalTyping}
            totalAccuracy={totalAccuracy}
            setTotalAccuracy={setTotalAccuracy}
            sumError={sumError}
            avgAcc={avgAcc}
            avgTyping={avgTyping}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        ))}
      </TyingPageStyle>
      <Modal title="통계" open={isOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>
          시간 : {data?.hour}시간 {data?.min}분 {data?.sec} 초
        </p>
        <p>정확도 : {data?.Accuracys} %</p>
        <p>타수 : {data?.Typings} 타</p>
      </Modal>
    </>
  );
};

export default TypingPage;

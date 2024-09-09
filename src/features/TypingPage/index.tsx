import { useRouter } from 'next/router';
import { c, js, java, python } from '@/assets/data';
import { StaticStyle, TyingPageStyle } from './style';
import { useEffect, useRef, useState } from 'react';
import TypingInput from '@/components/TypingInput';

const TypingPage = () => {
  const router = useRouter();
  const { title, id } = router.query;
  const lang = id === 'c' ? c : id === 'js' ? js : id === 'java' ? java : python;
  const codeData = lang.filter((target: any) => target.title === title)[0].code;
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [errorCount, setErrorCount] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [color, setColor] = useState(true);
  const inputRefs = useRef<any>([]);

  const activeEnter = (e: any, index: number) => {
    if (e.key === 'Enter') {
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleInputChange = (target: string, index: number) => {
    const codeText = [...codeData[index]];
    let errors = 0;
    const percentage = Number((((target.length - errors) / codeText.length) * 100).toFixed(2));
    if (!isTyping) {
      setStartTime(new Date().getTime());
      setIsTyping(true);
      console.log('startTime', startTime);
    } else {
      setInputText(target);
      if (codeData[index] === target) {
        if (index < inputRefs.current.length - 1) {
          inputRefs.current[index + 1]?.focus();
          setErrorCount(0);
          setEndTime(new Date().getTime());
          setTotalTime(Number(((endTime - (startTime || endTime)) / 1000).toFixed(2)));
          setAccuracy(100);
          setIsTyping(false);
          console.log('endTime', endTime);
        }
      } else {
        for (let i = 0; i < target.length; i++) {
          if (target[i] !== codeText[i]) {
            errors++;
            setColor(false);
            // console.log(color);
          } else {
            setColor(true);
            // console.log(color);
          }
        }
        setErrorCount(errors);
        setAccuracy(percentage);
      }
    }
  };

  useEffect(() => {
    if (isTyping) {
      if (inputText === codeData) {
        setIsTyping(false);
        setEndTime(new Date().getTime());
        setTotalTime(Number(((endTime - (startTime || endTime)) / 1000).toFixed(2)));
      }
    }
  }, [inputText, isTyping]);

  return (
    <>
      <StaticStyle>
        <p>오타 수 : {errorCount}</p>
        <p>정확도 : {accuracy}%</p>
        <p>속도 : {totalTime} 초</p>
      </StaticStyle>
      <TyingPageStyle>
        {codeData?.map((x: string, i: number) => (
          <TypingInput
            code={x}
            key={i}
            color={color}
            inputChange={(target: string) => handleInputChange(target, i)}
            keydown={(e: any) => activeEnter(e, i)}
            inputRef={(el: any) => (inputRefs.current[i] = el)}
          />
        ))}
      </TyingPageStyle>
    </>
  );
};

export default TypingPage;

import { Input } from 'antd';
import { useEffect, useState, useRef } from 'react';
import { TypingInputStyle } from './style';

interface CodeProps {
  code: string;
  indexNumber: number;
  startTime: number;
  setStartTime: any;
  endTime: number;
  setEndTime: any;
  typing: number;
  setTyping: any;
  errorCount: number;
  setErrorCount: any;
  accuracy: number;
  setAccuracy: any;
  pastTime: number;
  setPastTime: any;
  inputCount: number;
  focusIndex: number;
  setFocusIndex: any;
  totalErrors: any;
  setTotalErrors: any;
  totalTyping: any;
  setTotalTyping: any;
  totalAccuracy: any;
  setTotalAccuracy: any;
  sumError: number;
  avgAcc: string;
  avgTyping: string;
}

const TypingInput = (props: CodeProps) => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [color, setColor] = useState(true);
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [enter, setIsEnter] = useState(false);
  const intervalRef: any = useRef();

  const inputChange = (e: string) => {
    let errors = 0;
    if (!isTyping) {
      setIsTyping(true);
      props.setStartTime(Date.now());
      setIsEnter(false);
    }
    setText(e);
    if (e === props.code) {
      setIsTyping(false);
      props.setEndTime(Date.now());
    } else {
      e.split('').map((x: string, i: number) => {
        if (x !== props.code[i]) {
          errors++;
          setColor(false);
          props.setErrorCount(errors);
        } else {
          setColor(true);
          props.setErrorCount(errors);
        }
      });
      if (errors !== 0) {
        setColor(false);
      }
    }
  };

  const updateTime = () => {
    if (props.startTime) {
      const now = Date.now();
      const pastTime = Math.floor((now - props.startTime) / 1000);
      props.setPastTime(pastTime);
    }
  };

  //경과 시간
  useEffect(() => {
    let interval: any;
    if (isTyping) {
      interval = setInterval(updateTime, 1000);
    } else {
      props.setPastTime(0);
    }
    return () => clearInterval(interval);
  }, [isTyping]);

  // 정확도 계산
  const typing = props.code.split('');
  const textArr = text.split('');
  const onText = typing.reduce((count, item, index) => {
    if (index < textArr.length && item === textArr[index]) {
      return count + 1;
    }
    return count;
  }, 0);

  useEffect(() => {
    const ok = Number((onText / typing.length) * 100).toFixed(2);
    props.setAccuracy(ok);
  }, [text]);

  // 타수 계산 + infinity 방지
  useEffect(() => {
    if (onText > 0 && text.length > 0 && props.pastTime > 0) {
      const typing = Math.floor(Number((onText / props.pastTime) * 60));
      props.setTyping(typing == Infinity ? 0 : typing);
      console.log(typing, '2222');
    }
  }, [props.pastTime]);

  // input focus이동
  useEffect(() => {
    const type = document.getElementById(`num${props.focusIndex}`);
    if (type || props.accuracy == 100) {
      (type as HTMLInputElement)?.focus();
    }
  }, [props.focusIndex]);

  const AddFunc = (a: number, b: number, c: number) => {
    props.setTotalErrors((prev: string[]) => [...prev, String(a)]);
    props.setTotalAccuracy((prev: string[]) => [...prev, String(b)]);
    props.setTotalTyping((prev: string[]) => [...prev, String(c)]);
  };
  useEffect(() => {
    if (enter) {
      AddFunc(props.errorCount, props.accuracy, props.typing);
      props.setTyping(0);
      props.setAccuracy(0);
    }
  }, [enter]);

  const activeEnter = (e: any) => {
    if (text.length !== 0 && e.key === 'Enter') {
      setIsEnter(true);
      if (props.focusIndex < props.inputCount - 1) {
        props.setFocusIndex(props.focusIndex + 1);
      } else {
        clearInterval(intervalRef.current);
        setTime(0);
        setRunning(false);
        console.log(props.totalErrors, 'errorArr');
        console.log(props.totalAccuracy, 'accArr');
        console.log(props.totalTyping, 'typingArr');
        localStorage.setItem(
          'data',
          JSON.stringify({
            Times: String(time),
            Errors: String(props.sumError),
            Accuracys: props.avgAcc,
            Typings: props.avgTyping,
          })
        );
      }
      setIsTyping(false);
    }
  };

  const target: any = document.getElementById(`num0`);
  if (target?.value?.length > 0) {
    if (!running) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1000);
      }, 1000);
      setRunning(true);
    }
  }

  // 복사 금지
  window.addEventListener('copy', (e: any) => {
    e.preventDefault();
    e.clipboardData.setData('Text', '복사 금지!!');
  });
  return (
    <TypingInputStyle>
      <div className="codeWrap">
        <div>
          <p>{props.code}</p>
          <Input
            className={`${color === true ? ' black' : ' red'} `}
            id={`num${props.indexNumber}`}
            onChange={(e) => inputChange(e.target.value)}
            onKeyDown={(e) => activeEnter(e)}
            autoFocus={props.focusIndex === props.indexNumber}
          />
        </div>
      </div>
    </TypingInputStyle>
  );
};

export default TypingInput;
// 전체시간 기록
// const startStopwatch = () => {
//   if (!running) {
//     intervalRef.current = setInterval(() => {
//       setTime((prevTime) => prevTime + 1000);
//     }, 1000);
//     setRunning(true);
//   } else {
//     clearInterval(intervalRef.current);
//     setRunning(false);
//   }
// };

// const resetStopwatch = () => {
//   clearInterval(intervalRef.current);
//   setTime(0);
//   setRunning(false);
// };

// useEffect(() => {
//   if (isTyping) {
//     setTotalErrors(allErrors(codeJoin, text));
//   }
//   // console.log(totalErrors, 'd!!!!!!!!!!!!!');
// }, [isTyping, pro]);

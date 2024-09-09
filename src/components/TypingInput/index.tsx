import { Input } from 'antd';
import { useEffect, useRef } from 'react';
import { TypingInputStyle } from './style';

interface CodeProps {
  code: string;
  color: boolean;
  inputChange(target: string): void;
  inputRef(el: any): void;
  keydown(e: any): void;
}

const TypingInput = (props: CodeProps) => {
  const inputRef = useRef<any>(null);

  useEffect(() => {
    props.inputRef(inputRef.current);
  }, []);

  return (
    <TypingInputStyle>
      <div className="codeWrap">
        <div>
          <p>{props.code}</p>
          <Input
            className={props.color === true ? ' black' : ' red'}
            ref={inputRef}
            onChange={(e) => props.inputChange(e.target.value)}
            onKeyDown={(e) => props.keydown(e)}
          />
        </div>
      </div>
    </TypingInputStyle>
  );
};

export default TypingInput;

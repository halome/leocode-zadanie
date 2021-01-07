import React, { memo, useEffect, useRef, useState } from 'react';
import * as S from './style/SearchInput.style';
import { useIntl } from 'react-intl';
import { throttle as _throttle } from 'lodash';
import messages from './SearchInput.message';

interface Props {
  disabled?: boolean;
  onValueChange?: (value: string) => void;
  throttle?: number;
}

export const SearchInput: React.FC<Props> = memo(
  ({ disabled = false, onValueChange, throttle = 500 }) => {
    const { formatMessage } = useIntl();
    const [currentValue, setValue] = useState('');

    const throttled = useRef(
      _throttle((value) => {
        onValueChange?.(value);
      }, throttle),
    );

    useEffect(() => throttled.current(currentValue), [currentValue]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return (
      <S.Container>
        <S.StyledInput
          value={currentValue}
          placeholder={formatMessage(messages.placeholder)}
          disabled={disabled}
          onChange={onChange}
        />
      </S.Container>
    );
  },
);

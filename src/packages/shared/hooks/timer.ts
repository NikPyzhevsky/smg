import { useCallback, useMemo, useRef, useState } from 'react';

import { useUnmount } from './lifecycle';

export const useTimer = () => {
  const [value, setValue] = useState(0);
  // @ts-expect-error ts issue
  const timer = useRef<ReturnType<typeof setInterval>>();

  useUnmount(() => {
    if (timer.current) {
      clearInterval(timer.current);
    }
  });

  const startTimer = useCallback(
    (initValue: number, valueInterval: number, timeInterval = 1000) => {
      setValue(initValue);
      timer.current = setInterval(() => {
        setValue((prev) => prev + valueInterval);
      }, timeInterval);
    },
    []
  );

  const stopTimer = useCallback(() => {
    if (timer.current) {
      clearInterval(timer.current);
    }

    setValue(0);
  }, []);

  return useMemo(
    () => ({
      startTimer,
      stopTimer,
      value,
    }),
    [value, stopTimer, startTimer]
  );
};

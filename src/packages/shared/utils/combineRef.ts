import { type Ref, type RefCallback } from 'react';

export const combineRef = <T>(...refs: (Ref<T> | undefined)[]): RefCallback<T> => {
  return (element) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(element);
      } else if (ref) {
        // eslint-disable-next-line no-param-reassign, @typescript-eslint/no-explicit-any
        (ref as any).current = element;
      }
    });
  };
};

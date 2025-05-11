import { useEffect, useLayoutEffect, useRef, type EffectCallback, DependencyList } from 'react';

export const useMount = (effect: EffectCallback) => {
  useEffect(effect, []);
};

export const useLayoutMount = (effect: EffectCallback) => {
  useLayoutEffect(effect, []);
};

export const useUnmount = (effect: () => void) => {
  const effectRef = useRef(effect);

  // eslint-disable-next-line react-compiler/react-compiler
  effectRef.current = effect;

  useMount(() => {
    return () => {
      effectRef.current();
    };
  });
};

export const useIsMountedRef = () => {
  const isMountedRef = useRef(false);

  useMount(() => {
    isMountedRef.current = true;
  });

  return isMountedRef;
};

export const useDidUpdate = (callback: () => void, deps: DependencyList): void => {
  const isMount = useRef(false);

  useEffect(() => {
    if (isMount.current) {
      return callback();
    }

    isMount.current = true;

    return undefined;
  }, deps);
};

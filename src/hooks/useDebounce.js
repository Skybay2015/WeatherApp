import { useCallback, useRef } from 'react';

export function useDebounce(callback, delay, callbackParams) {
   const timer = useRef();

   const debouncedCallback = useCallback(() => {
      if (timer.current) {
         clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
         callback(callbackParams);
      }, delay);
   }, [callback, delay, callbackParams]);

   return debouncedCallback;
}

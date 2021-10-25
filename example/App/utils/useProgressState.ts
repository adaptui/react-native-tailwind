import React from 'react';

export const useProgressState = (
  initialValue: number | null = 0
): [number | null, React.Dispatch<React.SetStateAction<number | null>>] => {
  const [value, setValue] = React.useState<number | null>(initialValue);

  React.useEffect(() => {
    const clearId = setInterval(() => {
      setValue((prevValue) => {
        if (prevValue === null) {
          return prevValue;
        }
        return prevValue + 5;
      });
    }, 500);

    if (value === 100) {
      clearInterval(clearId);
    }

    return () => {
      clearInterval(clearId);
    };
  }, [setValue, value]);

  return [value, setValue];
};

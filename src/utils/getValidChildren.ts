import React from 'react';

export const getValidChildren = (
  children: React.ReactNode
): React.ReactElement[] => {
  return React.Children.toArray(children).filter((child) =>
    React.isValidElement(child)
  ) as React.ReactElement[];
};

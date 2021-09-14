import React, { FC, Fragment } from 'react';

export interface RxIfProps {
  condition: boolean;
}

const RxIf: FC<RxIfProps> = ({ condition, children }) => {
  return condition === true
    ? <Fragment>{children}</Fragment>
    : null;
};

export default RxIf;

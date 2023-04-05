import * as React from "react";

import STYLE from './Hello.module.scss';

export type HelloProps = {
  compiler: string;
  framework: string;
}

export const Hello = (props: HelloProps) => (
  <div className={STYLE.Hello}>
    Hello from {props.compiler} and {props.framework}!
  </div>
);

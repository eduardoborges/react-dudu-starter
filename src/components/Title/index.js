// @flow

import React from "react";

type Props = {
  children: string,
  foo: string
};

function Title(props: Props) {
  return <h1>{props.children}</h1>;
}

export default Title;

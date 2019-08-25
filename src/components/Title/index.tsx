import * as React from 'react';


interface OwnProps {
  isBigger? : boolean
}

type Props = OwnProps;


const Title : React.FC<Props> = (props) => {
  const { children } = props;
  return (<h1>{children}</h1>);
};

export default Title;

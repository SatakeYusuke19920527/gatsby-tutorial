import React from 'react';
interface PropsType {
  headerText: string;
}
const Header: React.FC<PropsType> = (props) => {
  return <h1>{props.headerText}</h1>;
};

export default Header;

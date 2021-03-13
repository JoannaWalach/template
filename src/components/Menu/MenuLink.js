import React, { useState } from 'react';

function MenuLink({ to, title, isActive }) {
  const styles = {
    backgroundColor: 'red'
  }
  const [active, setActive] = useState(isActive);
  const clickHandler = () => {
    setActive(true)
  }
  return (
    <>
      {
        active ?
          <a style={styles} href={to} onClick={clickHandler}>{title}</a>
        : <a href={to} title={title} onClick={clickHandler}>{title}</a>
        }
    </>
  );
}

export default MenuLink;
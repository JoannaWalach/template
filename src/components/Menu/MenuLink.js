import React from 'react';

        function MenuLink({ to, title}) {
            return (
          
              <a  href = {to}>{title}
              </a>
            );
          }

export default MenuLink;
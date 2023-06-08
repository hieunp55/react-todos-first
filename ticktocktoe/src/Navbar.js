import React, { useState, useEffect, useRef } from "react";
import { useOnClickOutside } from "./useOnClickOutside";

const Navbar = ()  => { 
  const [dropdown, setDropdown] = useState(false);

  const ref = useRef();
  console.log(ref);
  
  useEffect(() => {
    document.title = `Current state value: ${dropdown}`;
  }, [dropdown]);

  useOnClickOutside(ref, dropdown, () => setDropdown(false));
  
  console.log(useState(false));
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li ref={ref}>
          <button onClick={() => setDropdown(!dropdown)}> 
            Services <span>&#8595;</span>
          </button>
          {dropdown && (<ul>
              <li>Design</li>
              <li>Development</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

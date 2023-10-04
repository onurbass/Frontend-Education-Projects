import cn from "classnames";

import "./index.scss";

const Anchor = ({ className, children, purple, ...otherProps }) => {
  return (
    <a
      className={cn("anchor", className, {
        purple,
      })}
      {...otherProps}
    >
      {children}
    </a>
  );
};

export default Anchor;

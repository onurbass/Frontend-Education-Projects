import React, { useState } from "react";
import cn from "classnames";

import "./index.scss";

const Tabs = ({ items, defaultActiveKey, onChange }) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey || items[0]?.key);

  const onClickTab = (key) => {
    setActiveKey(key);
    onChange(key);
  };

  return (
    <div className="tabs">
      {items?.map((item) => (
        <button
          className={cn("tabs-tab", { active: item.key === activeKey })}
          key={item.key}
          onClick={() => onClickTab(item.key)}
        >
          {item.label}
        </button>
      ))}
      <div>{items.find((item) => item.key === activeKey).children}</div>
    </div>
  );
};

export default Tabs;

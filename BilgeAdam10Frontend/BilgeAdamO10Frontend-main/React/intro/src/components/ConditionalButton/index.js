import React, { useState } from "react";

const ConditionalButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onChangeCheckbox = (e) => {
    setIsVisible(e.target.checked);
  };

  return (
    <>
      <input type="checkbox" onChange={onChangeCheckbox} />
      {isVisible && <button>Button</button>}
    </>
  );
};

export default ConditionalButton;

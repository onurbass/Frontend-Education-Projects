import { Typography } from "antd";

import "./index.scss";

const { Text } = Typography;

const Episode = ({ title, children, href }) => {
  return (
    <div className="episode">
      <Text className="episode-title" type="secondary">
        {title}
      </Text>
      <a className="episode-anchor" href={href} target="_blank" rel="noreferrer noopener">
        {children}
      </a>
    </div>
  );
};

export default Episode;

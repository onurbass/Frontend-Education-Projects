import { Pagination as Pagie } from "antd";

const Pagination = ({ total, onChange, current }) => {
  return (
    <Pagie
      defaultCurrent={current}
      current={current}
      total={total}
      pageSize={20}
      showSizeChanger={false}
      onChange={onChange}
    />
  );
};

export default Pagination;

import { Table } from "antd";

const CustomTable = ({
  data = [],
  tableHeadData,
  defaultPagination = false,
  pagination = false,
  ...props
}) => {
  return (
    <div className="tableWrapper">
      <Table
        size="large"
        columns={tableHeadData?.map((data) => ({
          render: (text, record, i) => {
            return <p key={i}>{text}</p>;
          },
          ...data,
        }))}
        pagination={
          !!defaultPagination
            ? {
                defaultPageSize: 7,
              }
            : pagination
        }
        dataSource={data}
        {...props}
      />
    </div>
  );
};

export default CustomTable;

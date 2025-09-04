import { Radio } from "antd";

const CustomButtonRadio = ({
  value,
  onChange,
  className,
  children,
  label,
  ...props
}) => {
  return (
    <div className={`radioWrapper ${className}`}>
      {label ? (
        <div className="mb-2">
          <label className="font-medium text-brandBlack">{label}</label>
        </div>
      ) : null}
      <div className="">
        <Radio.Group
          block
          onChange={onChange}
          value={value}
          optionType="button"
          className="!gap-2"
          {...props}
        >
          {children}
        </Radio.Group>
      </div>
    </div>
  );
};

export default CustomButtonRadio;

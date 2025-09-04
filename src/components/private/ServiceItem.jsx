import { Badge } from "antd";

export const RoundedItem = ({ data, value, textStyle = "text-sm" }) => {
  const Icon = data.icon;
  return (
    <div className="px-3 py-2">
      <div className="flex items-center gap-3">
        <Icon
          size={20}
          color={
            value === data.value
              ? "var(--color-brandBlack)"
              : "var(--color-brandAsh-500)"
          }
        />
        <p
          className={`text-start leading-5 ${
            value === data.value ? "text-brandBlack" : "text-brandAsh"
          } ${textStyle}`}
        >
          {data.description}
        </p>
      </div>
    </div>
  );
};

const ServiceItem = ({
  data,
  iconColor,
  iconWrapperBg,
  value,
  textStyle = "text-xs",
  showdefault,
  price,
}) => {
  return (
    <div className="p-3">
      {data.img ? <img src={data.img} className="w-7 object-fit" /> : null}
      {data.icon ? (
        <div className="flex flex-col lg:flex-row items-center gap-3">
          <div
            className={`w-8 h-8 rounded-md flex items-center justify-center ${iconWrapperBg}`}
          >
            <data.icon size={20} color={iconColor} />
          </div>
          <div className="flex items-center gap-2">
            <h1 className="font-semibold text-[10px] md:text-sm text-brandBlack">
              {data.title}
            </h1>
            {showdefault ? (
              <p className="text-[10px] md:text-xs text-brandAsh">Default</p>
            ) : null}
            {price ? (
              <Badge
                count={`₦5,000`}
                style={{
                  backgroundColor: "var(--color-brandPink-100)",
                  color: "var(--color-brandPink)",
                  fontSize: "12px",
                }}
              />
            ) : null}
          </div>
        </div>
      ) : null}
      <p
        className={`text-start mt-3 leading-5 ${
          value === data.value ? "text-brandBlack" : "text-brandAsh"
        } ${textStyle}`}
      >
        {data.description}
      </p>
    </div>
  );
};

export default ServiceItem;

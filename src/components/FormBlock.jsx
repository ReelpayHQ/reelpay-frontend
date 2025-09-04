const FormBlock = ({
  title,
  style = "py-4",
  children,
  childrenStyle = "px-5 mt-4",
  renderText,
}) => {
  return (
    <div className={`rounded-lg bg-white shadow-formblock ${style}`}>
      <div className="flex items-center justify-between  border-b border-brandAsh-900 px-5 pb-2">
        {title ? (
          <h1 className="font-semibold text-size16 text-brandBlack">{title}</h1>
        ) : null}
        {renderText}
      </div>
      <div className={`${childrenStyle}`}>{children}</div>
    </div>
  );
};

export default FormBlock;

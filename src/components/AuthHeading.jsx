const AuthHeading = ({
  heading,
  title,
  ctaText,
  subtext,
  iconWrapperBg,
  Icon,
  iconProps,
}) => {
  return (
    <div className="flex flex-col items-center">
      {Icon ? (
        <div
          className={`h-14 w-14 rounded-full ${
            iconWrapperBg || "bg-brandAsh-600"
          } flex items-center justify-center mb-7`}
        >
          <Icon size={25} color="var(--color-brandAsh)" {...iconProps} />
        </div>
      ) : null}
      <h1 className="text-size32 font-semibold text-brandBlack flex items-center gap-1">
        {heading}
        {ctaText ? <p className="text-brandPink">{ctaText}</p> : null}
      </h1>
      {subtext ? subtext : null}
      <p className="text-xs text-center text-brandAsh">{title}</p>
    </div>
  );
};

export default AuthHeading;

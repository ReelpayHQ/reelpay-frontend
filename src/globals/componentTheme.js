import { Checkbox } from "antd";

export const componentTheme = {
  token: {
    borderRadius: 8,
    // controlHeight: 44,
  },
  components: {
    Button: {
      defaultBorderColor: "var(--color-brandAsh-100)",
      defaultActiveBg: "",
      defaultActiveBorderColor: "var(--color-brandPink)",
      defaultActiveColor: "var(--color-brandPink)",
      defaultColor: "var(--color-brandAsh-200)",
      defaultHoverBg: "",
      defaultHoverBorderColor: "",
      defaultHoverColor: "",
      colorPrimary: "var(--color-brandPink)",
      colorBgContainerDisabled: "var(--color-brandPinkDisabled)",
      colorTextDisabled: "",
      borderColorDisabled: "",
      colorPrimaryActive: "",
      fontWeight: 500,
      contentFontSize: "14px",
      colorPrimaryHover: "",
      controlHeight: 44,
    },
    Input: {
      activeBorderColor: "var(--color-brandPink)",
      hoverBorderColor: "var(--color-brandPink)",
      colorBorder: "var(--color-brandAsh-400)",
      controlHeight: 44,
      colorIcon: "var(--color-brandAsh)",
      colorError: "var(--color-brandRed)",
    },
    Checkbox: {
      colorPrimaryHover: "",
      colorPrimaryBorder: "var(--color-brandAsh)",
      colorPrimary: "var(--color-brandBlack)",
      borderRadiusSM: 2,
    },
  },
};

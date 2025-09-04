import { Checkbox } from "antd";

export const componentTheme = {
  token: {
    borderRadius: 8,
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
      colorPrimaryHover: "var(--color-brandPinkHover)",
      controlHeight: 44,
    },
    Input: {
      activeBorderColor: "var(--color-brandPink)",
      hoverBorderColor: "var(--color-brandPink)",
      colorBorder: "var(--color-brandAsh-400)",
      controlHeight: 48,
      colorIcon: "var(--color-brandAsh)",
      colorError: "var(--color-brandRed)",
    },
    Select: {
      activeBorderColor: "var(--color-brandPink)",
      hoverBorderColor: "var(--color-brandPink)",
      colorBorder: "var(--color-brandAsh-400)",
      controlHeight: 48,
      colorIcon: "var(--color-brandAsh)",
      colorError: "var(--color-brandRed)",
      optionSelectedBg: "var(--color-brandPink)",
      colorTextPlaceholder: "var(--color-brandAsh-400)",
    },
    Checkbox: {
      colorPrimaryHover: "",
      colorPrimaryBorder: "var(--color-brandAsh)",
      colorPrimary: "var(--color-brandBlack)",
      borderRadiusSM: 2,
    },
    Tabs: {
      inkBarColor: "var(--color-brandPink)",
      itemColor: "var(--color-brandAsh)",
      itemActiveColor: "var(--color-brandPink)",
      itemHoverColor: "",
      itemSelectedColor: "var(--color-brandPink)",
      titleFontSize: "14px",
      colorPrimaryBorder: "red",
    },
    Table: {
      headerBg: "",
      headerSplitColor: "",
    },
    Dropdown: {
      controlItemBgHover: "",
      controlPaddingHorizontal: 0,
    },
  },
};

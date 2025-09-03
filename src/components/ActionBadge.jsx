import { Badge } from "antd";
import React from "react";

const ActionBadge = ({ action, noAction }) => {
  return (
    <Badge
      count={`${action}`}
      style={{
        backgroundColor: noAction
          ? "rgba(228, 252, 236, 1)"
          : "rgba(245, 243, 255, 1)",
        color: noAction ? "rgba(22, 163, 74, 1)" : "rgba(109, 40, 216, 1)",
        fontSize: "14px",
        fontWeight: "500",
        height: "27px",
        borderRadius: "100px",
        display: "flex",
        alignItems: "center",
        padding: "0px 20px",
      }}
    />
  );
};

export default ActionBadge;

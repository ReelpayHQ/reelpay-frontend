import { PiTrashBold } from "react-icons/pi";

const DeleteIcon = ({
  onClick,
  size = 20,
  color = "var(--color-brandPdfRed)",
}) => {
  return (
    <PiTrashBold
      size={size}
      color={color}
      className="cursor-pointer"
      onClick={onClick}
    />
  );
};

export default DeleteIcon;

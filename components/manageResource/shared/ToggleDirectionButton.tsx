import ToggleButton from "./ToggleButton";

interface ToggleDirectionButtonProps {
  isRTL: boolean;
  toggleDirection: () => void;
}

const ToggleDirectionButton = ({
  isRTL,
  toggleDirection,
}: ToggleDirectionButtonProps) => {
  return (
    <ToggleButton
      defaultIsChecked={isRTL}
      label="Arabic"
      onChange={toggleDirection}
    />
  );
};

export default ToggleDirectionButton;

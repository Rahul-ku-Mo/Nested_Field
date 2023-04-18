import { useState } from "react";
import Switch from "react-switch";

interface SwitchProps {
  checked: boolean;
  setChecked: (value: boolean) => void;
}
const SwitchField: React.FC<SwitchProps> = ({ checked , setChecked }) => {
 

  const handleSwitch = () => {
    setChecked(!checked);
  };

  return <Switch onChange={handleSwitch} checked={checked} />;
};

export default SwitchField;

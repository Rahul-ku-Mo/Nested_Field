import React, { useState } from "react";

interface InputFieldProps {
  focused: boolean;
  value: string;

  setFocusOpen: (e: React.MouseEvent) => void;
  setFocusClose: () => void;
  onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  focused,
  setFocusOpen,
  setFocusClose,
  value = "",
  onChangeValue,
}) => {
  return (
    <>
      {focused ? (
        <input
          placeholder="AddName...."
          className="p-1 min-w-[80px] rounded-md bg-white"
          value={value}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              setFocusClose();
            }
          }}
          onChange={onChangeValue}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      ) : (
        <div className="p-1 min-w-[80px] rounded-md" onClick={setFocusOpen}>
          {value || "Enter..."}
        </div>
      )}
    </>
  );
};

/**TODO: onkeypress enter */
export default InputField;

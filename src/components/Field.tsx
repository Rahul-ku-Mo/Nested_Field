import React, { useContext, useState } from "react";
import { FieldDataContext } from "../context/FieldProvider";
import { v4 as uuid } from "uuid";
import { FieldDataType } from "../utils/_mockData";
import useTraversal from "../hooks/useTraversal";
import InputField from "./shared/InputField";
import SelectField from "./shared/SelectField";
import { MdAdd, MdDelete, MdOutlineUpdate } from "react-icons/md";

import SwitchField from "./shared/SwitchField";
import { useSnackbar } from "notistack";

interface FieldProps {
  field: FieldDataType;
}

const Field: React.FC<FieldProps> = ({ field }) => {
  const [inputValue, setInputValue] = useState<string>(field.fieldType);
  const [focused, setFocused] = useState<boolean>(false);
  const [value, setValue] = useState(field.fieldName);
  const [checked, setChecked] = useState<boolean>(field.isRequired);

  let id = uuid().slice(0, 8);

  const { fieldData, setFieldData } = useContext(FieldDataContext);
  const { enqueueSnackbar } = useSnackbar();
  let newField = {
    fieldName: "",
    fieldType: "String",
    isRequired: false,
    fieldId: id,
    fieldChildren: [],
  };

  const { insertField, deleteField, updateField } = useTraversal();

  const setFocusOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFocused(true);
  };

  const setFocusClose = () => {
    setFocused(false);
  };

  const onChangeInputField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleDeleteField = (fieldId: string) => {
    const newFieldData = deleteField(fieldId, fieldData);
    setFieldData(newFieldData);
  };

  const handleUpdateField = (fieldId: string) => {
    const updatedField = {
      fieldName: value,
      fieldId: field.fieldId,
      fieldType: inputValue,
      fieldChildren: field.fieldChildren,
      isRequired: field.isRequired,
    };

    const updatedData = updateField(fieldId, updatedField, fieldData);
    setFieldData(updatedData);
  };
  return (
    <div
      className="border-b-2 p-2 border-l-2 shadow-lg flex items-center justify-between mt-2 rounded-md transition hover:bg-slate-400/20"
      onClick={setFocusClose}
    >
      <div className="flex gap-2">
        <InputField
          focused={focused}
          setFocusOpen={setFocusOpen}
          setFocusClose={setFocusClose}
          value={value}
          onChangeValue={onChangeInputField}
        />
        <SelectField inputValue={inputValue} setInputValue={setInputValue} />
      </div>
      <div className="flex gap-4 items-center">
        <SwitchField checked={checked} setChecked={setChecked} />
        <MdDelete
          className="cursor-pointer hover:bg-slate-400 transition "
          onClick={() => {
            handleDeleteField(field.fieldId);
          }}
        />
        {inputValue === "Object" ? (
          <MdAdd
            className="cursor-pointer transition hover:rotate-90"
            onClick={() => {
              setFieldData((prevData) =>
                insertField(newField, field.fieldId, prevData)
              );
              enqueueSnackbar("Sub-field added Successfully 💥", {
                variant: "success",
              });
            }}
          />
        ) : null}

        <MdOutlineUpdate
          className="cursor-pointer transition ease-out hover:scale-125"
          onClick={() => {
            handleUpdateField(field.fieldId);
            enqueueSnackbar("Field Updated Successfully", {
              variant: "success",
            });
          }}
        />
      </div>
    </div>
  );
};

export default Field;

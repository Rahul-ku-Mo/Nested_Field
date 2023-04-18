import React, { useContext } from "react";
import { GrAdd } from "react-icons/gr";
import { useSnackbar } from "notistack";
import { v4 as uuid } from "uuid";
import { FieldDataContext } from "../context/FieldProvider";
import FieldList from "./FieldList";

const Container: React.FC = () => {
  const { fieldData, setFieldData } = useContext(FieldDataContext);
  const { enqueueSnackbar } = useSnackbar();
  const addFieldatTopLevel = () => {
    let id = uuid().slice(0, 8);

    let newField = {
      fieldName: "Enter",
      fieldType: "String",
      isRequired: false,
      fieldId: id,
      fieldChildren: [],
    };
    setFieldData((prevData) => [...prevData, newField]);
  };


  return (
    <div className="w-[500px] my-2 p-4 mx-auto">
      <div className="bg-slate-100 py-4 px-2 flex items-center rounded-md justify-between">
        <span className="font-bold text-slate-600"> Field name and type</span>
        <GrAdd
          className="cursor-pointer transition hover:rotate-180"
          onClick={() => {
            addFieldatTopLevel();
            enqueueSnackbar("Field added successfully 🫡" ,{ variant: "success" })
          }}
        />
      </div>

      <FieldList fieldData={fieldData} />
    </div>
  );
};

export default Container;

import { createContext, useState } from "react";
import { FieldDataType, fieldData as FD } from "../utils/_mockData";

interface FieldDataContext {
  fieldData: FieldDataType[];
  setFieldData: React.Dispatch<React.SetStateAction<FieldDataType[]>>;
}

export const FieldDataContext = createContext<FieldDataContext>({
  fieldData: [],
  setFieldData: () => {},
});

interface FieldDataProviderProps {
  children: React.ReactNode;
}

export const FieldDataProvider: React.FC<FieldDataProviderProps> = ({
  children,
}) => {
  const [fieldData, setFieldData] = useState<FieldDataType[]>(FD);
  
  return (
    <FieldDataContext.Provider value={{ fieldData, setFieldData }}>
      {children}
    </FieldDataContext.Provider>
  );
};

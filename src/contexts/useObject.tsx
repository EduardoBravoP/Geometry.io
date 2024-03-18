import { createContext, useContext, useState } from "react";
import { ObjectSettingsProps } from "../repositories/dtos/RenderDTO";

interface ObjectContextProps {
  objectSettings: ObjectSettingsProps;
  setObjectSettings: React.Dispatch<React.SetStateAction<ObjectSettingsProps>>
}

const ObjectContext = createContext<ObjectContextProps | null>(null)

const ObjectContextWrapper = ({children}: {children: React.ReactNode}) => {
  const [objectSettings, setObjectSettings] = useState<ObjectSettingsProps | null>(null)

  return (
    <ObjectContext.Provider value={{
      objectSettings,
      setObjectSettings
    }}>
      {children}
    </ObjectContext.Provider>
  )
}

const useObject = () => useContext(ObjectContext)

export { ObjectContextWrapper, useObject }
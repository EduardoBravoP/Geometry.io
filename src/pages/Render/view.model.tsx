import { useEffect, useState } from 'react'
import defaultConfig from '../../../remote_config_defaults.json'
import { ObjectSettingsProps } from './interface'

const useRenderViewModel = () => {
  const [objectSettings, setObjectSettings] = useState<ObjectSettingsProps>({} as ObjectSettingsProps)
    
  const getObjectsSettings = () => {
    const objectSettings: ObjectSettingsProps = {} as ObjectSettingsProps

    for (const [key, value] of Object.entries(defaultConfig)) {
      objectSettings[key] = JSON.parse(value)
    }

    setObjectSettings(objectSettings)
  }

  useEffect(() => {
    getObjectsSettings()
  }, [])

  return {
    objectSettings
  }
}

export default useRenderViewModel;
import { useEffect, useState } from 'react'
import { getObjectsDefaultConfig, getUserSettings } from '../../repositories/render.repository'
import { auth } from '../../repositories/client'
import { useObject } from '../../contexts/useObject'

const useRenderViewModel = () => {
  const { objectSettings, setObjectSettings } = useObject()

  const getObjectsSettings = async () => {
    const user = auth.currentUser
    const userSettings = await getUserSettings(user.uid)

    if (userSettings) {
      setObjectSettings(userSettings)
    } else {
      setObjectSettings(getObjectsDefaultConfig())
    }
  }

  useEffect(() => {
    getObjectsSettings()
  }, [])

  return {
    objectSettings
  }
}

export default useRenderViewModel;
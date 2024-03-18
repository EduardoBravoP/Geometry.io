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
      // await saveUserSettings(user.uid, {
      //   object1: {shape:"cube",color:"#FF00FF",rotation:90},
      //   object2: {shape:"cone",color:"#2fff00",rotation:45},
      //   object3: {shape:"dodecahedron",color:"#FFFF00",rotation:0}
      // })

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
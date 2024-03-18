import { ObjectSettingsProps } from "./dtos/RenderDTO"
import defaultConfig from '../../remote_config_defaults.json'
import { database } from "./client"
import { child, get, ref, set } from "firebase/database"

export const getObjectsDefaultConfig = () => {
  const objectSettings: ObjectSettingsProps = {} as ObjectSettingsProps

    for (const [key, value] of Object.entries(defaultConfig)) {
      objectSettings[key] = JSON.parse(value)
    }

    return objectSettings
}

export const saveUserSettings = async (
  userId: string,
  settings: ObjectSettingsProps
) => {
  await set(ref(database, 'users/' + userId), settings);
}

export const getUserSettings = async (userId: string): Promise<ObjectSettingsProps | null> => {
  try {
    const dbRef = ref(database);

    const snapshot = await get(child(dbRef, `users/${userId}`))

    if (snapshot.exists()) {
      const userSettings = snapshot.val()

      return userSettings
    }
  } catch (err) {
    console.error(err);
  }

  return null
}
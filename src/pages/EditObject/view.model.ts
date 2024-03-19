import { useState } from "react"
import { useObject } from "../../contexts/useObject"
import { ObjectModel } from "../../common/models/object.model"
import { useNavigation } from "@react-navigation/native"
import { saveUserSettings } from "../../repositories/render.repository"
import { auth } from "../../repositories/client"

const useEditObjectViewModel = (object: number) => {
  const { objectSettings, setObjectSettings } = useObject()
  const currentObject: ObjectModel = objectSettings[`object${object}`]

  const navigation = useNavigation()

  const [selectedColor, setSelectedColor] = useState(currentObject.color)
  const [selectedShape, setSelectedShape] = useState(currentObject.shape)
  const [rotation, setRotation] = useState(currentObject.rotation)

  const shapesSelect = [
    {
      label: 'Cubo',
      value: 'cube'
    },
    {
      label: 'Cone',
      value: 'cone'
    },
    {
      label: 'Dodecaedro',
      value: 'dodecahedron'
    },
  ]

  const colorsSelect = ['#FF0000', '#00FF00', '#0000FF', '#FF6400', '#FFFF00',
    '#AD00FF', '#00FFF0', '#FF0099'
  ]

  const onSubmit = async () => {
    const user = auth.currentUser
    const newUserSettings = {
      ...objectSettings,
      [`object${object}`]: {
        color: selectedColor,
        shape: selectedShape,
        rotation
      }
    }

    await saveUserSettings(user.uid, newUserSettings)

    setObjectSettings(newUserSettings)

    navigation.goBack()
  }

  return {
    shapesSelect,
    colorsSelect,
    objectSettings,
    setObjectSettings,
    selectedColor,
    setSelectedColor,
    selectedShape,
    setSelectedShape,
    rotation,
    setRotation,
    onSubmit
  }
}

export default useEditObjectViewModel;
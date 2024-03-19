import { ThemeProvider } from "styled-components/native"
import themes from "../../themes"
import EditObject from "./view"
import { RouteProp } from "@react-navigation/native"
import { SettingsStackParamList } from "../../@types/navigation"
import { render, renderHook } from "@testing-library/react-native"
import { ObjectSettingsProps } from "../../repositories/dtos/RenderDTO"
import useEditObjectViewModel from "./view.model"

jest.mock('../../repositories/render.repository', () => {
  return {
    getObjectsDefaultConfig: jest.fn(),
    saveUserSettings: jest.fn(),
    getUserSettings: jest.fn()
  }
})

jest.mock('../../repositories/client', () => {
  return {
    auth: jest.fn(),
  }
})

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn()
  }
})

jest.mock('../../contexts/useObject', () => {
  const fnUseObject = jest.fn().mockImplementation(() => {
    return {
      objectSettings: {
        object1: {
          shape: "cone",
          color: '#FF0000',
          rotation: 120
        }
      } as ObjectSettingsProps,
      setObjectSettings: jest.fn()
    }
  })

  return {
    useObject: fnUseObject
  }
})

describe('<EditObject /> page', () => {
  it('should render the page with default settings', () => {
    const route: RouteProp<SettingsStackParamList, "EditObject"> = {
      name: 'EditObject',
      key: '1',
      params: {
        object: 1
      }
    }

    const {result} = renderHook(() => useEditObjectViewModel(route.params.object))

    expect(result.current.selectedColor).toBe('#FF0000')
    expect(result.current.selectedShape).toBe('cone')
    expect(result.current.rotation).toBe(120)
  })
})
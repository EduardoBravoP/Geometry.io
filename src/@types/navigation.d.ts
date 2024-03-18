import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Render: undefined
  SettingsStack: NavigatorScreenParams<SettingsStackParamList>
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type SettingsStackParamList = {
  Settings: undefined
  EditObject: {
    object: number
  }
}

export type HomeTabScreenProps<T extends keyof SettingsStackParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<SettingsStackParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
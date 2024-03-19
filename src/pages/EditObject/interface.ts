import { StackScreenProps } from '@react-navigation/stack';
import { SettingsStackParamList } from '../../@types/navigation';

export type EditObjectProps = StackScreenProps<SettingsStackParamList, 'EditObject'>;

export interface ColorProps {
  color: string;
}

export interface RingColorProps {
  color: string;
  selected?: boolean;
}

export interface ShapeSelectProps {
  selected?: boolean;
}
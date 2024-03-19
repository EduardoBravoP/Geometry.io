export type ShapesType = 'cube' | 'cone' | 'dodecahedron'

export interface ObjectModel {
  shape: ShapesType;
  color: string;
  rotation: number;
  position?: number[];
}
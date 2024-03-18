const useEditObjectViewModel = () => {
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

  return {
    shapesSelect,
    colorsSelect
  }
}

export default useEditObjectViewModel;
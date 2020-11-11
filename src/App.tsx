import React from 'react'
import { Column } from './Column'
import { AppContainer } from './styles'
import { AddNewitem } from './AddNewItem'
import { useAppState } from './AppStateContext'
import CustomDragLayer from './CustomDragLayer'

function App() {
  const { state, dispatch } = useAppState()
  return (
    <AppContainer>
      <CustomDragLayer />
      {state.lists.map((list, i) => (
        <Column text={list.text} key={list.id} id={list.id} index={i} />
      ))}
      <AddNewitem
        toggleButtonText='+ Add another list'
        onAdd={(text) => dispatch({ type: 'ADD_LIST', payload: text })}
      />
    </AppContainer>
  )
}

export default App

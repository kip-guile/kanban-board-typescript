import React from 'react'
import { Column } from './Column'
import { AppContainer } from './styles'
import { AddNewitem } from './AddNewItem'
import { useAppState } from './AppStateContext'

function App() {
  const { state } = useAppState()
  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column text={list.text} key={list.id} index={i} />
      ))}
      <AddNewitem toggleButtonText='+ Add another list' onAdd={console.log} />
    </AppContainer>
  )
}

export default App

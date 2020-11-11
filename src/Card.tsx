import React, {useRef} from 'react'
import { useDrop } from 'react-dnd'
import { useAppState } from './AppStateContext'
import { useItemDrag } from './useItemDrag'
import { CardDragItem } from './DragItem'
import { CardContainer } from './styles'

interface CardProps {
  text: string
  index: number
  id: string
  columnId: string
}

export const Card = ({ text, index, id, columnId }: CardProps) => {
  const { dispatch } = useAppState()
  const [, drop] = useDrop({
    accept: "CARD",
    hover(item: CardDragItem) {
      if (item.id === id) {
        return
      }

      const dragIndex = item.index
      const hoverIndex = index
      const sourceColumn = item.columnId
      const targetColumn = columnId

      dispatch({
        type: "MOVE_TASK",
        payload: {dragIndex, hoverIndex, sourceColumn, targetColumn}
      })
      item.index = hoverIndex
      item.columnId = targetColumn
    }
  })
  const ref = useRef<HTMLDivElement>(null)
  const { drag } = useItemDrag({ type: 'CARD', id, index, text, columnId })
  drag(drop(ref))
  return <CardContainer ref={ref}>{text}</CardContainer>
}

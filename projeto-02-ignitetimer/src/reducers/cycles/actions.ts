import { Cycle } from './reducer'

export enum ActionType {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED'
}

export function NewCycleAction(newCycle: Cycle) {
  return {
    type: ActionType.ADD_NEW_CYCLE,
    payload: {
      newCycle
    }
  }
}

export function MarkCurrentCycleFinishedAction() {
  return {
    type: ActionType.INTERRUPT_CURRENT_CYCLE
  }
}

export function InterrupedCurrentCycleAction() {
  return {
    type: ActionType.INTERRUPT_CURRENT_CYCLE
  }
}

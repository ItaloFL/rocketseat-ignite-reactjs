import { Play } from 'phosphor-react'
import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCoutdownButton,
  TaskInput
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            type="text"
            list="task-sugestions"
            placeholder="Dê um nome ao seu projeto"
          />

          <datalist id="task-sugestions">
            <option value="Projeto Antares" />
            <option value="Projeto XLAND" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />
          <span>minutos.</span>
        </FormContainer>
        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>
        <StartCoutdownButton type="submit">
          <Play size={24} />
          Começar
        </StartCoutdownButton>
      </form>
    </HomeContainer>
  )
}

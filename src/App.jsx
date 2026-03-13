import ArraySection from "./section/ArraySection"
import ChronosSection from "./section/ChronosSection"
import CounterSection from "./section/CounterSection"
import TicTacToe from "./section/TicTacToe"

const App = () => {
  return (
    <div>
      <CounterSection />
      <ArraySection />
      <ChronosSection />
      <TicTacToe />
    </div>
  )
}

export default App
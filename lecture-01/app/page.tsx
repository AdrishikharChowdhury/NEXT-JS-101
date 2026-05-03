import Hello from "./components/Hello"

const Home = () => {
  console.log('Server Side Component')
  return (
    <div className="text-6xl font-extrabold">
      <Hello />
      Hello World from NEXT JS
    </div>
  )
}

export default Home

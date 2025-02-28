import Logo from "./assets/react.svg"
function App() {
  return (
    <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-blue-100 p-6 shdow-lg outline outline-black/5 ">
        <img className="size-12 shrink-0" src={Logo} alt="logo"/>
        <div>
            <div className={"text-xl font-medium text-black"}>ChitChat</div>
            <p className={"text-gray-500 dark:text-gray-400"}>You have a new message!</p>
        </div>
    </div>
  )
}

export default App

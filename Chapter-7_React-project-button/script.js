

const App = () => {
    const [buttonText, setButtonText] = React.useState("Don't click me")
    console.log(buttonText);

    const onButtonClick = () => {
        setButtonText('Hello from React')
    }

    return (
        <div className="app">
            <button onClick={onButtonClick} >
                {buttonText}
            </button>
        </div>
    )

}

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(<App />)

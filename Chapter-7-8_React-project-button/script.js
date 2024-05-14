

const App = ({initialButtonText, initialClassName}) => {
    const [buttonText, setButtonText] = React.useState(initialButtonText)
    const [buttonColor, setButtonColor] = React.useState(initialClassName)

    console.log(buttonText);

    const onButtonClick = () => {
        setButtonText('Hello from React')
        setButtonColor('green-btn')
    }

    return (
        <div className="app">
            <button className={buttonColor} onClick={onButtonClick} >
                {buttonText}
            </button>
        </div>
    )

}

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(<App initialButtonText='Click me' initialClassName='blue-btn'/>)

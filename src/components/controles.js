
export const Controles = ({ count, setCount }) => {

    const save = (value) => {
        localStorage.setItem("count", value)
    }

    // funcao que salva o contador na variavel de estado e no localStorage
    const setCountAndSave = (newCount) => {
        console.log(newCount)
        setCount(newCount)
        save(newCount)
    }

    // funcao para aumentar o valor
    const aumentarContador = function () {
        const newCount = parseInt(count) + 1
        setCountAndSave(newCount)
    }

    // funcao para diminuir o valor
    const diminuirContador = function () {
        const newCount = parseInt(count) - 1
        setCountAndSave(newCount)
    }

    return (
        <div className="paragrafo">
            <button onClick={aumentarContador}>aumentar</button>
            <button onClick={diminuirContador}>diminuir</button>
        </div>
    );
}

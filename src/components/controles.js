
export const Controles = ({ count, setCount }) => {

    const save = (value) => {
        localStorage.setItem("count", value)
    }

    const setCountAndSave = (newCount) => {
        console.log(newCount)
        setCount(newCount)
        save(newCount)
    }

    const aumentarContador = function () {
        const newCount = parseInt(count) + 1
        setCountAndSave(newCount)
    }

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

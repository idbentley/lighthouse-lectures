

export function Class({id, shortName, name, removeClass}) {
    return (
        <div>
            {shortName} - {name}
            <button onClick={() => removeClass(id)} >Remove</button>
        </div>
    )
}
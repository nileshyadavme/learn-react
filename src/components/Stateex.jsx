import { useState } from "react"

function Stateex() {

    const [friends, setFriend] = useState(["alex"]);
    
    const add = () => setFriend([...friends, "nilesh"])
    
    return (
        <section>
            { friends.map((f) => (
                <li key={Math.random()}>{f}</li>
            ))}

            <button onClick={ add }>Add friend</button>
        </section>
    )
}
export default Stateex

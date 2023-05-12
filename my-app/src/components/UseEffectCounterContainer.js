import React, {useState} from 'react'
import UseEffectCounter from './UseEffectCounter';

// toggles display
function UseEffectCounterContainer() {
    const [display, setDisplay] = useState(true);
    return (
        <div>
            <button onClick={ () => {
                setDisplay(!display)
            }}>
                Toggle Display
            </button>
            {display && <UseEffectCounter />}
        </div>
    )
}

export default UseEffectCounterContainer
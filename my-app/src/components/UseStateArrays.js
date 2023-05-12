import React, {useState} from 'react'

function UseStateArrays() {
    const [nums, setNums] = useState([1,2,3]);
    // Adds 1 number at a time
    const addNums = () => {
        setNums([...nums, nums.length + 1]);
    }
    const removeNum = () => {
        setNums(
            nums.filter((item, idx) => {
                return idx !== nums.length -1;
            })
        )
    }
    // Adds 1 number at a time but hidden then all appear at once if you click add item butotn
    const buggyPushNums = () => {
        nums.push(nums.length + 1);
        setNums(nums);
        console.log(nums);
    }
  return (
    <div>
        <button onClick={addNums}>Add Item</button>
        <button onClick={buggyPushNums}>Buggy Push</button>
        <button onClick={removeNum}>Remove Item</button>

        <ul>
            {nums.map(num => <li key={num}>{num}</li>)}
        </ul>
    </div>
  )
}

export default UseStateArrays
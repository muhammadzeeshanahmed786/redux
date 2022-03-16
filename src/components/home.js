import React from 'react'

export default function Home(props) {
    console.log(props, 'home')
    return (
        <div>
            <h1>Home Components</h1>
            <button onClick={() => {
                props.addData({ name: 'zeeshan', age: '12' })
            }}>Add Data</button>

            <button onClick={() => {
                props.removeData()
            }}>Remove Data</button>
        </div>
    )
}
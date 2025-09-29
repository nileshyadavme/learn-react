import React from 'react'

function UsersInfo() {
    const users = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 22 },
    ];
    return (
        <div>
            {users.map((users) => (
                <div key={users.id}>
                    <h1>name: {users.name}</h1>
                    <h1>age: {users.age}</h1>
                </div>
            ))}
        </div>

    )
}

export default UsersInfo

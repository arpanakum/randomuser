import React from 'react';

function UserList(props) {

    const users = props.userData;
    console.log("userlist component rendered--");
    const userList = users.map((user, i) => {
        return <p key={user.id} className={i % 2 ? 'even' : 'odd'}>{user.name}</p>;
    })

    return (
        <>
            <h2>Random User List</h2>
            <div className="user">

                {userList}
            </div>
        </>
    )
}

export default React.memo(UserList);
import React , {useState,useEffect} from 'react';

function UserList(props) {

    const [data,setData] = useState([]);
  
  
    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {setData(users);});
    }, []);

    
    const userList = {data}.data.map((user, i) => {
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
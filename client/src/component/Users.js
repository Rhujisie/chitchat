

export default function Chat({users, selectUser, online, selectedUser}){

    const usersElem = users?.map((user, index)=> 
    <div key={index} className={`online-user ${selectedUser?._id === user._id?
        'selected-user':''}`} onClick={()=>selectUser(user)}>
        <div className={`avatar`}> {user.username[0]}
            <div className={`${online[user._id]? 'online': ''}`}></div>
        </div>
        <div>{user.username}</div>
    </div>)

    return(
        <div className="users">
            {users && usersElem}
        </div>
    )
}
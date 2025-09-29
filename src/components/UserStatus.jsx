import Greetings from "./Greetings";

function UserStatus({isLogged, isAdmin}) {
    if(isLogged && isAdmin)
    {
        return <Greetings who="admin"/>
    }
    else{
        return <Greetings who="User" />
    }
}

export default UserStatus

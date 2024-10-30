const Permission = (props) => {
  if (props.IsAdmin && props.LoggedIn){
    return <h1>you are Admin</h1>
  }else{
    return <h1>you are not admin</h1>
  }
}

export default Permission
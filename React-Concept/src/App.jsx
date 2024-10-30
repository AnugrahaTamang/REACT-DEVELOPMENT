import Permission from "./WeatherComponent/Permission";
import Weather from "./WeatherComponent/Weather";

const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Invalid password</h1>;

const Password = ({isvalid}) =>{
 return isvalid ? < ValidPassword /> : <InvalidPassword/>;
}

function App() {
  return (
    <>  
    <Password isvalid = {false}/>
    <Weather/>
    <Permission IsAdmin = {true} LoggedIn = {true}/>
    </>
     
  );
};
export default App;

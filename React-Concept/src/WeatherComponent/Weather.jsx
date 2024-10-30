
const Weather = () => {

    const temp = 18;
    if (temp >20){
        return <h1>it's so cold outside</h1>;
    }else if (temp >10 && temp <20){
        return <h1>it's good</h1>;
    }else{
        return <h1>it's not good </h1>;
    }

}

export default Weather
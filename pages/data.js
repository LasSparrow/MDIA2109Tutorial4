//Context, Reducer, redux

//use var to be able to change data, const cannot be changed
export var data = {
    lastaction:"",
    numClicks:0
}

if(process.browser){
    var sessiondata = sessionStorage.getItem("data");
    ChangeData(JSON.parse(sessiondata));
}

export function ChangeData(d){
    data = d;
    sessionStorage.setItem("data", JSON.stringify(data));
}
// manipulate handlers without yelds GN#110
const axios = require('axios');
function slowQuery(url) {
    axios.get(url)
        .then(function (response) {
            sm.next(1);
        })
        .catch(function (error) {
            sm.next(0);
        })
}
class StateMachine {
    constructor () {
        this.handler = handlerA;
        this.next = (result = 1) => 
            this.handler(this, result);
    }
}
const handlerA = (sm, result) => {
    //similar with generator injection
    const queryResult = result; 
    console.log("query1", queryResult);
    slowQuery('https://google.com');
    //similar with yield;
    sm.handler = handlerB; 
};
const handlerB = (sm, result) => {
    //similar with generator injection
    const queryResult = result; 
    if(queryResult == 1) {
       console.log("query2", queryResult);
       slowQuery('https://1111111111google.com');
    }
    //similar with yield;
    sm.handler = handlerC; 
};
const handlerC = (sm, result) => {
    //similar with generator injection;
    const queryResult = result; 
    if (result == 1 ) {
            console.log("query3", queryResult);
            slowQuery('https://google.com');
        } else {
            console.log("query4", queryResult);
            slowQuery('https://google.com');
        }
        //similar with yield;
        sm.handler = handlerEnd; 
};
const handlerEnd = (sm, result) => {};
console.log("+++++++++++start+++++++++++");
const sm = new StateMachine();
sm.next();
console.log("+++++++++++end+++++++++++");
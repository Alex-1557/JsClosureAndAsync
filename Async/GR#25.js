const startTime = new Date()
const getInterval = endTime =>  
    Math.round((endTime - startTime)/1000);

for (let i = 0; i < 5; i++) 
    new Promise(resolve => 
        setTimeout(resolve(
            console.log('X', 
                getInterval(new Date())))),1000);

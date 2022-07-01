const calcTempAmplitude = function(temps){
    
    let max = temps[0];
    for(let i=0; i< temps.lenght; i++){
        if(temps[i]<max) 
        max = temps[i];
    }
    console.log(max);
};
calcTempAmplitude([13,7,4,34]);

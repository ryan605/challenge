function speedLimit(speed)
{    let points=0;
    if (speed <=70){
        console.log('ok') 
    }else{
        points=(speed-70)/5;
    }if(points>12){
        console.log(`points: ${points} License Suspended`)
    }else{
        console.log(`points: ${points}`)
    }
}
speedLimit("180")
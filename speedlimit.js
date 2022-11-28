function speedLimit(speed)
{    let points=0;
    if (speed <=70){
        console.log('ok') //if below speed limit prints ok
    }else{
        points=(speed-70)/5;//calculates demerit point
    }if(points>12){
        console.log(`points: ${points} License Suspended`)//if total demerit points>12 prints License Suspended
    }else{
        console.log(`points: ${points}`)
    }
}
speedLimit("187");
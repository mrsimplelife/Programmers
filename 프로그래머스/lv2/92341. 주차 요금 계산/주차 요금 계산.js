function solution(fees, duration) {
    const [baseTime, baseFee, unitTime, unitFee] = fees;
    const record = duration
        .map(d => {
            const [time,carNumber,info] = d.split(' ')
            return {time,carNumber,info}
        })
        .reduce((a,b)=>{
            if(a[b.carNumber] === undefined){
                a[b.carNumber] = {time:0,inout:[]}
            }
            if (a[b.carNumber].inout.length === 0){
                a[b.carNumber].inout.push(b.time)    
            } else {
                const time = a[b.carNumber].inout.pop()
                a[b.carNumber].time += calculateTimeDifference(time,b.time)
            }
            return a
        },{})
    Object.keys(record).forEach(a=>{
        if (record[a].inout.length !== 0){
            const time = record[a].inout.pop()
            record[a].time += calculateTimeDifference(time, '23:59')
        }
    })
    return Object.keys(record)
        .sort((a,b)=>a-b)
        .map(a=>{
            const more = record[a].time - baseTime
            console.log(more)
            let result = baseFee
            if(more > 0){
               result += Math.ceil(more / unitTime) * unitFee
            }
            return  result
        })
}

function calculateTimeDifference(startTime, endTime) {
  const [startHour, startMinute] = startTime.split(':').map(Number);
  const [endHour, endMinute] = endTime.split(':').map(Number);

  const startTotalMinutes = startHour * 60 + startMinute;
  const endTotalMinutes = endHour * 60 + endMinute;

  return endTotalMinutes - startTotalMinutes;
}
function solution(survey, choices) {
    const score = {
        "R":0,
        "T":0,
        "C":0,
        "F":0,
        "J":0,
        "M":0,
        "A":0,
        "N":0,
    }
    for (let i = 0; i < choices.length; i++){
        if(choices[i] === 1){
            score[survey[i][0]] += 3
        } else if(choices[i] === 2){
            score[survey[i][0]] += 2
        } else if(choices[i] === 3){
            score[survey[i][0]] += 1
        } else if(choices[i] === 5){
            score[survey[i][1]] += 1
        } else if(choices[i] === 6){
            score[survey[i][1]] += 2
        } else if(choices[i] === 7){
            score[survey[i][1]] += 3
        }
    }
    let result = ""
    result += score['T'] > score['R'] ? 'T' : 'R'
    result += score['F'] > score['C'] ? 'F' : 'C'
    result += score['M'] > score['J'] ? 'M' : 'J'
    result += score['N'] > score['A'] ? 'N' : 'A'
    return result
}

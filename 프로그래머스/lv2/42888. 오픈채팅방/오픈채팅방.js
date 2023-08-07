function solution(record) {
    var state = {}
    record.forEach(element => {
        var action = element.split(' ')[0];
        var uid = element.split(' ')[1];
        var nickName = element.split(' ')[2];
        switch (action) {
            case 'Enter':
                state[uid] = nickName;
                break;
            case 'Change':
                state[uid] = nickName;
                break;
            default:
                break;
        }
    });
    var answer = [];
    record.forEach(element => {
        var action = element.split(' ')[0];
        var uid = element.split(' ')[1];
        switch (action) {
            case 'Enter':
                answer.push(`${state[uid]}님이 들어왔습니다.`)
                break;
            case 'Leave':
                answer.push(`${state[uid]}님이 나갔습니다.`)
                break;
            default:
                break;
        }
    });
    return answer;
}
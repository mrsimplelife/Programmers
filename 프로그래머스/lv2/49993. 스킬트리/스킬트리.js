function solution(skill, skill_trees) {
    let answer = 0;
    
    for (const skill_tree of skill_trees) {
        let isPossible = true;
        let idx = 0;
        for (const s of skill_tree) {
            if (skill.includes(s)) {
                if (s === skill[idx]) {
                    idx += 1;
                } else {
                    isPossible = false;
                    break;
                }
            }
        }
        if (isPossible) {
            answer += 1;
        }
    }
    return answer;
}
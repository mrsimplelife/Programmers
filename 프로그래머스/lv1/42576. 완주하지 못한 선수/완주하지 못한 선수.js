function solution(participant, completion) {
    const check = {};
    for(const name of completion){
        if(!check[name]){
            check[name]=0;
        }
        check[name]++;
    }
    for(const name of participant){
        if(check[name]){
            check[name]--;
        }else{
            return name;
        }
    }
   
}
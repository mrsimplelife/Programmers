function solution(clothes) {

    const clothesKinds={}
    for(const [c,k] of clothes){
        if(!clothesKinds[k]){
            clothesKinds[k]=0;        
        }
        clothesKinds[k]++;
    }
    let count = 1;
    for(const key in clothesKinds){
        count*=clothesKinds[key] + 1;
    }
    return count-1;
}
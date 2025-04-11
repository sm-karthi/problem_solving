function hurdleRace(k, height){ 

    let count = 0;
    let max = height[0];

    for(let i = 0; i < height.length; i++){
        if(max < height[i]){
            max = height[i];
        }
    }
    

    if(max < k){
        return count;
    }

    let check = max - k;
    
    for(let i = 0; i < height.length; i++){
        if(check >= height[i]){
            count++;
        }
    }
    
    return count;
}
console.log(hurdleRace(7, [2, 5, 4, 5, 2]));
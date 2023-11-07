let array = [5,10,15,25,15,27,28,35,17];
let count =0;
for (let i=0; i<array.length; i++){
    for(let j=i+1; j<array.length; j++){
        if (array[i] == array [j]){
            count +=1;
            // console.log(`value ${array[i]} found at ${i} ${j} position ${count}`);
        }
    }
    console.log(`value ${array[i]} found ${count} times`);
}
if (!count){
    console.log(`no duplicate value found`);
}
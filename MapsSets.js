//1
//{1,2,3,4}

//2
//"ref"

//3
//true

//4
const hasDuplicate=arr=>new set(arr).size !==arr.length;

//5
let vowels = 'aeiou';
function vowelCount(str){
    const vowelMap=new Map();
    for(let char of str){
        let lowerCase=char.toLowerCase();
        if(vowels.toLowerCase()){
            if(vowelMap.has(lowerCase)){
                vowelMap.set(lowerCase,vowelMap.get(lowerCase)+1);
            }else{
                vowelMap.set(lowerCase,1);
            }
        }
    }
    return vowelMap;

}

//console.log(vowelCount('Hello'));
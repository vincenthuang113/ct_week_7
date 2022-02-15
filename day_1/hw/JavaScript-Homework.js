//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

//Solution 1
function findWords(){
    for (i = 0; i < dog_names.length; i++){
        return dog_string.includes(dog_names[i]) ? "Matched dog_name" : "No matches"
    }
}

console.log(findWords())


//Solution 2
function findDogNames(arr, str){
    let found_names = arr.map(i =>{
        return (str.includes(i)) ? "Matched dog_name" : "No matches"
    })
    return found_names
}

console.log(findDogNames(dog_names, dog_string))


//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i++){
        if(i % 2 == 0){
            arr.splice(i,1, 'even index')
        }
    }
    return arr
}

console.log(replaceEvens(arr))


//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

let name = "automation"

function reverse(name){
    let reversename = ""
    for(let i = name.length-1;i>=0;i--){
    reversename += name[i];
}
return reversename;
}
console.log(reverse(name))
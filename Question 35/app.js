// 29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

function extension(ext){
    let arr = ext.split(".")
    console.log(`Extension is ${arr[arr.length - 1]}`);    
}

extension("image.png")
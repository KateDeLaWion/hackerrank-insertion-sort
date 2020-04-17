let n=5;
let arr=[2, 4, 6, 8, 3];

function insertionSort1(n,arr){ 

    let store=arr[n-1];

    for ( let i=n-1; i>=1; i-- ){
        
        if ( arr[i-1] > store ){
            
            arr[i] = arr[i-1];
            
        }
        else { arr[i] = store}

        // Below for loop to replace console.log(arr);
        for ( let j=0; j<=n-1; j++){
            
            process.stdout.write(arr[j] + " ");

        }
        process.stdout.write("\n");
}
}

insertionSort1(n,arr); // call upon the above function to start to work.




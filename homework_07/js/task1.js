var N = Number(prompt("Enter the natural number (0-20):"));
    if(((N % 1) != 0) || (N <= 0) || (N > 20)){
        console.error("Incorrect data!");
    }
    else{
        var table = new Array(N*2-1);
        var arr=[];
        var a='[*&*]';
        var sum=table.length;
        
        for (var i = 0; i < table.length; i++) {
            table[i]=a;
        }
        arr.unshift(table.join(''));
       
       for (var row = 0; row < table.length; row++) {
           table.splice(row, 1, '     ');
           table.splice((table.length-1)-row , 1, '     ');
           arr.unshift(table.join(''));
        }
    }

for (var col = 0; col < arr.length; col++) {
    console.log(arr[col]);
}  


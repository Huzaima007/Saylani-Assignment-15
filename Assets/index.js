// Reverse arr 
var arr = [1,2,3,4,5,6];
for (var i = arr. length - 1; i >= 0; i --) {
  console.log(i);
}

// Ascending arr 
var Arr = [1, 7, 2, 8, 3, 4, 5, 0, 9,19,344,122,14433];

for (var i = 1; i < Arr.length; i++)
    for (var j = 0; j < i; j++)
        if (Arr[i] < Arr[j]) {
            var x = Arr[i];
            Arr[i] = Arr[j];
            Arr[j] = x;
        }

console.log(Arr);





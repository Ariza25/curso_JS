//for é mais utilizado do que while

/* sintaxe
for(){

}*/

for(var i = 0; i < 10; i++){
    console.log('repetindo for: ' + i);
}

var arr = [1,2,3,4,5];

for(var j = 0; j < arr.length; j++){ //length diz quantos elementos tem no array
    console.log(arr[j]);
}

//outro exemplo

for(var x = 5; x < 100; x*=3){
    console.log(x);
}

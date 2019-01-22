$(document).ready(function() {

  $("form#submit").submit(function(event) {
    event.preventDefault();

    var sentence = $("input#sentence").val();
    var arrayS = sentence.split(" ");
    console.log(arrayS);

    var newArray =[];

    arrayS.forEach(function(word) {
      if (word.length >= 3) {
        newArray.push(word);
        console.log(newArray);
      }
    })

    newReverse = newArray.reverse().join(" ");
    console.log(newReverse);

  });

  });

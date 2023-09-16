//const urlBacon =
// "https://retool.com/api-generator/";

const urlBacon =
    "https://retoolapi.dev/xAtE1F/data";

(function() {
    $.ajax({

        method: "GET",

        url: urlBacon,

        dataType: "json"

    })

    .done(function(data) {

        console.log(data);

    })

    .fail(function() {

        alert("no good");

    });

})()
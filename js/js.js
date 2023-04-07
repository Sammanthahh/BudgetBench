const rapidApiKey = "37b4bcf058mshc182aef7e2afc3ep18384djsn813f135b3ba5";

$(document).ready(() => {
    $("#price-form").submit(event => {
        event.preventDefault();
        const country = $("#country-input").val();
        const country2 = $("#country-input2").val();
        if (!country || !country2) {
            $("#price-results").html("Please enter a country name");
            return;
        }

        const options = {
            method: "GET",
            url: `https://cost-of-living-and-prices.p.rapidapi.com/prices?country_name=${country}` ,
            params: { country: country },
            headers: {
                "x-rapidapi-key": rapidApiKey,
                "x-rapidapi-host": "cost-of-living-and-prices.p.rapidapi.com"
            }
        };

        const options2 = {
            method: "GET",
            url: `https://cost-of-living-and-prices.p.rapidapi.com/prices?country_name=${country2}` ,
            params: { country2: country2 },
            headers: {
                "x-rapidapi-key": rapidApiKey,
                "x-rapidapi-host": "cost-of-living-and-prices.p.rapidapi.com"
            }
        };

        $.ajax(options).done(response => {
            // console.log(response.prices);
            const prices = response.prices.filter(item => [2, 40, 46, 53, 54, 55].includes(item.good_id))
                .map(item => `<li>${item.item_name}: ${item.usd.avg}</li>`)
                .join("");
            $('#price-results').css('width', '250px');
            $("#price-results").html(`<ul>${prices}</ul>`);
        }).fail(error => {console.error(error);
            $("#price-results").html("Error retrieving prices");});

        $.ajax(options2).done(response => {
            // console.log(response.prices);
            const prices = response.prices.filter(item => [2, 40, 46, 53, 54, 55].includes(item.good_id))
                .map(item => `<li>${item.item_name}: ${item.usd.avg}</li>`)
                .join("");
            $('#price-results2').css('width', '250px');
            $("#price-results2").html(`<ul>${prices}</ul>`);
        }).fail(error => {console.error(error);
            $("#price-results2").html("Error retrieving prices");});


    });


});

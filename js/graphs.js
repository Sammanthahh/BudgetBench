let myChart;

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
            url: `https://cost-of-living-and-prices.p.rapidapi.com/prices?country_name=${country}`,
            params: { country: country },
            headers: {
                "x-rapidapi-key": rapidApiKey,
                "x-rapidapi-host": "cost-of-living-and-prices.p.rapidapi.com"
            }
        };

        const options2 = {
            method: "GET",
            url: `https://cost-of-living-and-prices.p.rapidapi.com/prices?country_name=${country2}`,
            params: { country2: country2 },
            headers: {
                "x-rapidapi-key": rapidApiKey,
                "x-rapidapi-host": "cost-of-living-and-prices.p.rapidapi.com"
            }
        };

        $.when($.ajax(options), $.ajax(options2)).done((response1, response2) => {
            const prices1 = response1[0].prices.filter(item => [5, 40, 46, 53, 54, 55].includes(item.good_id));
            const prices2 = response2[0].prices.filter(item => [2, 40, 46, 53, 54, 55].includes(item.good_id));
            console.log(response1)



            const data = {
                labels: ["Accommodation", "Transportation", "Food", "Utilities"],
                datasets: [
                    {
                        label: country,
                        data: prices1.map(item => item.usd.avg),
                        backgroundColor: "orange",
                        borderColor: "none",
                        borderWidth: 1,
                    },
                    {
                        label: country2,
                        data: prices2.map(item => item.usd.avg),
                        backgroundColor: "rgba(54, 162, 235, 0.5)", // blue with 50% opacity
                        borderColor: "rgba(54, 162, 235, 1)", // blue
                        borderWidth: 1,
                    },
                ],
            };


            if (myChart) {
                myChart.destroy(); // destroy the chart if it already exists
            }

             myChart = new Chart(ctx, {
                type: "bar",
                data: data,
                options: options,
            });
        }).fail(error => {
            console.error(error);
            $("#price-results").html("Error retrieving prices");
        });
    });

    const ctx = document.getElementById("myChart").getContext("2d");

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Expenses'
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Cost In USD'
                },
                ticks: {
                                    beginAtZero: true,
                                },
            }]
        }
    };
});

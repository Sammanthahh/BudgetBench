



$(document).ready(function() {
    // Attach a click event listener to the submit button
    $('#submit-btn').click(function() {
        // Get the value of the country input field
        var country = $('#country').val();

        // Make an AJAX request to the RapidAPI endpoint
        $.ajax({
            url: `https://cost-of-living-and-prices.p.rapidapi.com/prices?country_name=${country}` ,
            type: 'GET',
            headers: {
                'x-rapidapi-host': 'cost-of-living-and-prices.p.rapidapi.com',
                'x-rapidapi-key': '1526a07e77msh8e85f3abfa458bcp1cf15djsn8400d4456de9' // Replace with your RapidAPI key
            },
            success: function(response) {
                // Set the country name in the heading
                $('#country-name').text(response.name);

                // Clear the previous list items
                $('#prices-list').empty();

                // Loop through the prices object and create a list item for each key-value pair
                $.each(response.prices, function(key, value) {
                    var listItem = '<li>' + key + ': ' + value + '</li>';
                    $('#prices-list').append(listItem);
                });
            },
            error: function(xhr, status, error) {
                // Display an error message
                alert('An error occurred: ' + xhr.responseText);
            }
        });
    });
});

$(document).ready(function() {
    $('#submit').on('click', function() {
        // Get the values of the two input fields
        var input1Val = $('#country-input').val();
        var input2Val = $('#country-input2').val();

        // Make the API request for the first image
        $.ajax({
            url: 'https://api.pexels.com/v1/search?query=' + input1Val + '&per_page=1',
            headers: {
                'Authorization': 'oPNM4yCCUTDBz6HjEz9AypqCAaB10hN4IxM9PhmjEmHTwnuav5PORF5w'
            },
            success: function(result) {
                // Get the URL of the first image from the API response
                var imageUrl1 = result.photos[0].src.large;

                // Set the source attribute of the first image element
                $('#image1').attr('src', imageUrl1);
            }
        });

        // Make the API request for the second image
        $.ajax({
            url: 'https://api.pexels.com/v1/search?query=' + input2Val + '&per_page=1',
            headers: {
                'Authorization': 'oPNM4yCCUTDBz6HjEz9AypqCAaB10hN4IxM9PhmjEmHTwnuav5PORF5w'
            },
            success: function(result) {
                // Get the URL of the second image from the API response
                var imageUrl2 = result.photos[0].src.large;

                // Set the source attribute of the second image element
                $('#image2').attr('src', imageUrl2);

            }
        });
    });
});

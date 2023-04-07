$(document).ready(function() {
    const apiKey = "oPNM4yCCUTDBz6HjEz9AypqCAaB10hN4IxM9PhmjEmHTwnuav5PORF5w";
    const apiUrl = "https://api.pexels.com/v1/search";

    $("#search-btn").on("click", function() {
        const query = $("#search-input").val();
        if (query !== "") {
            $.ajax({
                url: apiUrl + "?query=" + query,
                headers: {
                    Authorization: apiKey
                },
                success: function(result) {
                    const photos = result.photos;
                    if (photos.length > 0) {
                        const photoUrl = photos[0].src.medium;
                        $("#image-container").html(`<img src="${photoUrl}">`);
                    } else {
                        $("#image-container").html("No results found");
                    }
                },
                error: function() {
                    $("#image-container").html("Error occurred while fetching image");
                }
            });
        } else {
            $("#image-container").html("Please enter a search query");
        }
    });
});

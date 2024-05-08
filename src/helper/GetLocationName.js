const apiKey = 'AIzaSyDUCs8ufGs484Ue8hIdWJKglOqklpGdNGo'; // Replace with your actual Google Maps API key

export const getNameByCoordinates = async (coordinates) => {

    const {x,y} = coordinates
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${x},${y}&key=${apiKey}`;
    let name 
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.results && data.results.length > 0) {
             name = data.results[0].formatted_address; // Extract the formatted address from the response
             return name;
        } else {
            return "Location not found";
        }
    } catch (error) {
        console.error('Error fetching location data:', error);
        return "Error fetching location data";
    }
  
};

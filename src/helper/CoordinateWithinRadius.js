const radius = 5; // Radius in kilometers

// Function to calculate distance between two coordinates using Haversine formula
function haversine(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
}

// Function to convert degrees to radians
function toRad(degrees) {
    return degrees * Math.PI / 180;
}

// Function to filter coordinates within a given radius
export function coordinatesWithinRadius(marker, coordinates) {
    const result = [];
    coordinates.forEach(coord => {
        const distance = haversine(marker.latitude, marker.longitude, coord.latitude, coord.longitude);
        if (distance <= radius) {
            result.push(coord);
        }
    });
    return result;
}

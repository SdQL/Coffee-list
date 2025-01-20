export async function fetchCoffeeData() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json');
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return await response.json();
    } catch (error) {
        console.error('Error fetching coffee data:', error);
        return []; // Retorna un array vacío en caso de error
    }
}
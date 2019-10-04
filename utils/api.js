export const getCurrentWeather = async (latitude, longitude) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=65a275edd3ce6a80b7b446a84846fed7`);
    const responseJson = await response.json();

    return responseJson;
};
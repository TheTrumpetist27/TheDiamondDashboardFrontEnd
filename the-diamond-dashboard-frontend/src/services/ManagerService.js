const API_URL = 'https://localhost:7078/api/Manager';

export const getManagerList = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
};
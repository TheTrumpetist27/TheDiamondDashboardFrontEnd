const API_URL = 'https://localhost:32776/api/Manager';

export const getManagerList = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
};

export const addManager = async (name, clubName) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, clubName }),
        });

        if (response.ok) {
            const newManager = await response.json();
            return newManager;
        } else {
            console.error('Fout bij het toevoegen van een manager: ', response.statusText);
            return null;
        }
    } catch (error) {
        console.error('Fout bij het toevoegen van een manager: ', error);
        return null;
    }
};
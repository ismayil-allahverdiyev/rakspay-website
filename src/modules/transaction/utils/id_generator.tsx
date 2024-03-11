function generateUniqueId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let result = '';
    for (let i = 0; i < 6; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export default function createUniqueShortId() {
    const timestamp = Date.now().toString(36);
    const randomChars = generateUniqueId();

    const uniqueId = timestamp + randomChars;
    return uniqueId;
}
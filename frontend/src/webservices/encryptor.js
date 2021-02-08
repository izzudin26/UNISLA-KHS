export const EncryptPassword = (password) => {
    return btoa(password);
}

export const decryptPassword = (encodedPassword) => {
    return atob(encodedPassword);
}
export const isAuthenticated = () => localStorage.getItem('authToken') ? true : false
export const isAdmin = () => localStorage.getItem('authToken') === 'admin-token' ? true : false
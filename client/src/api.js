const API_URL = 'http://localhost:5000/api';

export const fetchProviders = async (category) => {
    const url = category ? `${API_URL}/providers?category=${category}` : `${API_URL}/providers`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch providers');
    return response.json();
};

export const fetchProviderById = async (id) => {
    const response = await fetch(`${API_URL}/providers/${id}`);
    if (!response.ok) throw new Error('Failed to fetch provider');
    return response.json();
};

export const createBooking = async (bookingData) => {
    const response = await fetch(`${API_URL}/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData),
    });
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to create booking');
    }
    return response.json();
};

export const fetchBookings = async () => {
    const response = await fetch(`${API_URL}/bookings`);
    if (!response.ok) throw new Error('Failed to fetch bookings');
    return response.json();
};

export const updateBookingStatus = async (id, status) => {
    const response = await fetch(`${API_URL}/bookings/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
    });
    if (!response.ok) throw new Error('Failed to update booking status');
    return response.json();
};

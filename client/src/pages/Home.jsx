import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ProviderCard from '../components/ProviderCard';
import ServiceFilter from '../components/ServiceFilter';
import BookingForm from '../components/BookingForm';
import { fetchProviders, createBooking } from '../api';

const Home = () => {
    const [providers, setProviders] = useState([]);
    const [category, setCategory] = useState('');
    const [selectedProvider, setSelectedProvider] = useState(null);
    const [loading, setLoading] = useState(true);

    const loadProviders = async () => {
        setLoading(true);
        try {
            const data = await fetchProviders(category);
            setProviders(data);
        } catch (error) {
            console.error('Error fetching providers:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadProviders();
    }, [category]);

    const handleBook = (provider) => {
        setSelectedProvider(provider);
    };

    const handleBookingSubmit = async (bookingData) => {
        try {
            await createBooking(bookingData);
            alert('Booking Confirmed!');
            setSelectedProvider(null);
            loadProviders(); // Refresh list to assume availability update
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Find Local Experts</h1>
                    <ServiceFilter currentCategory={category} onSelectCategory={setCategory} />
                </div>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {providers.map((provider) => (
                            <ProviderCard key={provider.id} provider={provider} onBook={handleBook} />
                        ))}
                    </div>
                )}

                {selectedProvider && (
                    <BookingForm
                        provider={selectedProvider}
                        onSubmit={handleBookingSubmit}
                        onCancel={() => setSelectedProvider(null)}
                    />
                )}
            </main>
        </div>
    );
};

export default Home;

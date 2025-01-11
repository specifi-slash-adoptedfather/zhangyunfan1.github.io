import React from 'react';

function Hotels() {
    return (
        <div style={{ padding: '20px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333', textAlign: 'center', marginBottom: '20px' }}>
                Hotels
            </h2>
            <p style={{
                fontSize: '1.2rem', color: '#555', lineHeight: '1.6', textAlign: 'center', marginBottom: '40px'
            }}>
                Penang is not only a hub for food and culture but also offers diverse accommodation options.
                From luxury hotels to budget-friendly guesthouses, you'll always find the perfect place to stay.
                Here are some highly recommended hotels:
            </p>

            {/* Penang Marriott Hotel */}
            <div style={{ marginBottom: '30px' }}>
                <h3 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '10px' }}>Penang Marriott Hotel</h3>
                <p style={{ fontSize: '1.3rem', color: '#555', marginBottom: '10px' }}>
                    Located near Penang Beach, offering spacious rooms, top-notch service, and a seaside pool, it’s a great choice for vacations.
                </p>
                <p>Address: 123 Penang Beach Avenue</p>
                <p>Price Range: Starting from RM 400 per night</p>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <img
                        src="https://i.imgur.com/eJ7qgbQ.jpeg" // Replace with actual image URL
                        alt="Penang Marriott Hotel"
                        style={{
                            width: '48%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                    <img
                        src="https://i.imgur.com/e3QsmJf.jpeg" // Replace with second image URL
                        alt="Penang Marriott Hotel 2"
                        style={{
                            width: '48%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                </div>
            </div>

            {/* Penang Sheraton Hotel */}
            <div style={{ marginBottom: '30px' }}>
                <h3 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '10px' }}>Penang Sheraton Hotel</h3>
                <p style={{ fontSize: '1.3rem', color: '#555', marginBottom: '10px' }}>
                    Luxurious setting, convenient location, equipped with a gym and business center, perfect for business and family travelers.
                </p>
                <p>Address: 45 Penang City Center</p>
                <p>Price Range: Starting from RM 350 per night</p>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <img
                        src="https://i.imgur.com/b4ZiOPw.jpeg" // Replace with actual image URL
                        alt="Penang Sheraton Hotel"
                        style={{
                            width: '48%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                    <img
                        src="https://i.imgur.com/emAnOK8.jpeg" // Replace with second image URL
                        alt="Penang Sheraton Hotel 2"
                        style={{
                            width: '48%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                </div>
            </div>

            {/* Penang InterContinental Hotel */}
            <div style={{ marginBottom: '30px' }}>
                <h3 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '10px' }}>Penang InterContinental Hotel</h3>
                <p style={{ fontSize: '1.3rem', color: '#555', marginBottom: '10px' }}>
                    Offers a perfect blend of modern and traditional experiences, featuring an infinity pool and fine dining restaurants.
                </p>
                <p>Address: 67 Penang Seafront Avenue</p>
                <p>Price Range: Starting from RM 450 per night</p>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <img
                        src="https://i.imgur.com/aXWqwJ1.jpeg" // Replace with actual image URL
                        alt="Penang InterContinental Hotel"
                        style={{
                            width: '48%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                    <img
                        src="https://i.imgur.com/aVtwyYZ.jpeg" // Replace with second image URL
                        alt="Penang InterContinental Hotel 2"
                        style={{
                            width: '48%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                </div>
            </div>

            {/* Penang Shangri-La Hotel */}
            <div style={{ marginBottom: '30px' }}>
                <h3 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '10px' }}>Penang Shangri-La Hotel</h3>
                <p style={{ fontSize: '1.3rem', color: '#555', marginBottom: '10px' }}>
                    Located at Batu Ferringhi Beach, featuring family-themed rooms, kids' clubs, and top-notch resort facilities.
                </p>
                <p>Address: 89 Batu Ferringhi Beach Avenue</p>
                <p>Price Range: Starting from RM 500 per night</p>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <img
                        src="https://i.imgur.com/AV6Svij.jpeg" // Replace with actual image URL
                        alt="Penang Shangri-La Hotel"
                        style={{
                            width: '48%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                    <img
                        src="https://i.imgur.com/VXNtthM.jpeg" // Replace with second image URL
                        alt="Penang Shangri-La Hotel 2"
                        style={{
                            width: '48%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                </div>
            </div>

            {/* Continue with remaining hotels... */}
        </div>
    );
}

export default Hotels;


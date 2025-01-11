import React from 'react';

function Others() {
    return (
        <div style={{ padding: '20px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333', textAlign: 'center', marginBottom: '20px' }}>
                Other Activities
            </h2>
            <p style={{
                fontSize: '1.2rem', color: '#555', lineHeight: '1.6', textAlign: 'center', marginBottom: '40px'
            }}>
                In addition to Penang's charming natural attractions and food, there are a variety of vibrant activities and experiences to make your journey even more memorable. Here are some recommended activities:
            </p>

            {/* Penang Cultural Heritage Tour */}
            <div style={{ marginBottom: '30px' }}>
                <h3 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '10px' }}>Penang Cultural Heritage Tour</h3>
                <p style={{ fontSize: '1.3rem', color: '#555', marginBottom: '10px' }}>
                    Walk through the old streets of George Town, admire UNESCO World Heritage sites, and experience colonial-style architecture and rich historical stories.
                </p>
                <p>Highlights: Penang murals, Peranakan Museum, and mosque visits.</p>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <img
                        src="https://i.imgur.com/kQwdAZU.jpeg" // Replace with actual image URL
                        alt="Penang Cultural Heritage Tour"
                        style={{
                            width: '48%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                    <img
                        src="https://i.imgur.com/wEPPNLp.jpeg" // Replace with the second image URL
                        alt="Penang Cultural Heritage Tour 2"
                        style={{
                            width: '48%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                </div>
            </div>

            {/* Penang Night Markets */}
            <div style={{ marginBottom: '30px' }}>
                <h3 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '10px' }}>Penang Night Markets</h3>
                <p style={{ fontSize: '1.3rem', color: '#555', marginBottom: '10px' }}>
                    Explore Penang's night markets at night to experience local vibes. Discover local handicrafts, delicious snacks, and vibrant street performances.
                </p>
                <p>Recommended snacks: Char Kway Teow, Nasi Lemak, Cendol.</p>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <img
                        src="https://i.imgur.com/qLS04sB.jpeg" // Replace with actual image URL
                        alt="Penang Night Markets"
                        style={{
                            width: '48%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                    <img
                        src="https://i.imgur.com/aw3nmQs.jpeg" // Replace with the second image URL
                        alt="Penang Night Markets 2"
                        style={{
                            width: '48%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                </div>
            </div>

            {/* Penang Arts Festival */}
            <div style={{ marginBottom: '30px' }}>
                <h3 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '10px' }}>Penang Arts Festival</h3>
                <p style={{ fontSize: '1.3rem', color: '#555', marginBottom: '10px' }}>
                    Held annually, the Penang Arts Festival brings together artists from around the world, featuring music, dance, theater, and visual arts, offering visitors an extraordinary cultural experience.
                </p>
                <p>When: Typically held from August to September each year.</p>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <img
                        src="https://i.imgur.com/bJ66lbE.png" // Replace with actual image URL
                        alt="Penang Arts Festival"
                        style={{
                            width: '48%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                    <img
                        src="https://i.imgur.com/IKu98pa.jpeg" // Replace with the second image URL
                        alt="Penang Arts Festival 2"
                        style={{
                            width: '48%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                </div>
            </div>

            {/* Penang Hot Air Balloon Festival */}
            <div style={{ marginBottom: '30px' }}>
                <h3 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '10px' }}>Penang Hot Air Balloon Festival</h3>
                <p style={{ fontSize: '1.3rem', color: '#555', marginBottom: '10px' }}>
                    Looking for a unique experience? Join the Penang Hot Air Balloon Festival and enjoy a panoramic view of the city and natural scenery from colorful hot air balloons.
                </p>
                <p>Activities include: hot air balloon displays, night light shows, and interactive events.</p>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <img
                        src="https://i.imgur.com/SWDbI7D.jpeg" // Replace with actual image URL
                        alt="Penang Hot Air Balloon Festival"
                        style={{
                            width: '48%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                    <img
                        src="https://i.imgur.com/458ze8D.jpeg" // Replace with the second image URL
                        alt="Penang Hot Air Balloon Festival 2"
                        style={{
                            width: '48%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                </div>
            </div>

            {/* Penang Culinary Exploration */}
            <div style={{ marginBottom: '30px' }}>
                <h3 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '10px' }}>Penang Culinary Exploration</h3>
                <p style={{ fontSize: '1.3rem', color: '#555', marginBottom: '10px' }}>
                    Embark on a culinary journey with a guide to explore Penang's traditional snacks and street food. Learn the stories behind the food and enjoy a hands-on cooking experience.
                </p>
                <p>Recommended activities: making Penang Laksa and spring rolls by hand.</p>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <img
                        src="https://i.imgur.com/yHrLtf3.jpeg" // Replace with actual image URL
                        alt="Penang Culinary Exploration"
                        style={{
                            width: '48%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                    <img
                        src="https://i.imgur.com/OIJOy0D.jpeg" // Replace with the second image URL
                        alt="Penang Culinary Exploration 2"
                        style={{
                            width: '48%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Others;


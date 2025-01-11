import React from 'react';

function Home() {
    return (
        <div style={{ padding: '20px' }}>
            {/* 顶部文字内容 */}
            <div style={{ marginBottom: '30px', textAlign: 'left' }}>
                <h2 style={{ fontSize: '2rem', color: '#333', marginBottom: '20px' }}>
                    Penang Tourism Introduction
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.6', marginBottom: '15px' }}>
                    Penang, often referred to as the "Pearl of the Orient", is one of Malaysia's most vibrant destinations. A harmonious blend of cultural diversity, rich history, and natural beauty, this island offers something for every traveler. Penang's capital, George Town, is a UNESCO World Heritage Site, known for its colonial architecture, vibrant street art, and eclectic mix of old and new.
                </p >
                <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.6', marginBottom: '15px' }}>
                    From the tranquil beauty of the Penang National Park to the bustling streets filled with delicious food and lively markets, Penang is a paradise for nature lovers, culture enthusiasts, and foodies alike. Enjoy a leisurely stroll through the historic streets of George Town or indulge in the famous street food at local hawker centers. With its mix of modern attractions and preserved heritage, Penang has become a must-visit destination for those seeking an unforgettable experience.
                </p >
                <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.6' }}>
                    Whether you're looking to hike up Penang Hill, explore the rich culture at museums and temples, or enjoy the vibrant nightlife at Gurney Drive, Penang offers diverse activities for all types of travelers. Don't forget to visit the famous Batu Ferringhi Beach for a relaxing day under the sun, or take a boat ride to witness the stunning coastline from the sea.
                </p >
            </div>
            {/* 图片部分 */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '15px'
            }}>
                <img
                    src={`https://i.imgur.com/4zcHjhm.jpeg=${Math.floor(Math.random() * 1000)}`}
                    alt="Penang scenery"
                    style={{
                        width: '30%',
                        height: 'auto',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                    }}
                />
                <img
                    src={`https://i.imgur.com/J3wOM0U.jpeg=${Math.floor(Math.random() * 1000)}`}
                    alt="Penang scenery 1"
                    style={{
                        width: '30%',
                        height: 'auto',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                    }}
                />
                <img
                    src={`https://i.imgur.com/qmgpWfK.jpeg=${Math.floor(Math.random() * 1000)}`}
                    alt="Penang scenery 2"
                    style={{
                        width: '30%',
                        height: 'auto',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                    }}
                />
            </div>
        </div>
    );
}
export default Home;

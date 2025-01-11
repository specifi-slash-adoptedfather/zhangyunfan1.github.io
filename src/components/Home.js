import React from 'react';

function Home() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '20px', flexWrap: 'wrap' }}>
            {/* 左边内容 */}
            <div style={{ width: '45%', textAlign: 'left' }}>
                <h2 style={{ fontSize: '2rem', color: '#333' }}>
                    Penang Tourism Introduction
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.6' }}>
                    Penang, often referred to as the "Pearl of the Orient", is one of Malaysia's most vibrant destinations. A harmonious blend of cultural diversity, rich history, and natural beauty, this island offers something for every traveler. Penang's capital, George Town, is a UNESCO World Heritage Site, known for its colonial architecture, vibrant street art, and eclectic mix of old and new.
                </p>
                <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.6' }}>
                    From the tranquil beauty of the Penang National Park to the bustling streets filled with delicious food and lively markets, Penang is a paradise for nature lovers, culture enthusiasts, and foodies alike. Enjoy a leisurely stroll through the historic streets of George Town or indulge in the famous street food at local hawker centers. With its mix of modern attractions and preserved heritage, Penang has become a must-visit destination for those seeking an unforgettable experience.
                </p>
                <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.6' }}>
                    Whether you're looking to hike up Penang Hill, explore the rich culture at museums and temples, or enjoy the vibrant nightlife at Gurney Drive, Penang offers diverse activities for all types of travelers. Don't forget to visit the famous Batu Ferringhi Beach for a relaxing day under the sun, or take a boat ride to witness the stunning coastline from the sea.
                </p>

                {/* 左下方图片 */}
                <img
                    src={`https://i.imgur.com/GLgXtMx.jpeg=${Math.floor(Math.random() * 1000)}`}
                    alt="槟城风景"
                    style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '10px',
                        marginTop: '20px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                    }}
                />
            </div>

            {/* 右边两张图片 */}
            <div style={{ width: '45%', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <img
                    src={`https://i.imgur.com/J3wOM0U.jpeg=${Math.floor(Math.random() * 1000)}`}
                    alt="槟城风景 1"
                    style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                    }}
                />
                <img
                    src={`https://i.imgur.com/qmgpWfK.jpeg=${Math.floor(Math.random() * 1000)}`}
                    alt="槟城风景 2"
                    style={{
                        width: '100%',
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

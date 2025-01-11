import React from 'react';

function TouristSpots() {
    return (
        <div style={{ padding: '20px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333', textAlign: 'center', marginBottom: '20px' }}>
                Tourist Attractions
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.6', textAlign: 'center', marginBottom: '40px' }}>
                Penang is a place that blends nature and humanity, with rich and diverse tourism resources. Here are some must-visit attractions:
            </p>

            {/* Penang National Park */}
            <div style={{ marginBottom: '30px' }}>
                <h3 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '10px' }}>Penang National Park</h3>
                <p style={{ fontSize: '1.3rem', color: '#555', marginBottom: '10px' }}>Penang National Park is a nature lover's paradise, rich in flora and fauna, and perfect for hiking and exploring.</p>

                <div style={{ display: 'flex', gap: '20px' }}>
                    <img
                        src="https://i.imgur.com/VD84Z5T.jpeg" // 替换为真实图片 URL
                        alt="Penang National Park"
                        style={{ width: '48%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                    />
                    <img
                        src="https://i.imgur.com/cWR6rZf.jpeg" // 替换为第二张图片 URL
                        alt="Penang National Park 2"
                        style={{ width: '48%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                    />
                </div>
            </div>

            {/* George Town */}
            <div style={{ marginBottom: '30px' }}>
                <h3 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '10px' }}>George Town</h3>
                <p style={{ fontSize: '1.3rem', color: '#555', marginBottom: '10px' }}>George Town is a UNESCO World Heritage Site, full of historical and cultural charm.</p>

                <div style={{ display: 'flex', gap: '20px' }}>
                    <img
                        src="https://i.imgur.com/ba24fan.jpeg" // 替换为真实图片 URL
                        alt="George Town"
                        style={{ width: '48%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                    />
                    <img
                        src="https://i.imgur.com/dtuoIRe.jpeg" // 替换为第二张图片 URL
                        alt="George Town 2"
                        style={{ width: '48%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                    />
                </div>
            </div>

            {/* Penang Hill */}
            <div style={{ marginBottom: '30px' }}>
                <h3 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '10px' }}>Penang Hill</h3>
                <p style={{ fontSize: '1.3rem', color: '#555', marginBottom: '10px' }}>The spectacular view of Penang from the top of Penang Hill is an ideal spot for photography enthusiasts.</p>

                <div style={{ display: 'flex', gap: '20px' }}>
                    <img
                        src="https://i.imgur.com/jYaNCfC.jpeg" // 替换为真实图片 URL
                        alt="Penang Hill"
                        style={{ width: '48%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                    />
                    <img
                        src="https://i.imgur.com/viy3oG8.jpeg" // 替换为第二张图片 URL
                        alt="Penang Hill 2"
                        style={{ width: '48%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                    />
                </div>
            </div>

            {/* Kek Lok Si Temple */}
            <div style={{ marginBottom: '30px' }}>
                <h3 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '10px' }}>Kek Lok Si Temple</h3>
                <p style={{ fontSize: '1.3rem', color: '#555', marginBottom: '10px' }}>Kek Lok Si Temple is the largest Buddhist temple in Southeast Asia, with spectacular architecture and a solemn atmosphere.</p>

                <div style={{ display: 'flex', gap: '20px' }}>
                    <img
                        src="https://i.imgur.com/aqDbNyx.jpeg" // 替换为真实图片 URL
                        alt="Kek Lok Si Temple"
                        style={{ width: '48%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                    />
                    <img
                        src="https://i.imgur.com/ZtWv9Aj.jpeg" // 替换为第二张图片 URL
                        alt="Kek Lok Si Temple 2"
                        style={{ width: '48%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                    />
                </div>
            </div>

            {/* Penang Butterfly Farm */}
            <div style={{ marginBottom: '30px' }}>
                <h3 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '10px' }}>Penang Butterfly Farm</h3>
                <p style={{ fontSize: '1.3rem', color: '#555', marginBottom: '10px' }}>The Penang Butterfly Farm showcases over 4,000 species of butterflies and is an ideal location for education and viewing.</p>

                <div style={{ display: 'flex', gap: '20px' }}>
                    <img
                        src="https://i.imgur.com/hggF7xt.jpeg" // 替换为真实图片 URL
                        alt="Penang Butterfly Farm"
                        style={{ width: '48%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                    />
                    <img
                        src="https://i.imgur.com/DnRaqMk.png" // 替换为第二张图片 URL
                        alt="Penang Butterfly Farm 2"
                        style={{ width: '48%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                    />
                </div>
            </div>

            {/* Penang Beach */}
            <div>
                <h3 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '10px' }}>Penang Beach</h3>
                <p style={{ fontSize: '1.3rem', color: '#555', marginBottom: '10px' }}>Penang’s beaches such as Batu Ferringhi and Tanjong Bungah are great options for relaxation.</p>

                <div style={{ display: 'flex', gap: '20px' }}>
                    <img
                        src="https://i.imgur.com/ciMNimO.jpeg" // 替换为真实图片 URL
                        alt="Penang Beach"
                        style={{ width: '48%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                    />
                    <img
                        src="https://i.imgur.com/HAfm0Py.jpeg" // 替换为第二张图片 URL
                        alt="Penang Beach 2"
                        style={{ width: '48%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                    />
                </div>
            </div>
        </div>
    );
}

export default TouristSpots;

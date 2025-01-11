import React from 'react';

function FoodAndBeverages() {
    return (
        <div style={{ padding: '20px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333', textAlign: 'center', marginBottom: '20px' }}>
                Food and Beverages</h2>
            <p style={{
                fontSize: '1.2rem', color: '#555', lineHeight: '1.6', textAlign: 'center', marginBottom: '40px'}}>
                Penang is renowned as a food paradise with a diverse range of delicious dishes. Whether it's street food
                or classic dishes, there is always something to satisfy your taste:
            </p>

            {/* Penang Street Food */}
            <div style={{marginBottom: '30px'}}>
                <h3 style={{fontSize: '1.8rem', color: '#333', marginBottom: '10px'}}>Penang Street Food</h3>
                <p style={{fontSize: '1.3rem', color: '#555', marginBottom: '10px'}}>
                    Experience the authentic local snacks and feel the vibrant atmosphere of Penang's streets.</p>
                <div style={{display: 'flex', gap: '20px'}}>
                    <img
                        src="https://i.imgur.com/HaZRKbl.jpeg" // Replace with actual image URL
                        alt="Penang Street Food"
                        style={{
                            width: '48%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                    <img
                        src="https://i.imgur.com/FSpTDNT.jpeg" // 替换为第二张图片 URL
                        alt="Penang Street Food 2"
                        style={{
                            width: '48%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                </div>
            </div>

            {/* Penang Char Kway Teow */}
            <div style={{marginBottom: '30px'}}>
                <h3 style={{fontSize: '1.8rem', color: '#333', marginBottom: '10px'}}>Penang Char Kway Teow</h3>
                <p style={{fontSize: '1.3rem', color: '#555', marginBottom: '10px'}}>
                    The classic Penang Char Kway Teow, rich in sauce and tender seafood, is a delight.</p>
                <div style={{display: 'flex', gap: '20px'}}>
                    <img
                        src="https://i.imgur.com/4zU3SjY.jpeg" // Replace with actual image URL
                        alt="Penang Char Kway Teow"
                        style={{
                            width: '48%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                    <img
                        src="https://i.imgur.com/yvoCOGS.jpeg" // 替换为第二张图片 URL
                        alt="Penang Char Kway Teow 2"
                        style={{
                            width: '48%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                </div>
            </div>

            {/* Penang Asam Laksa */}
            <div style={{marginBottom: '30px'}}>
                <h3 style={{fontSize: '1.8rem', color: '#333', marginBottom: '10px'}}>Penang Asam Laksa</h3>
                <p style={{fontSize: '1.3rem', color: '#555', marginBottom: '10px'}}>
                    The rich fish broth and the tangy-spicy flavor make Penang Asam Laksa a unique dish.</p>
                <div style={{display: 'flex', gap: '20px'}}>
                    <img
                        src="https://i.imgur.com/8uof7b8.jpeg" // Replace with actual image URL
                        alt="Penang Asam Laksa"
                        style={{
                            width: '48%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                    <img
                        src="https://i.imgur.com/ZUNCOmJ.jpeg" // 替换为第二张图片 URL
                        alt="Penang Asam Laksa 2"
                        style={{
                            width: '48%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                </div>
            </div>

            {/* Penang Cendol */}
            <div style={{marginBottom: '30px'}}>
                <h3 style={{fontSize: '1.8rem', color: '#333', marginBottom: '10px'}}>Penang Cendol</h3>
                <p style={{fontSize: '1.3rem', color: '#555', marginBottom: '10px'}}>
                    A refreshing dessert made of coconut milk, green bean noodles, and red beans.</p>
                <div style={{display: 'flex', gap: '20px'}}>
                    <img
                        src="https://i.imgur.com/g250Ux3.jpeg" // Replace with actual image URL
                        alt="Penang Cendol"
                        style={{
                            width: '48%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                    <img
                        src="https://i.imgur.com/bd8O9oc.jpeg" // 替换为第二张图片 URL
                        alt="Penang Cendol 2"
                        style={{
                            width: '48%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                </div>
            </div>

            {/* Penang Prawn Mee */}
            <div style={{marginBottom: '30px'}}>
                <h3 style={{fontSize: '1.8rem', color: '#333', marginBottom: '10px'}}>Penang Prawn Mee</h3>
                <p style={{fontSize: '1.3rem', color: '#555', marginBottom: '10px'}}>
                    A broth made from shrimp shells paired with fresh shrimp, full of aroma.</p>
                <div style={{display: 'flex', gap: '20px'}}>
                    <img
                        src="https://i.imgur.com/ARrrtbi.jpeg" // Replace with actual image URL
                        alt="Penang Prawn Mee"
                        style={{
                            width: '48%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                    <img
                        src="https://i.imgur.com/lmWjSLI.jpeg" // 替换为第二张图片 URL
                        alt="Penang Prawn Mee 2"
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

            export default FoodAndBeverages;


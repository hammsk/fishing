import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Home() {
    const navigate = useNavigate();
    const [isMapVisible, setMapVisible] = useState(false);
    const [selectedFishingSpot, setSelectedFishingSpot] = useState(null);

    const handleCardClick = (id) => {
        navigate(`/detail/${id}`);
    };

    const handleMapButtonClick = (spotId) => {
        setSelectedFishingSpot(spotId);
        setMapVisible(true);
    };

    const closeMapPanel = () => {
        setMapVisible(false);
        setSelectedFishingSpot(null);
    };

    return (
        <div className="App">
            <h1>경기도 낚시터 현황</h1>
            <div className="search-container">
                <label htmlFor="search">검색: </label>
                <input type="text" id="search" placeholder="낚시터 이름을 입력하세요" />
            </div>
            <div className="card-container">
                <div className="card" onClick={() => handleCardClick(1)}>
                    <p>낚시터 이름</p>
                    <p>주소</p>
                    <button onClick={(e) => { e.stopPropagation(); handleMapButtonClick(1); }}>지도</button>
                </div>
                <div className="card" onClick={() => handleCardClick(2)}>
                    <p>낚시터 이름</p>
                    <p>주소</p>
                    <button onClick={(e) => { e.stopPropagation(); handleMapButtonClick(2); }}>지도</button>
                </div>
                <div className="card" onClick={() => handleCardClick(3)}>
                    <p>낚시터 이름</p>
                    <p>주소</p>
                    <button onClick={(e) => { e.stopPropagation(); handleMapButtonClick(3); }}>지도</button>
                </div>
            </div>

            {/* 지도 패널 */}
            {isMapVisible && (
                <div className={`map-panel ${isMapVisible ? 'open' : ''}`}>
                    <button className="close-btn" onClick={closeMapPanel}>닫기</button>
                    <h2>낚시터 {selectedFishingSpot} 지도 정보</h2>
                    <p>지도 정보</p>
                    {/* 실제 지도 API를 여기에서 호출하여 지도를 표시할 수 있습니다 */}
                </div>
            )}
        </div>
    );
}

export default Home;

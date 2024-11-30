import React from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
    const { id } = useParams();

    return (
        <div className="App">
            <h1>낚시터 상세 정보</h1>
            <p>선택한 낚시터 ID: {id}</p>
            {/* 여기에서 해당 ID를 이용해 API에서 상세 데이터를 가져와서 표시할 수 있습니다. */}
            <p>상세 정보 내용이 여기에 표시됩니다.</p>
        </div>
    );
}

export default Detail;

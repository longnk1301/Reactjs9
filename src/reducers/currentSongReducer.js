const initialState = {
    "id": "00001",
    "name": "Phi Điểu Và Ve Sầu",
    "performer": "Nhậm Thiên",
    "image": "phidieuvavesau.jpg",
    "audio": "Phi-Dieu-Va-Ve-Sau-Nham-Nhien.mp3"
};

const CurrentSongReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SONG':
            return action.payload;
        default:
            return state;
    }
}

export default CurrentSongReducer;

const initialState = {
    "id": "00001",
    "name": "Phi Điểu Và Ve Sầu",
    "performer": "Nhậm Thiên",
    "image": "../../data/img/phidieuvavesau.jpg",
    "audio": "../../data/music/Phi-Dieu-Va-Ve-Sau-Nham-Nhien.mp3"
};

const currentSongReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SONG':
            return action.payload;
        default:
            return state;
    }
}

export default currentSongReducer;

function TableDataReducer(state, action) {
    switch (action.type) {
        case 'sort_asc':
            return [...state].sort((a, b) => a.post.title.localeCompare(b.post.title));
        case 'sort_desc':
            return [...state].sort((a, b) => b.post.title.localeCompare(a.post.title));
        case 'reset':
            return action.payload; // Oryginalne dane
        default:
            return state;
    }
}

export default TableDataReducer;


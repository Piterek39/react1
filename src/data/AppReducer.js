export default function AppReducer(state, action) {
    switch (action.type) {
      case 'edit':
        {
            const updatedItems = state.map(item =>
                item.id === action.id ? { ...item, ...action.payload } : item
            );
            return updatedItems;
        };
      case 'rate':  {
        const updatedItems = state.map(item =>
            item.id === action.id ? { ...item, rating: action.rating } : item
        );
        return updatedItems;
    }
      
      case 'delete':{
        return state.filter(item => item.id !== action.id);
    }
        
      default:
        return state;
    }
  }
  
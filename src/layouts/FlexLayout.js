import useData from "../data/useData";
import useDispatch from "../data/useDispatch";

function FlexLayout() {
    const items = useData();
    const dispatch = useDispatch();

    const handleAction = (item) => {
        dispatch({ type: 'remove', payload: item.id });
    };

    return (
        <div>
            {items.map(item => (
                <div key={item.id}>
                    <span>{item.name}</span>
                    <button onClick={() => handleAction(item)}>Remove</button>
                </div>
            ))}
        </div>
    );
}

export default FlexLayout;

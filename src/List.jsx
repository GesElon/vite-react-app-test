function List({
    items = [{id: 'def', name: 'default', comment: 'classic.'}],
    category = 'Category'
}) {
    const itemList = items;

    itemList.sort((a, b) => a.name.localeCompare(b.name));

    const listItems = itemList.map((item) => <li key={item.id}>
                                                {item.name}: &nbsp;{item.comment}
                                            </li>)

    return (
        <>
            <h3>{category}</h3>
            <ul>{listItems}</ul>
        </>
    );
}

export default List;
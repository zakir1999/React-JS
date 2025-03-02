function List(props){
    const itemList=props.items;
    
    // fruits.sort((a,b)=> a.name.localeCompare(b.name));//Alphaetical
    //fruits.sort((a,b)=>b.name.localCompare(a.name));//Everse alphabetical
    //fruits.sort((a,b)=>a.calorires - b.calories);
    // const lowcalfruit=itemList.filter(fruit =>fruit.calorires<100);
    

    
    // lowcalfruit.sort((a,b)=>a.name.localeCompare(b.name));
    const listItems=itemList.map(fruit => <li key={fruit.id}>
        {fruit.name}:&nbsp;
        <b>{fruit.calorires}</b></li>);
    return (<ul>{listItems}</ul>);

}
export default List;
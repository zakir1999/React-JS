const listitems=products.map(product =>
    <li key={product.id}>
    {product.title}
    </li>
);
return (<ul>{listitems}</ul>);
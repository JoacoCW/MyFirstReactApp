const ItemDetail = ({itemDetail}) => {
    return (
        <article>
            <h3>{itemDetail.title}</h3>
            <img src={itemDetail.pictureUrl} alt="" />
            <h4>{itemDetail.price}</h4>
        </article>
    );
}
export default ItemDetail
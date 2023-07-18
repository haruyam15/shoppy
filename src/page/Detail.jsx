import { useParams } from 'react-router-dom';

export default function Detail(){

    let { productId } = useParams();

    return(
        <div>
            상품 디테일~~ {productId}
        </div>
    )
}
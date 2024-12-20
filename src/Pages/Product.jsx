import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import BreadCrum from '../component/BreadCrum';
import Header from '../Header';
import Nav from '../Nav';
import ProductDisplay from '../component/ProductDisplay';
import DescriptionBox from '../component/DescriptionBox';
import { RelatedProducts } from '../component/RelatedProducts';

const Product = () => {
  const {allProducts} = useContext(ShopContext);
  const {productId} = useParams();
  const product = allProducts.find((e)=> e.id === Number(productId));
  
  return (
    <div>
      <Header />
      <Nav />
      <BreadCrum category={product.category} name={product.name}/>
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <RelatedProducts />

    </div>
  )
}

export default Product
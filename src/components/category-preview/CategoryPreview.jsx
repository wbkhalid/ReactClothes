import { Link } from 'react-router-dom';
import ProductCard from '../product-card/ProductCard';
import './categoryPreview.styles.scss';



const CategoryPreview = ({ title, products }) => {
  
  return (
    <div className="category-preview-container">
        <Link to={title} className="title">{title.toUpperCase()}</Link >
    
      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;

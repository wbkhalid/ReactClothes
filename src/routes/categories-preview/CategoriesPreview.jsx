import { useContext } from 'react';
import CategoryPreview from '../../components/category-preview/CategoryPreview';
import { CategoriesContext } from '../../context/CategoriesContext';


const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
console.log(categoriesMap);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products  = categoriesMap[title];
        console.log(categoriesMap[title]);
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;

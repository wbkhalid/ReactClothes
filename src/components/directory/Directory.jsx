import CategoryItem from "../categoryItem/CategoryItem"
import './directory.styles.scss'

const Directory = ({categories}) => {
  return (
    <div className="categories_container">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  )
}

export default Directory
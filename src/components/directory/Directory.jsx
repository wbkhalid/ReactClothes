import DirectoryItem from '../directoryItem/DirectoryItem'
import './directory.styles.scss'

const Directory = ({categories}) => {
  return (
    <div className="categories_container">
      {categories.map((category) => (
        <DirectoryItem category={category} key={category.id} />
      ))}
    </div>
  )
}

export default Directory
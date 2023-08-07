import './directory.styles.scss'
import categories from '../../data/categories.json'
import CategoryItem from '../category-item/categoryItem';

export default function Directory() {
  return (
    <div className='directory-container'>

      {categories.map((cat) => (
        <CategoryItem key={cat.id} cat={cat} />
      ))}
    </div>
  )
}

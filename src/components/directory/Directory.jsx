import categories from '../../data/categories.json'
import CategoryItem from '../CategoryItem/CategoryItem';

import {DirectoryContainer} from './directory.styles.jsx'

export default function Directory() {
  return (
    <DirectoryContainer>

      {categories.map((cat) => (
        <CategoryItem key={cat.id} cat={cat} />
      ))}
    </DirectoryContainer>
  )
}

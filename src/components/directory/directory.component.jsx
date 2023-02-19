import { DirectoryContainer } from './directory.styles'

import { DirectoryItem } from '../directory-item/directory-item.component'

export const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem category={category} key={category.id} />
      ))}
    </DirectoryContainer>
  )
}

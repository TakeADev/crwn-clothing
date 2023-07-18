import { CATEGORY_ACTION_TYPES } from './category.types'
import { createAction } from '../../utils/reducer/reducer.utils'

export const setCategories = (categoriesMap) =>
  createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap)

import { createClient } from 'contentful'
import RecipeCard from '../components/RecipeCard'

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENFUL_SPACE_ID,
    accessToken: process.env.CONTENFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({
    content_type: 'recipe',
  })

  return {
    props: {
      recipes: res.items,
    },
  }
}

export default function Recipes({ recipes }) {
  return (
    <div className='recipe-list'>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  )
}

import classes from '@/app/meals/page.module.css'
import MealsGrid from '@/components/meals/meals-grid'
import { getMeals } from '@/lib/meals'
import Link from 'next/link'

export default async function MealsPage() {
  const meals = await getMeals();

  return (
    <>
      <header>
        <h1 className={classes.header}>
          Great food for <span className={classes.highlight}>you</span>
        </h1>
        <p>
          Choose your favorite recipes and cook it yourself!
        </p>

        <p className={classes.cta}>
          <Link href='/meals/share'>
            Share your favorite recipes!
          </Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals}/>
      </main>
    </>
  )
}

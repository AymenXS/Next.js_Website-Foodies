import Image from 'next/image';
import styles from './page.module.css';
import { getMeal } from '@/library/meals';
import { notFound } from 'next/navigation';

export const generateMetadata = async ({ params }) => {
  const meal = getMeal(params.meal);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
};

const MealDetails = ({ params }) => {
  const meal = getMeal(params.meal);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, '<br />');

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image
            src={`https://nextjs-foodies-demo.s3.eu-west-3.amazonaws.com/${meal.image}`}
            alt={meal.title}
            fill
          ></Image>
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
};
export default MealDetails;

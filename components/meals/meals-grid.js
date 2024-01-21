import styles from './meals-grid.module.css';

const MealsGrid = ({ meals }) => {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <li key={meal.id}></li>
      ))}
    </ul>
  );
};
export default MealsGrid;

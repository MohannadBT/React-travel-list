export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed === true).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? " You got everything! Ready to go ✈️"
          : `you have ${numItems} items on you list, and you already packed
          ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}

import { useState } from "react"

const ArraySection = () => {
  const [fruits, setFruits] = useState([
    {id: 1, name: "Apple"},
    {id: 2, name: "Orange"},
    {id: 3, name: "Mango"},
  ]);

  const [search, setSearch] = useState("");

  function addFruit() {
    setFruits(prev => [
      ...prev,
      {id: prev.length + 1, name: search}
    ]);
    setSearch("");
  }

  function deleteFruit(id) {
    setFruits(fruits.filter(fruit => fruit.id !== id));
  }

  const isDisabled = !search || fruits.some(fruit => fruit.name.toLowerCase() === search.toLowerCase()) // chech if input is empty or fruit exists exactly

  const filteredFruits = fruits.filter(fruit =>
    fruit.name.toLowerCase().includes(search.toLowerCase())
    // use === if full match
    // fruit.name.toLowerCase() === search.toLowerCase()
  );

  return (
    <section>
      <h1>Array Manipulation</h1>

      <input
        type="text"
        placeholder="Search or add fruit..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <button onClick={addFruit} disabled={isDisabled}>Add</button>

      {filteredFruits.map(fruit => (
        <div key={fruit.id}>
          {fruit.name}
          <button onClick={() => deleteFruit(fruit.id)}>Delete</button>
        </div>
      ))}
    </section>
  )
}

export default ArraySection
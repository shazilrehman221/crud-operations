import React, { useState } from 'react';
import Card from './Cards';
 
function App() {
  const [cards, setCards] = useState([]);
  const [form, setForm] = useState({ id: null, title: '', description: '' });
 
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id === null) {
      // Create
      setCards([...cards, { ...form, id: Date.now() }]);
    } else {
      // Update
      setCards(cards.map(card => (card.id === form.id ? form : card)));
    }
    setForm({ id: null, title: '', description: '' });
  };
 
  const handleEdit = (id) => {
    const card = cards.find(card => card.id === id);
    setForm(card);
    //console.log(card)
  };
 
  const handleDelete = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };
 
  return (
    <div style={styles.app}>
      <h1>React Card CRUD</h1>
 
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
        style={styles.inputText}
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <textarea
        style={styles.inputText}
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <button style= {styles.button}type="submit">{form.id ? 'Update' : 'Add'} Card</button>
      </form>
 
      <div style={styles.cards}>
        {cards.map(card => (
          <Card key={card.id} card={card} onEdit={handleEdit} onDelete={handleDelete} />
          //{console.log(card.id)}
        ))}
      </div>
    </div>
  );
}
 
const styles = {
  app: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '16px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '24px',
  },
  cards: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  button: {
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#EDE8D0',
    color: '#00796B',
    cursor: 'pointer',
    marginBottom: '8px',
    transition: 'background-color 0.3s ease',
    fontWeight: 'bold'
  },
  inputText: {
    padding: '12px',
    fontSize: '1rem',
    marginBottom: '8px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    transition: 'borderColor 0.3s ease'
  }
};
 
export default App;
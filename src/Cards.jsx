import React from 'react';

function Card({ card, onEdit, onDelete }) {
  return (
    <div style={styles.card}>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
      <button style={styles.editButton} onClick={() => onEdit(card.id)}>Edit</button>
      <button style={styles.deleteButton} onClick={() => onDelete(card.id)}>Delete</button>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '12px',
  },
  editButton: {
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#87E0E0',
    color: 'white',
    cursor: 'pointer',
    marginBottom: '8px',
    transition: 'background-color 0.3s ease'
},
  deleteButton: {
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#FF6701',
    color: 'white',
    cursor: 'pointer',
    marginBottom: '8px',
    transition: 'background-color 0.3s ease'
  },
};

export default Card;

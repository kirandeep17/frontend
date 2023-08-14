import React from 'react';

const DeleteConfirmationDialog = ({ onDelete, onCancel }) => {
  return (
    <div className="confirmation-dialog">
      <p>Are you sure you want to delete this item?</p>
      <div className="button-container">
        <button className="delete-button" onClick={onDelete}>
          Delete
        </button>
        <button className="cancel-button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmationDialog;

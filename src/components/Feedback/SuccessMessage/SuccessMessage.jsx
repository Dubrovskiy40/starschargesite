import React from "react";

const SuccessMessage = ({ successfullySent }) => {
  return (
    <div className="successMessage">
      {successfullySent === "success" ? (
        <div className="successMessage__block_green">
          Форма успешно отправлена
        </div>
      ) : (
        <div className="successMessage__block_red">
          Все поля формы обязательны для заполнения
        </div>
      )}
    </div>
  );
};

export default SuccessMessage;

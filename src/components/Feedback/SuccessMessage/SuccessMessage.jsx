import React from 'react';

const SuccessMessage = ({ successfullySent }) => {

    return (
      <div className="successMessage">
        <div
          className="successMessage__block ${successfullySent ? successMessage__block_green : successMessage__block_red}">
          {successfullySent ? 'Форма успешно отправлена.' : 'Форма не отправлена. Устраните ошибки и повторите отправку.'}
        </div>
      </div>
    );
};

export default SuccessMessage;
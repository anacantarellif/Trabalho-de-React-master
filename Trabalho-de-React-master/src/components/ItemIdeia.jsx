import React, { useState } from 'react';

const ItemIdeia = ({ ideia, indice, removerIdeia, atualizarIdeia }) => {
  const [modoEdicao, setModoEdicao] = useState(false); // para saber se está no modo de edição
  const [textoAtualizado, setTextoAtualizado] = useState(ideia.texto); // para armazenar o texto editado
  const [alterado, setAlterado] = useState(false); // para saber se o item foi editado

  const iniciarEdicao = () => setModoEdicao(true);

  const salvarEdicao = () => {
    if (textoAtualizado.trim()) {
      atualizarIdeia({ ...ideia, texto: textoAtualizado });
      setModoEdicao(false);
      setAlterado(true);
    }
  };

  const renderizarBotaoEdicao = () => (
    <button onClick={modoEdicao ? salvarEdicao : iniciarEdicao} className="edit-btn">
      <div>
        {modoEdicao ? (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
            </svg>
            <p>Salvar</p>
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
            </svg>
            <p>Editar</p>
          </>
        )}
      </div>
    </button>
  );

  const renderizarBotaoExcluir = () => (
    <button onClick={() => removerIdeia(ideia.id)} className="delete-btn">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
        </svg>
        <p>Excluir</p>
      </div>
    </button>
  );

  return (
    <div className="idea-item">
      {modoEdicao ? (
        <input
          type="text"
          value={textoAtualizado}
          onChange={(e) => setTextoAtualizado(e.target.value)}
          className="idea-input"
        />
      ) : (
        <h3 className="idea-text">{indice + 1}. {ideia.texto}</h3>
      )}
      <div className="class-ideia">
        {alterado && <span className="editado">editado</span>}
        {renderizarBotaoEdicao()}
        {renderizarBotaoExcluir()}
      </div>
    </div>
  );
};

export default ItemIdeia;



import React from 'react';
import styled from 'styled-components';

const FileInputWrapper = styled.label`
  border: 1px solid var(--input);
  display: block;
  padding: .825rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4rem;
  background: none;
  color: var(--input);
  transition: .3s;

  && {
    border-radius: 4rem; /* Aumentando a especificidade */
  }

  &:hover {
    background-color: var(--input);
    color: #000;
  }

  i {
    margin-right: 5px;
  }
`;

const FileInput = styled.input.attrs({ type: 'file' })`
  display: none;
`;

const FileUpload = () => {
  return (
    <>
      <FileInputWrapper htmlFor="file-upload">
        <i className="fa fa-cloud-upload"></i> 
        Carregar Imagem
      </FileInputWrapper>
      <FileInput id="file-upload" />
    </>
  );
};

export default FileUpload;

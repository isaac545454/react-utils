import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export const Dropzone: React.FC<{ onFileUpload: (file: File[]) => void }> = ({ onFileUpload }) => {
  const onDrop = (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        onFileUpload(acceptedFiles);
      }
    }

  

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      multiple: true
  });

  return (
    <div
      {...getRootProps()}
      className={`${
        isDragActive
          ? 'border-dashed border-2 border-blue-400 bg-blue-100'
          : 'border border-gray-300'
      } p-4 text-center cursor-pointer`}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Solte o arquivo aqui...</p>
      ) : (
        <p>
          Arraste e solte um arquivo aqui, ou clique para selecionar um arquivo
        </p>
      )}
    </div>
  );
};

 

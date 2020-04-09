import React, { useState, useCallback } from 'react';
import MonacoEditor from 'react-monaco-editor';

const Editor = () => {
    const [ value, setValue ] = useState();
    
    const editorDidMount = useCallback((editor) => {
      editor.focus();
    }, []);
  
    return (
      <MonacoEditor
        width="800"
        height="600"
        language="javascript"
        theme="vs-dark"
        value={value}
        options={{
          selectOnLineNumbers: true
        }}
        onChange={setValue}
        editorDidMount={editorDidMount}
    />);
  }

export default Editor;
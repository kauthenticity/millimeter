import { React, useState } from 'react'
import { Editor, EditorState } from 'draft-js'
import "draft-js/dist/Draft.css";

const Write = () => {
 const [editorState, setEditorState] = useState(() =>
   EditorState.createEmpty()
  );
  

  return (
    <div className="editor">
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
          
        }}
      />
    </div>
  );
}

export default Write
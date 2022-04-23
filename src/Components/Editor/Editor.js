import ExampleTheme from "./themes/ExampleTheme";
import LexicalComposer from "@lexical/react/LexicalComposer";
import RichTextPlugin from "@lexical/react/LexicalRichTextPlugin";
import ContentEditable from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import AutoFocusPlugin from "@lexical/react/LexicalAutoFocusPlugin";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import LinkPlugin from "@lexical/react/LexicalLinkPlugin";
import ListPlugin from "@lexical/react/LexicalListPlugin";
import LexicalMarkdownShortcutPlugin from "@lexical/react/LexicalMarkdownShortcutPlugin";
import ListMaxIndentLevelPlugin from "./plugins/ListMaxIndentLevelPlugin";
import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
import AutoLinkPlugin from "./plugins/AutoLinkPlugin";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

const editorConfig = {
  // The editor theme
  theme: ExampleTheme,
  // Handling of errors during update
  onError(error) {
    throw error;
  },
  // Any custom nodes go here
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode,
  ],
};

const Editor = () => {
  const [searchParams] = useSearchParams();
  const board = searchParams.get("board");

  const onClickWrite = () => {};

  return (
    <EditorContainer>
      <Title placeholder="제목" />
      <LexicalComposer initialConfig={editorConfig}>
        <div className="editor-container">
          <ToolbarPlugin />
          <div className="editor-inner">
            <RichTextPlugin
              contentEditable={<ContentEditable className="editor-input" />}
            />
            <HistoryPlugin />
            <AutoFocusPlugin />
            <CodeHighlightPlugin />
            <ListPlugin />
            <LinkPlugin />
            <AutoLinkPlugin />
            <ListMaxIndentLevelPlugin maxDepth={7} />
            <LexicalMarkdownShortcutPlugin />
          </div>
        </div>
      </LexicalComposer>
      <Button onClick={onClickWrite}>write</Button>
    </EditorContainer>
  );
};

export default Editor;

const EditorContainer = styled.div`
  width: 70vw;
  margin: 0 15vw;
`;
const Title = styled.input`
  width: 100%;
  outline: none;
  border: 1px solid #acacac;
  border-radius: 4px;
  padding: 0.6rem;
  box-sizing: border-box;
`;

const Button = styled.button`
  float: right;
  border: none;
  background: transparent;
  border: 1px solid #121212;
  padding: 0.8rem 2.8rem;
  font-family: "Lora";
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    background: #232323;
    color: white;
  }
`;

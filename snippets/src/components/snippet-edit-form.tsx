"use client";

import type { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={snippet.code}
        options={{
          minimap: { enabled: false },
          fontSize: 17,
        }}
        // onChange={handleEditorChange}
      />
    </div>
  );
}

"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

interface TiptapProps {
  value: string;
  onChange: (value: string) => void;
}

export default function Tiptap({ value, onChange }: TiptapProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className="border rounded-lg p-3 min-h-60">
      <EditorContent editor={editor} />
    </div>
  );
}

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
      <div className="flex gap-2 border-b p-2">
        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleBold().run()}
          className="border-l, border-r p-1"
        >
          Bold
        </button>

        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          className="border-l, border-r p-1"
        >
          Italic
        </button>

        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleBulletList().run()}
          className="border-l, border-r p-1"
        >
          ol
        </button>

        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleOrderedList().run()}
          className="border-l, border-r p-1"
        >
          ul
        </button>
      </div>

      <EditorContent editor={editor} />
    </div>
  );
}

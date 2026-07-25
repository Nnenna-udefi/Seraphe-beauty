"use client";

import Heading from "@tiptap/extension-heading";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

interface TiptapProps {
  value: string;
  onChange: (value: string) => void;
  className: string;
}

const CustomHeading = Heading.extend({
  renderHTML({ node, HTMLAttributes }) {
    const text = node.textContent;

    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    return [
      `h${node.attrs.level}`,
      {
        ...HTMLAttributes,
        id,
      },
      0,
    ];
  },
});

export default function Tiptap({ value, onChange, className }: TiptapProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false,
      }),
      CustomHeading.configure({
        levels: [1, 2, 3],
      }),
    ],
    content: value,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className="border rounded-lg p-3 min-h-60">
      <div className="flex gap-2 justify-between items-center border-b p-2">
        <button
          type="button"
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 1 }).run()
          }
        >
          H1
        </button>

        <button
          type="button"
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          H2
        </button>

        <button
          type="button"
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 3 }).run()
          }
        >
          H3
        </button>
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
          ol (.)
        </button>

        <button
          type="button"
          onClick={() => editor?.chain().focus().toggleOrderedList().run()}
          className="border-l, border-r p-1"
        >
          ul (1)
        </button>
      </div>

      <EditorContent editor={editor} className={className} />
    </div>
  );
}

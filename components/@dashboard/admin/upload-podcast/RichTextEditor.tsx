'use client'
import { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

function Btn({
  onClick,
  active,
  disabled,
  children,
  title,
}: {
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <button
      type="button"
      onPointerDown={(e) => e.preventDefault()}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={[
        "px-2 py-1 rounded border text-sm transition select-none",
        active ? "bg-black text-white border-black" : "bg-white text-black",
        disabled ? "opacity-40 cursor-not-allowed" : "hover:bg-neutral-100",
      ].join(" ")}
      aria-pressed={!!active}
    >
      {children}
    </button>
  );
}

export default function RichTextEditor({
  value,
  onChange,
  placeholder = "Write here...",
}: {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const editor = useEditor(
    {
      extensions: [
        StarterKit,
        Placeholder.configure({ placeholder }),
      ],
      content: value || "",
      immediatelyRender: false, // avoid SSR hydration mismatches
      onUpdate: ({ editor }) => {
        const html = editor.getHTML();
        if (html !== value) onChange(html);
      },
      editorProps: {
        attributes: {
          class:
            "prose prose-base md:prose-lg max-w-none min-h-40 p-3 bg-white rounded-md border focus:outline-none",
        },
      },
    },
    [mounted]
  );

  // Only sync external value if it actually differs from current editor content
  useEffect(() => {
    if (editor && mounted && value != null && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [editor, value, mounted]);

  // Re-render toolbar on selection/transaction/update so active states reflect selection
  const [, force] = useState(0);
  useEffect(() => {
    if (!editor) return;
    const rerender = () => force((x) => x + 1);
    editor.on("selectionUpdate", rerender);
    editor.on("transaction", rerender);
    editor.on("update", rerender);
    return () => {
      editor.off("selectionUpdate", rerender);
      editor.off("transaction", rerender);
      editor.off("update", rerender);
    };
  }, [editor]);

  if (!mounted) return <div className="min-h-24 rounded-md border bg-white" />;

  const blockLabel =
    (editor?.isActive('heading', { level: 1 }) && 'H1') ||
    (editor?.isActive('heading', { level: 2 }) && 'H2') ||
    (editor?.isActive('heading', { level: 3 }) && 'H3') ||
    (editor?.isActive('blockquote') && 'Quote') ||
    (editor?.isActive('codeBlock') && 'Code') ||
    'P';

  return (
    <div className="space-y-2 bg-white">
      {editor && (
        <div
          className="flex flex-wrap items-center gap-2 border-b bg-white p-2"
          onMouseDown={(e) => e.preventDefault()}
        >

          <Btn
            onClick={() => editor.chain().focus().toggleBold().run()}
            active={editor.isActive('bold')}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            title="Bold"
          >
            Bold
          </Btn>
          <Btn
            onClick={() => editor.chain().focus().toggleItalic().run()}
            active={editor.isActive('italic')}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            title="Italic"
          >
            Italic
          </Btn>
          <Btn
            onClick={() => editor.chain().focus().toggleStrike().run()}
            active={editor.isActive('strike')}
            disabled={!editor.can().chain().focus().toggleStrike().run()}
            title="Strikethrough"
          >
            Strike
          </Btn>
          <Btn
            onClick={() => editor.chain().focus().toggleCode().run()}
            active={editor.isActive('code')}
            disabled={!editor.can().chain().focus().toggleCode().run()}
            title="Inline code"
          >
            Code
          </Btn>

          <span className="w-px h-6 bg-neutral-200 mx-1" />

          <Btn
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            active={editor.isActive('heading', { level: 1 })}
            title="Heading 1"
          >
            H1
          </Btn>
          <Btn
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            active={editor.isActive('heading', { level: 2 })}
            title="Heading 2"
          >
            H2
          </Btn>
          <Btn
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            active={editor.isActive('heading', { level: 3 })}
            title="Heading 3"
          >
            H3
          </Btn>
          <Btn
            onClick={() => editor.chain().focus().setParagraph().run()}
            active={editor.isActive('paragraph')}
            title="Paragraph"
          >
            P
          </Btn>

          <span className="w-px h-6 bg-neutral-200 mx-1" />

          <Btn
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            active={editor.isActive('bulletList')}
            title="Bullet list"
          >
            Bullet
          </Btn>
          <Btn
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            active={editor.isActive('orderedList')}
            title="Numbered list"
          >
            Numbered
          </Btn>
          <Btn
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            active={editor.isActive('blockquote')}
            title="Quote"
          >
            Quote
          </Btn>
          <Btn
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            active={editor.isActive('codeBlock')}
            title="Code block"
          >
            Code Block
          </Btn>
        </div>
      )}

      <EditorContent editor={editor} />
    </div>
  );
}
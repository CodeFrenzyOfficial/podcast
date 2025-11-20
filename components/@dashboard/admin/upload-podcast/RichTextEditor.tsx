"use client";

import React, { useEffect, useRef } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import Toolbar from "quill/modules/toolbar";

interface RichTextEditorProps {
  value: string; 
  onChange: (html: string) => void;
  onImagesChange?: (images: File[]) => void;
  placeholder?: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({
  value,
  onChange,
  onImagesChange,
  placeholder = "Write your blog content here...",
}) => {
  const [imageFiles, setImageFiles] = React.useState<File[]>([]);
  const { quill, quillRef } = useQuill({
    theme: "snow",
    placeholder,
    modules: {
      toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script: "sub" }, { script: "super" }],
        [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
        [{ align: [] }],
        ["blockquote", "code-block"],
        ["link", "image", "video"],
        ["clean"],
      ],
    },
  });
  //  Handle image uploads
  useEffect(() => {
    if (!quill) return;
    const toolbar = quill.getModule("toolbar") as Toolbar;
    toolbar.addHandler("image", () => {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.multiple = true;
      input.click();

      input.onchange = () => {
        const files = Array.from(input.files || []);
        if (files.length > 0) {
          const newFiles = [...imageFiles, ...files];
          setImageFiles(newFiles);
          onImagesChange?.(newFiles);
        }
      };
    });
  }, [quill, onImagesChange]);

  //  Sync editor content
  useEffect(() => {
    if (!quill) return;
    quill.on("text-change", () => onChange(quill.root.innerHTML));
  }, [quill, onChange]);

  //  Load existing HTML
  useEffect(() => {
    if (quill && value && quill.root.innerHTML !== value) {
      quill.root.innerHTML = value;
    }
  }, [quill, value]);

  // Remove image from preview
  const handleRemoveImage = (index: number) => {
    const newFiles = imageFiles.filter((_, i) => i !== index);
    setImageFiles(newFiles);
    onImagesChange?.(newFiles);
  };


  return (
    <div className="w-full relative">
      <div
        ref={quillRef}
        className="bg-white rounded-t-lg min-h-[300px] border border-gray-300 break-all whitespace-break-spaces"
      />

      {imageFiles.length > 0 && (
        <div className="sticky bottom-0 ...">
          <div className="flex gap-3 overflow-x-auto">
            {imageFiles.map((img, index) => {
              const src = URL.createObjectURL(img);
              return (
                <div key={index} className="relative flex-shrink-0">
                  <img
                    src={src}
                    alt={`uploaded-${index}`}
                    className="w-24 h-24 object-cover rounded-lg border"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center hover:bg-red-700"
                  >
                    ×
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default RichTextEditor;

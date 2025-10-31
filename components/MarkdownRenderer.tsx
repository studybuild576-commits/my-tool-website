"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { refractor } from "refractor/lib/core";
import js from "refractor/lang/javascript";
import ts from "refractor/lang/typescript";
import bash from "refractor/lang/bash";
import json from "refractor/lang/json";
import jsx from "refractor/lang/jsx";
import tsx from "refractor/lang/tsx";

// ✅ Register supported languages
refractor.register(js);
refractor.register(ts);
refractor.register(bash);
refractor.register(json);
refractor.register(jsx);
refractor.register(tsx);

// ✅ Syntax-highlighted code block renderer
function CodeBlock({ className, children }: { className?: string; children: any }) {
  const lang = /language-(\w+)/.exec(className || "")?.[1] || "";
  const code = String(children || "");
  let html = "";

  try {
    const nodes = lang
      ? refractor.highlight(code, lang)
      : refractor.highlight(code, "javascript");

    // @ts-ignore – refractor.stringify exists but not typed
    html = (refractor as any).stringify(nodes);
  } catch {
    const nodes = refractor.highlight(code, "javascript");
    // @ts-ignore – refractor.stringify exists but not typed
    html = (refractor as any).stringify(nodes);
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {}
  };

  return (
    <div className="relative group my-4">
      <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm leading-relaxed">
        <code
          className={className}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </pre>

      <button
        type="button"
        onClick={copy}
        className="absolute top-2 right-2 text-xs bg-white/10 text-white px-2 py-1 rounded border border-white/20 opacity-0 group-hover:opacity-100 transition"
        aria-label="Copy code"
        title="Copy"
      >
        📋 Copy
      </button>
    </div>
  );
}

export default function MarkdownRenderer({ content }: { content: string }) {
  // ✅ Extended sanitize schema
  const schema = {
    ...defaultSchema,
    attributes: {
      ...defaultSchema.attributes,
      code: [...(defaultSchema.attributes?.code || []), ["className"]],
      span: [...(defaultSchema.attributes?.span || []), ["className"]],
      table: [["className"]],
      thead: [["className"]],
      tbody: [["className"]],
      tr: [["className"]],
      th: [["className"]],
      td: [["className"]],
      img: [
        ...(defaultSchema.attributes?.img || []),
        ["className"],
        ["loading"],
        ["decoding"],
        ["width"],
        ["height"],
        ["alt"],
      ],
      a: [...(defaultSchema.attributes?.a || []), ["rel"], ["target"], ["className"]],
    },
  };

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[
        rehypeRaw,
        [rehypeSanitize, schema],
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap", properties: { className: "no-underline" } }],
      ]}
      components={{
        h1: ({ node, ...props }) => (
          <h1 className="text-4xl font-bold mb-6 scroll-mt-24" {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className="text-3xl font-semibold mt-8 mb-4 scroll-mt-24" {...props} />
        ),
        h3: ({ node, ...props }) => (
          <h3 className="text-2xl font-semibold mt-6 mb-3 scroll-mt-24" {...props} />
        ),
        h4: ({ node, ...props }) => (
          <h4 className="text-xl font-semibold mt-4 mb-2 scroll-mt-24" {...props} />
        ),

        p: ({ node, ...props }) => (
          <p className="text-slate-700 mb-4 leading-relaxed" {...props} />
        ),
        ul: ({ node, ...props }) => (
          <ul className="list-disc pl-6 mb-4 text-slate-700" {...props} />
        ),
        ol: ({ node, ...props }) => (
          <ol className="list-decimal pl-6 mb-4 text-slate-700" {...props} />
        ),
        li: ({ node, ...props }) => <li className="mb-2" {...props} />,

        table: ({ node, ...props }) => (
          <div className="overflow-x-auto my-4">
            <table className="min-w-full border-collapse text-sm" {...props} />
          </div>
        ),
        th: ({ node, ...props }) => (
          <th
            className="border-b border-slate-200 px-3 py-2 text-left font-semibold"
            {...props}
          />
        ),
        td: ({ node, ...props }) => (
          <td
            className="border-b border-slate-100 px-3 py-2 align-top"
            {...props}
          />
        ),

        blockquote: ({ node, ...props }) => (
          <blockquote
            className="border-l-4 border-blue-500 pl-4 italic my-4 text-slate-600"
            {...props}
          />
        ),

        code({ inline, className, children, ...props }) {
          if (inline) {
            return (
              <code className="bg-slate-100 rounded px-1 py-0.5 text-slate-800" {...props}>
                {children}
              </code>
            );
          }
          return <CodeBlock className={className}>{children}</CodeBlock>;
        },

        a: ({ node, href, children, ...props }) => {
          const isExternal = href && /^https?:\/\//i.test(href);
          return (
            <a
              href={href as string}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="text-indigo-600 hover:text-indigo-700 underline underline-offset-2"
              {...props}
            >
              {children}
            </a>
          );
        },

        img: ({ node, ...props }) => (
          <img
            loading="lazy"
            decoding="async"
            className="max-w-full h-auto rounded-md my-3"
            width={(props.width as any) || 800}
            height={(props.height as any) || 450}
            alt={(props.alt as string) || ""}
            {...props}
          />
        ),

        hr: () => <hr className="my-8 border-slate-200" />,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

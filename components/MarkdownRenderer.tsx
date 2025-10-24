import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <ReactMarkdown
      components={{
        h1: ({ children }) => (
          <h1 className="text-4xl font-bold mb-6">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-3xl font-semibold mt-8 mb-4">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-2xl font-semibold mt-6 mb-3">{children}</h3>
        ),
        h4: ({ children }) => (
          <h4 className="text-xl font-semibold mt-4 mb-2">{children}</h4>
        ),
        p: ({ children }) => (
          <p className="text-slate-700 mb-4 leading-relaxed">{children}</p>
        ),
        ul: ({ children }) => (
          <ul className="list-disc pl-6 mb-4 text-slate-700">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal pl-6 mb-4 text-slate-700">{children}</ol>
        ),
        li: ({ children }) => (
          <li className="mb-2">{children}</li>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4 text-slate-600">
            {children}
          </blockquote>
        ),
        code: ({ node, inline, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              language={match[1]}
              style={tomorrow}
              className="rounded-lg my-4"
              {...props}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className="bg-slate-100 rounded px-1 py-0.5 text-slate-800" {...props}>
              {children}
            </code>
          );
        },
        // Add custom styling for other elements as needed
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
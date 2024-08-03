import Markdown from "markdown-to-jsx";
import React from "react";
const overrides = {
  h1: {
    props: {
      className: "text-4xl font-bold my-4",
    },
  },
  h2: {
    props: {
      className: "text-3xl font-semibold my-3",
    },
  },
  h3: {
    props: {
      className: "text-2xl font-medium my-2",
    },
  },
  p: {
    props: {
      className: "text-base my-2",
    },
  },
  a: {
    props: {
      className: "text-blue-500 hover:underline",
    },
  },
  ul: {
    props: {
      className: "list-disc list-inside my-2",
    },
  },
  ol: {
    props: {
      className: "list-decimal list-inside my-2",
    },
  },
  li: {
    props: {
      className: "my-1",
    },
  },
  blockquote: {
    props: {
      className: "border-l-4 border-gray-300 pl-4 italic my-4",
    },
  },
  code: {
    props: {
      className: "bg-gray-200 rounded px-1 py-0.5",
    },
  },
  pre: {
    props: {
      className: "bg-gray-900 text-white p-2 rounded my-2",
    },
  },
};
export const MarkdownConverter = ({ text='' }: { text: string }) => {
  return (
    <div>
   
      <Markdown
        options={{
          overrides,
        }}
      >
        {text}
      </Markdown>
    </div>
  );
};

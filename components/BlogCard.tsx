import Link from "next/link";

type Props = {
  title: string;
  excerpt: string;
  href: string;
  date?: string;
};

export default function BlogCard({ title, excerpt, href, date }: Props) {
  return (
    <article className="border rounded-lg p-5 hover:shadow-md transition bg-white">
      <header className="mb-2">
        <h3 className="text-lg font-semibold text-slate-900">
          <Link href={href}>{title}</Link>
        </h3>
        {date && <time className="text-xs text-slate-500">{date}</time>}
      </header>

      <p className="text-sm text-slate-700 mb-4">{excerpt}</p>

      <div>
        <Link
          href={href}
          className="text-sm text-blue-600 hover:underline"
        >
          Read article →
        </Link>
      </div>
    </article>
  );
}

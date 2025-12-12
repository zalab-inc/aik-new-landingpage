import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'NotebookLM Class - KelasInovatif University',
    description: 'Harness the power of Google NotebookLM. Learn to transform your documents into interactive AI-powered knowledge bases.',
};

export default function NotebookLMLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

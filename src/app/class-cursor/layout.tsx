import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cursor Class - KelasInovatif University',
    description: 'Master AI-first code editing with Cursor. Increase your development productivity with our specialized course.',
};

export default function CursorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

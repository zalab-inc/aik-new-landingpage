import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Scite Class - KelasInovatif University',
    description: 'Master advanced citation analysis with Scite.ai. improve your research workflow and verify scientific claims.',
};

export default function SciteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

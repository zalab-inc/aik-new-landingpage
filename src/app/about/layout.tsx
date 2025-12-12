import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us - KelasInovatif University',
    description: 'Learn about our mission, values, and leadership. Discover how we are shaping the future of education.',
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

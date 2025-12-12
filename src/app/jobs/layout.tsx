import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Careers - KelasInovatif University',
    description: 'Join our team. Explore career opportunities and help us redefine the future of education.',
};

export default function JobsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

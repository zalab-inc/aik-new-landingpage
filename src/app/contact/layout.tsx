import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us - KelasInovatif University',
    description: 'Get in touch with us. We are here to answer your questions about admissions, programs, and partnerships.',
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

// components/NextLink.jsx

import Link from 'next/link';

/**
 * A reusable wrapper for Next.js Link with standard props.
 *
 * @param {Object} props - Component props.
 * @param {string} props.href - The target URL.
 * @param {string} props.title - The link text or JSX content.
 * @param {string} [props.className] - Optional CSS class.
 */
const NextLink = ({ href, title, className = '' }) => {
  return (
    <Link href={href} className={className}>
      {title}
    </Link>
  );
};

export default NextLink;

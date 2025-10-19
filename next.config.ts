import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  typedRoutes: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
          },
        },
      ],
    });
    return config;
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: './messages/en.json',
  },
});

const withMDX = createMDX({});

export default withNextIntl(withMDX(nextConfig));

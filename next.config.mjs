/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/customersupport/shippingguidelines/IsoTubeSP_UN2037.pdf',
        destination: '/files/FO 703 Rev 5 Shipping Guidelines for Gas Samples in IsoTubes.pdf',
        permanent: true,
      }
    ];
  }
};

export default nextConfig;

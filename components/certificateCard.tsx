interface Certificate {
  title: string;
  img: string;
}
function CertificateCard({ certificate }: { certificate: Certificate }) {
  return (
    <div className="bg-white rounded p-5">
      <img
        src={certificate.img}
        alt={certificate.title}
        className="w-ful h-48 flex ml-12 object-cover rounded-md mb-4"
      />
      <div className="mt-2">
        <h3>{certificate.title}</h3>
      </div>
    </div>
  );
}
export default CertificateCard;

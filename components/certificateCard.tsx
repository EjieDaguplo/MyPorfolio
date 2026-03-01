interface Certificate {
  title: string;
  img: string;
}

function CertificateCard({ certificate }: { certificate: Certificate }) {
  return (
    <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/20 hover:border-purple-400/30 transition-all duration-300">
      {/* Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={certificate.img}
          alt={certificate.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-4">
        <span className="inline-block mb-2 px-3 py-0.5 text-xs font-semibold tracking-widest uppercase rounded-full bg-white/10 border border-white/20 text-blue-300">
          Certificate
        </span>
        <h3 className="text-white font-semibold text-sm leading-snug group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
          {certificate.title}
        </h3>
      </div>
    </div>
  );
}

export default CertificateCard;
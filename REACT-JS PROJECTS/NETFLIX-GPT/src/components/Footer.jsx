const Footer = () => {
  return (
    <footer className="w-full bg-black/90 text-gray-400 py-6  border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 text-center space-y-4">
        {/* Made with ❤️ */}
        <p className="text-xs sm:text-sm text-gray-500 flex items-center justify-center gap-1">
          Made with
          <span className="text-red-500 animate-heartbeat">❤️</span>
          by <span className="text-white font-semibold">Kapil Sarkar</span>
        </p>

        {/* CopyRight */}
        <p className="text-[10px] sm:text-xs text-gray-600">
          © {new Date().getFullYear()} StreamX Inc. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

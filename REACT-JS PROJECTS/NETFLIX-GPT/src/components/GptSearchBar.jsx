import { Search } from "lucide-react"; // Using lucide-react for the icon
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const languageKey = useSelector((store) => store.config?.lang);
  return (
    <div className=" mt-28 sm:pt-[25%] md:pt-[5%]  flex justify-center px-4 sm:px-6 md:px-8">
      <form
        className="w-full mt-10 max-w-3xl flex flex-col sm:flex-row 
        bg-black/40 backdrop-blur-sm 
        rounded-2xl overflow-hidden shadow-lg border border-white/20"
      >
        {/* Input Field */}
        <input
          type="text"
          placeholder={lang[languageKey].gptSearchPlaceHolder}
          className="w-full font-bold px-4 py-3 bg-black text-white bg-transparent 
                     placeholder-gray-400 focus:outline-none 
                     text-base sm:text-lg"
        />

        {/* Search Button */}
        <button
          type="submit"
          className="flex items-center justify-center 
                     bg-red-600 hover:bg-red-700 transition
                     text-white font-semibold
                     px-4 sm:px-6 py-3 
                     mt-2 sm:mt-0 sm:ml-2 rounded-lg sm:rounded-none"
        >
          {/* Icon only on mobile */}
          <Search className="w-5 h-5 sm:hidden" />

          {/* Text only on sm+ */}
          <span className="hidden sm:inline">{lang[languageKey].search}</span>
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

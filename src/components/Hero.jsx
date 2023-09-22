import { useState } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [textareaHeight, setTextareaHeight] = useState('54px');

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    const textareaLineHeight = 15;
    const numberOfLines = event.target.scrollHeight / textareaLineHeight;
    const newHeight = `${numberOfLines * textareaLineHeight}px`;

    if (newText === '') {
      setTextareaHeight('54px');
    } else {
      setTextareaHeight(newHeight);
    }
  };

  return (
    <div className="flex py-[26vh] my-12 justify-center items-center">
      <div className="absolute flex justify-center w-full p-4">
        <div className="relative flex items-center justify-center w-full max-w-lg gap-2 px-2 divide-x shadow-lg divide-zinc-600 min-h-12 bg-zinc-900 rounded-3xl shadow-black/40 dark:shadow-lg dark:shadow-zinc-500/50">
          <div className="flex items-center justify-center rounded-l-full">
            <img
              alt="Avatar"
              className="relative flex rounded-full shrink-0 h-[32px] w-[32px]"
              src="https://cdn.costumewall.com/wp-content/uploads/2017/08/mandark.jpg"
            />
          </div>
          <div className="flex items-center self-end flex-1 min-w-0">
            <form className="w-full h-full">
              <div className="relative flex items-center w-full min-h-full transition-all duration-300 h-fit" style={{ height: textareaHeight }}>
                <div className="relative flex self-start flex-1 min-w-0">
                  <div className="flex-[1_0_50%] min-w-[50%] overflow-x-visible -ml-[100%] opacity-0 invisible pointer-events-none"></div>
                  <textarea
                    className="flex-[1_0_50%] min-w-[50%] disabled:opacity-80 text-white bg-transparent border-0 shadow-none resize-none outline-none ring-0 disabled:bg-transparent selection:bg-teal-300 selection:text-black placeholder:text-zinc-400 [scroll-padding-block:0.75rem] pl-3 py-3 sm:min-h-[15px] sm:leading-6 text-base md:text-sm"
                    placeholder="Enter your da fakin Prompt"
                    style={{ height: textareaHeight }}
                    value={text}
                    onChange={handleTextChange}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled=""
                  className="flex items-center justify-center w-8 h-8 transition-colors rounded-full outline-none opacity-50 hover:bg-zinc-800 focus-visible:ring-zinc-400 focus-visible:ring-1 shrink-0 text-zinc-50"
                >
                  <span className="sr-only">Send</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.5 3V2.25H15V3V10C15 10.5523 14.5522 11 14 11H3.56062L5.53029 12.9697L6.06062 13.5L4.99996 14.5607L4.46963 14.0303L1.39641 10.9571C1.00588 10.5666 1.00588 9.93342 1.39641 9.54289L4.46963 6.46967L4.99996 5.93934L6.06062 7L5.53029 7.53033L3.56062 9.5H13.5V3Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

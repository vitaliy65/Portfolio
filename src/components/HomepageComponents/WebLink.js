export default function WebLink({ children, to }) {
  return (
    <li class="w-fit h-fit">
      <a href={to} target="_blank" rel="noreferrer">
        <button
          class="flex 
          justify-center 
          items-center 
          h-fit w-fit 
          text-base 
          font-bold 
          text-teal-800 
          dark:text-teal-300 
          hover:bg-teal-100 
          dark:hover:bg-teal-500 
          dark:hover:bg-opacity-10 
          px-3 py-2 
          rounded-lg"
        >
          {children}
        </button>
      </a>
    </li>
  );
}

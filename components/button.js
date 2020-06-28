export default function Button({ children, ...props }) {
  return (
    <>
      <button {...props} className="button button--blue">
        {children}
      </button>

      <style jsx>{`
        .button {
          @apply px-6 py-2 font-semibold border;
        }

        .button--blue {
          @apply text-blue-500 border-blue-500;
        }

        .button--blue:hover,
        .button--blue:focus {
          @apply text-white bg-blue-700 border-blue-700;
        }
      `}</style>
    </>
  );
}

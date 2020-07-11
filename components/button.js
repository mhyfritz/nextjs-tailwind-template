export default function Button({ children, ...props }) {
  return (
    <>
      <button {...props} className="btn btn-blue">
        {children}
      </button>

      <style jsx>{`
        .btn {
          @apply px-6 py-2 font-semibold border;
        }

        .btn-blue {
          @apply text-blue-500 border-blue-500;
        }

        .btn-blue:hover,
        .btn-blue:focus {
          @apply text-white bg-blue-700 border-blue-700;
        }
      `}</style>
    </>
  );
}

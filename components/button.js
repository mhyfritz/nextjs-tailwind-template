export default function Button({ children, ...props }) {
  return (
    <>
      <button {...props} className="btn btn-blue">
        {children}
      </button>

      {/* illustrate / test that @apply works */}
      <style jsx>{`
        .btn {
          @apply px-6 py-2 font-semibold border;
        }

        .btn-blue {
          @apply text-blue-500 border-blue-400;
          @apply hover:text-white hover:bg-blue-600 hover:border-blue-600;
          @apply focus:text-white focus:bg-blue-600 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blueGray-900 focus:ring-blue-600;
        }
      `}</style>
    </>
  );
}

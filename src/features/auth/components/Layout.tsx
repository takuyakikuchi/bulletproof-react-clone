type Props = {
  title: string;
  children: React.ReactNode;
};

export const Layout = ({ title, children }: Props) => {
  return (
    // TODO: Add Head.
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg-px-8">
      {/* Form title */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-3 text-center text-3xl font-extrabold text-gray-900">
          {title}
        </h2>
      </div>
      {/* Form */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {children}
        </div>
      </div>
    </div>
  );
};

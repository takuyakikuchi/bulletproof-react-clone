import { Button } from '@/components/Elements';

export const Landing = () => {
  return (
    <div className="bg-white h-screen flex items-center">
      <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Bulletproof React Clone</span>
        </h2>
        <span className="block text-9xl my-4">🤩</span>
        <p>Learning Best Practices For Building React Applications</p>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <Button>Get Started</Button>
          </div>
          <div className="ml-3 inline-flex">
            <Button>Github Repo</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

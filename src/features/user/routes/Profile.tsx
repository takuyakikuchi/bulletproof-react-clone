import { Button } from '@/components/Elements';
import { ContentLayout } from '@/components/Layout';

const Entry = ({ label, value }: { label: string; value: string }) => (
  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    <dt className="text-sm font-medium text-gray-500">{label}</dt>
    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
      {value}
    </dd>
  </div>
);

export const Profile = () => {
  return (
    <ContentLayout title="Profile">
      <div className="bg-white shadown overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <div className="flex justify-between">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              User Information
            </h3>
            {/* TODO: Make it an individual component */}
            <Button>Update Profile</Button>
          </div>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Personal details of the user.
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <Entry label="First Name" value="Takuya" />
            <Entry label="Last Name" value="Kikuchi" />
            <Entry label="Email Address" value="test@gmail.com" />
            <Entry label="Role" value="ADMIN" />
            <Entry label="Bio" value="" />
          </dl>
        </div>
      </div>
    </ContentLayout>
  );
};

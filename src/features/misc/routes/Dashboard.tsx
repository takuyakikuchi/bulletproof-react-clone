import { ContentLayout } from '@/components/Layout';
import { useUser } from '@/lib/auth';

export const Dashboard = () => {
  const user = useUser().data;

  // ?: Is there a better way to handle this?
  if (!user) return null;

  return (
    <ContentLayout title="Dashboard">
      <h2 className="text-xl mt-2">
        Welcome
        <span className="font-bold">{` ${user.firstName} ${user.lastName}`}</span>
      </h2>
      <h4 className="my-3">
        Your role is : <span className="font-bold">{user.role}</span>
      </h4>
      <p className="font-medium">In this application you can:</p>
      <ul className="my-4 list-inside list-disc">
        {user.role === 'ADMIN' ? (
          <>
            <li>Create discussions</li>
            <li>Edit discussions</li>
            <li>Delete discussions</li>
            <li>Comment on discussions</li>
            <li>Delete all comments</li>
          </>
        ) : (
          <>
            <li>Create comments in discussions</li>
            <li>Delete own comments</li>
          </>
        )}
      </ul>
    </ContentLayout>
  );
};

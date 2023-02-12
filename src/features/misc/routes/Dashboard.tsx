import { ContentLayout } from '@/components/Layout';

export const Dashboard = () => {
  return (
    <ContentLayout title="Dashboard">
      <h2 className="text-xl mt-2">
        {/* Welcome <span className="font-bold">{`${user.first} ${user.last}'}</span> */}
        Welcome <span className="font-bold">Takuya Kikuchi</span>
      </h2>
      <h4 className="my-3">
        Your role is : <span className="font-bold">ADMIN</span>
      </h4>
      <p className="font-medium">In this application you can:</p>
      {/* <ul className="my-4 list-inside list-disc">
        <li>Create comments in discussions</li>
        <li>Delete own comments</li>
      </ul> */}
      <ul className="my-4 list-inside list-disc">
        <li>Create discussions</li>
        <li>Edit discussions</li>
        <li>Delete discussions</li>
        <li>Comment on discussions</li>
        <li>Delete all comments</li>
      </ul>
    </ContentLayout>
  );
};

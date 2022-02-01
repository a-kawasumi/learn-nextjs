import useSWR from "swr";
import { ProfileData } from "~/pages/api/profile-data";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Profile: React.VFC = () => {
  // client側でfetchしたいときはswrを使う
  const { data, error } = useSWR<ProfileData>("/api/profile-data", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-xl text-red-600">{data.name}</h1>
      <p>{data.bio}</p>
    </div>
  );
};

export default Profile;

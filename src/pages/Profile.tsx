import { useEffect, useState } from 'react';

import { axiosService } from '@/util/axios.service';

const Profile = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    axiosService.auth
      .get('http://localhost:3001/api/protected/data')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error('Error fetching protected data', err);
      });
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-4xl font-bold text-red-600 dark:text-red-400">
        Profile Page
      </h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Profile;

import { useParams } from 'react-router-dom';

const EditUser = () => {
  const { id } = useParams();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Edit User</h1>
      <div className="border border-border rounded-lg p-4">
        {/* Add your user edit form here */}
        <p>Editing user with ID: {id}</p>
      </div>
    </div>
  );
};

export default EditUser; 
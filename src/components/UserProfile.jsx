import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiEdit2 } from 'react-icons/fi';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://qfmglenbyvhfrydozzqp.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmbWdsZW5ieXZoZnJ5ZG96enFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3Nzc1MTksImV4cCI6MjA2ODM1MzUxOX0.KgiS9wmPVCnGCxYxLE2wSKRgwYwXvLU-j8UtIpmDUfQ' // Replace this with your actual key or env var
);

const LOCAL_STORAGE_KEY = 'estateHive_user_profile';

const UserProfile = () => {
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(true);
  const [isSaved, setIsSaved] = useState(false);
  const [profileImage, setProfileImage] = useState('/default-profile.jpg');
  const [userEmail, setUserEmail] = useState('');

  const [formData, setFormData] = useState({
    name: 'Kiran Guttedar',
    email: '',
    state: 'Karnataka',
    city: 'Bengaluru (Urban)',
    locations: 'Bangalore, Hyderabad, Chennai, Pune',
  });

  useEffect(() => {
    const fetchEmail = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      const fetchedEmail = session?.user?.email || '';
      setUserEmail(fetchedEmail);
      setFormData(prev => ({ ...prev, email: fetchedEmail }));
    };
    fetchEmail();
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      const { formData, profileImage } = JSON.parse(saved);
      setFormData(prev => ({
        ...formData,
        email: userEmail || formData.email
      }));
      setProfileImage(profileImage);
    }
    setIsSaved(false);
  }, [userEmail]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      localStorage.setItem('userProfileImage', imageUrl);
    }
  };

  const handleChange = (e) => {
    setIsSaved(false);
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = () => {
    const dataToStore = {
      formData,
      profileImage,
    };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataToStore));
    setIsSaved(true);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-[#057791] pt-28 px-4 md:px-8 pb-10">
      <div className="bg-white max-w-2xl mx-auto rounded-xl p-6 shadow-xl space-y-6 border-2 border-transparent hover:border-indigo-500 transition-all duration-500 ease-in-out">
        
        {/* Profile Info */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="relative w-24 h-24 mx-auto sm:mx-0">
            <img
              src={profileImage}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-2 border-white shadow"
            />
            <label className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow cursor-pointer">
              <FiEdit2 className="text-sm text-gray-600" />
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-lg font-semibold">{formData.name}</h2>
            <p className="text-sm text-gray-500 break-all">{formData.email}</p>
          </div>
        </div>

        {/* Form or View */}
        <div className="space-y-4 text-sm text-gray-700">
          {isEditing ? (
            <>
              {['name', 'email', 'state', 'city', 'locations'].map((field) => (
                <div key={field}>
                  <label className="text-gray-500 capitalize block mb-1">{field.replace('email', 'Email account')}</label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 outline-none py-2 px-1 text-gray-800 rounded-md bg-gray-50 focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              ))}

              <button
                onClick={handleSave}
                disabled={isSaved}
                className={`w-full mt-4 bg-blue-600 text-white text-sm rounded-md px-4 py-2 transition hover:bg-blue-700 hover:scale-[1.01] shadow ${
                  isSaved && 'opacity-50 cursor-not-allowed'
                }`}
              >
                {isSaved ? 'Saved' : 'Save Change'}
              </button>

              {isSaved && (
                <button
                  onClick={() => navigate('/')}
                  className="w-full mt-2 bg-green-600 text-white text-sm rounded-md px-4 py-2 hover:bg-green-700 transition hover:scale-[1.01] shadow"
                >
                  Back to Home
                </button>
              )}
            </>
          ) : (
            <>
              {[
                { label: 'Name', value: formData.name },
                { label: 'Email account', value: formData.email },
                { label: 'Current State', value: formData.state },
                { label: 'Current City', value: formData.city },
                { label: 'Preferred Locations', value: formData.locations },
              ].map(({ label, value }, i) => (
                <div className="flex justify-between" key={i}>
                  <span className="text-gray-600">{label}</span>
                  <span className="font-medium text-right">{value}</span>
                </div>
              ))}

              <div className="flex flex-col gap-3 mt-4">
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-indigo-600 text-white text-sm rounded-md px-4 py-2 hover:bg-indigo-700 hover:scale-[1.01] shadow"
                >
                  Edit Profile
                </button>
                <button
                  onClick={() => navigate('/')}
                  className="bg-green-600 text-white text-sm rounded-md px-4 py-2 hover:bg-green-700 hover:scale-[1.01] shadow"
                >
                  Back to Home
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
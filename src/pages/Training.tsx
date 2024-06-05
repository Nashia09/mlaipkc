import Banner from '../components/Banner'

// export const Training = () => {
//   return (
//     <div>
//         <Banner title={"Training"} summary={"Training"} />

        
      
//     </div>
//   )
// }

import React from 'react';

const trainingsData = [
  {
    title: 'Leadership Training',
    description: 'Enhance your leadership skills with our comprehensive training program.',
    imageUrl: 'https://via.placeholder.com/600x400',
  },
  {
    title: 'Technical Skills Development',
    description: 'Stay updated with the latest technical skills in your field.',
    imageUrl: 'https://via.placeholder.com/600x400',
  },
  {
    title: 'Customer Service Training',
    description: 'Learn the best practices for excellent customer service.',
    imageUrl: 'https://via.placeholder.com/600x400',
  },
  {
    title: 'Project Management',
    description: 'Master the art of project management with our expert-led training sessions.',
    imageUrl: 'https://via.placeholder.com/600x400',
  },
];

const Training: React.FC = () => {
  return (
    <>
    <Banner title='Training' summary='Training' />
    <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Trainings</h1>
          <p className="mt-4 text-lg text-gray-600">
            We offer a variety of training programs to help you enhance your skills and knowledge.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainingsData.map((training, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <img className="w-full h-48 object-cover rounded-lg" src={training.imageUrl} alt={training.title} />
              <h2 className="mt-4 text-2xl font-bold text-gray-900">{training.title}</h2>
              <p className="mt-2 text-gray-600">{training.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>

  );
};

export default Training;


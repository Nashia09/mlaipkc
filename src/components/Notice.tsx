import React, { useEffect, useState } from 'react';
import './notice.css';
import { Notice1 } from '../domain/models/notice';
import { useApiClient } from '../utils/api-client';
import { useAdminNoticeRepository } from '../domain/repositories/notice';
import { Link } from 'react-router-dom';

const Notice: React.FC = () => {
    const [notice, setNotice] = useState<Notice1[]>([]);
  
  const apiClient = useApiClient();
  const courseRepository = useAdminNoticeRepository(apiClient);



  const allNotice = async () => {
    try {
      const response: Notice1[] = await courseRepository.listActiveNotices();
      console.log('Complete Response', response);

      // Assuming response contains a data property with the courses array
      if (response && Array.isArray(response)) {
        setNotice(response);
        
      } else {
        console.error('Unexpected response structure:', response);
      }
    } catch (error) {
      console.error('Api Error!', error);
    }
  };
  useEffect(() => {
   

    allNotice();
  }, []);

  

 
 if(!notice ){
    return <div></div>
 }
  return (
    <div className="bg-blue-500 py-2 text-white w-full overflow-hidden">
        
      <Link to={'/notice'}>
      <div className="marquee flex items-center">
        {notice.map((item, index) => (

          <div key={index} className="mx-4 whitespace-nowrap">
            {item.content}
          </div>
        ))}
      </div>
      </Link>

    </div>
  );
};

export default Notice;

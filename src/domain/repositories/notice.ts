import { AxiosInstance } from 'axios';
import {  Notice1 } from '../models/notice';
import { ApiDataResponse } from './api';
// import { useAuthStore } from '../store/auth';

export const useAdminNoticeRepository = (apiClient: AxiosInstance) => {
    const parentUrl = `/main`;

    // const getAccessToken = useAuthStore((state) => state.accessToken);

    const handleResponse = <T>(response: any): T => {
        if (response.status >= 200 && response.status < 300) {
            return response.data.data!;
        }

        if (response.data.errors && response.data.errors.length > 0) {
            throw new Error(response.data.message);
        }

        throw new Error('Could not connect to the API!');
    };

    const listAllNotices = async (audience?: 'ADMIN' | 'STUDENT'): Promise<Notice1[]> => {
        const response = await apiClient.get<ApiDataResponse<Notice1[]>>(`${parentUrl}/list-latest-alerts`, {
            params: { audience },
           
        });
        return handleResponse<Notice1[]>(response);
    };

    const listActiveNotices = async (): Promise<Notice1[]> => {
        const response = await apiClient.get<ApiDataResponse<Notice1[]>>(`${parentUrl}/list-latest-alerts`, {
            
        });
        return handleResponse<Notice1[]>(response);
    };

    
    

    return {
        listAllNotices,
        listActiveNotices
       
    };
};

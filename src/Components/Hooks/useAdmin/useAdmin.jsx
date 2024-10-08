import React, { useContext } from 'react';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Provider/AuthProvider';

const useAdmin = () => {
    const { user, loading } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            return res?.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;
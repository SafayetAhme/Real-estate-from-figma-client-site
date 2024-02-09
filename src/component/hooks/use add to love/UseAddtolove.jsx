import { useQuery } from '@tanstack/react-query';
import UseAxiosPublic from '../useAxiospublic/UseAxiosPublic';
import UseAuth from '../useauth/UseAuth';

const UseAddtolove = () => {
    const axiosPublic = UseAxiosPublic();
    const { user } = UseAuth();

    const { data: addLove = [], isPending: loading, refetch } = useQuery({
        queryKey: ['addLove'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/addLove?email=${user.email}`);
            return res.data;
        }
    })
    return [addLove, refetch, loading]
}

export default UseAddtolove
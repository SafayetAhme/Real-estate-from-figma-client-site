import UseAxiosPublic from '../useAxiospublic/UseAxiosPublic';
import { useQuery } from "@tanstack/react-query";

const UseUser = () => {
    const axiosPublic = UseAxiosPublic();

    const { data: users = [], isPending: loading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get('/users');
            return res.data;
        }
    })
    return [users, refetch, loading]
}

export default UseUser
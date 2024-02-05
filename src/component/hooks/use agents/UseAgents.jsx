import UseAxiosPublic from '../useAxiospublic/UseAxiosPublic';
import { useQuery } from "@tanstack/react-query";

const UseAgents = () => {
    const axiosPublic = UseAxiosPublic();

    const { data: agents = [], isPending: loading, refetch } = useQuery({
        queryKey: ['agents'],
        queryFn: async () => {
            const res = await axiosPublic.get('/agents');
            return res.data;
        }
    })
    return [agents, refetch, loading]
}

export default UseAgents
import UseAxiosPublic from '../useAxiospublic/UseAxiosPublic';
import { useQuery } from "@tanstack/react-query";

const UseProjects = () => {
    const axiosPublic = UseAxiosPublic();

    const { data: projects = [], isPending: loading, refetch } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const res = await axiosPublic.get('/projects');
            return res.data;
        }
    })
    return [projects, refetch, loading]
}

export default UseProjects
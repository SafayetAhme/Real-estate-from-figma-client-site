import UseAxiosPublic from '../useAxiospublic/UseAxiosPublic';
import { useQuery } from "@tanstack/react-query";


const UsePayment = () => {
    const axiosPublic = UseAxiosPublic();

    const { data: payment = [], isPending: loading, refetch } = useQuery({
        queryKey: ['payment'],
        queryFn: async () => {
            const res = await axiosPublic.get('/payment');
            return res.data;
        }
    })
    return [payment, refetch, loading]
}

export default UsePayment
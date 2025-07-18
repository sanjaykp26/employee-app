import { Employee } from "../../services/employee.service";


export const EMPLOYEES: Employee[] = [
  { name: 'John Doe', email: 'john.doe@example.com', contact: '9876543210', address: 'Pune' },
  { name: 'Jane Smith', email: 'jane.smith@example.com', contact: '9123456780', address: 'Mumbai' },
  { name: 'Amit Patel', email: 'amit.patel@example.com', contact: '9988776655', address: 'Ahmedabad' },
  { name: 'Sara Khan', email: 'sara.khan@example.com', contact: '9090909090', address: 'Delhi' },
  { name: 'Vikram Verma', email: 'vikram.verma@example.com', contact: '9812345678', address: 'Bhopal' },
  { name: 'Priya Nair', email: 'priya.nair@example.com', contact: '9867543210', address: 'Kochi' },
  { name: 'Ravi Shankar', email: 'ravi.shankar@example.com', contact: '9944556677', address: 'Chennai' },
  { name: 'Neha Joshi', email: 'neha.joshi@example.com', contact: '9856231478', address: 'Nagpur' },
  { name: 'Alok Singh', email: 'alok.singh@example.com', contact: '9870001234', address: 'Lucknow' },
  { name: 'Divya Mehta', email: 'divya.mehta@example.com', contact: '9768452310', address: 'Surat' },
  { name: 'Rakesh Yadav', email: 'rakesh.yadav@example.com', contact: '9234567890', address: 'Jaipur' },
  { name: 'Sneha Rao', email: 'sneha.rao@example.com', contact: '9955443322', address: 'Hyderabad' },
  { name: 'Kunal Shah', email: 'kunal.shah@example.com', contact: '9988123456', address: 'Vadodara' },
  { name: 'Anjali Dubey', email: 'anjali.dubey@example.com', contact: '9876541230', address: 'Indore' },
  { name: 'Manoj Kumar', email: 'manoj.kumar@example.com', contact: '9001122334', address: 'Patna' },
  { name: 'Ritu Sharma', email: 'ritu.sharma@example.com', contact: '9876567890', address: 'Noida' },
  { name: 'Farhan Sheikh', email: 'farhan.sheikh@example.com', contact: '9988771122', address: 'Bangalore' },
  { name: 'Shraddha Jain', email: 'shraddha.jain@example.com', contact: '9898989898', address: 'Gwalior' },
  { name: 'Harsh Vora', email: 'harsh.vora@example.com', contact: '9823456712', address: 'Rajkot' },
  { name: 'Payal Gupta', email: 'payal.gupta@example.com', contact: '9873216540', address: 'Kanpur' },
  { name: 'Rajeev Nair', email: 'rajeev.nair@example.com', contact: '9944332211', address: 'Thiruvananthapuram' },
  { name: 'Pooja Singh', email: 'pooja.singh@example.com', contact: '9865123478', address: 'Varanasi' },
  { name: 'Mohit Agarwal', email: 'mohit.agarwal@example.com', contact: '9990001122', address: 'Agra' },
  { name: 'Ishita Desai', email: 'ishita.desai@example.com', contact: '9765432190', address: 'Nashik' },
  { name: 'Nikhil Bhatia', email: 'nikhil.bhatia@example.com', contact: '9812233445', address: 'Amritsar' },
  { name: 'Geeta Kumari', email: 'geeta.kumari@example.com', contact: '9977886655', address: 'Ranchi' },
  { name: 'Ankit Reddy', email: 'ankit.reddy@example.com', contact: '9834567890', address: 'Warangal' },
  { name: 'Meena Iyer', email: 'meena.iyer@example.com', contact: '9789054321', address: 'Madurai' },
  { name: 'Suraj Sinha', email: 'suraj.sinha@example.com', contact: '9890443322', address: 'Jamshedpur' },
  { name: 'Deepa Rani', email: 'deepa.rani@example.com', contact: '9786341290', address: 'Coimbatore' }
];
export interface User {
  id: number
  name: string
  phone: string
  gender: string
  email: string
  department: string
  position: string
  dateOfJoining: string
  salary: number
}

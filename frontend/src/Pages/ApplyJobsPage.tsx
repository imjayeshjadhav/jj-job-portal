import { Button, Divider } from "@mantine/core"
import { Link } from "react-router-dom"
import { IconArrowLeft } from "@tabler/icons-react"
import ApplyJobComp from "../ApplyJob/ApplyJobComp"


const ApplyJobsPage = () => {
  return (
    <div className='min-h-[90vh] bg-mine-shaft-950 font-["poppins"] p-4 '>
        <Link className='object-contain my-4 inline-block' to="/jobs">
            <Button leftSection={<IconArrowLeft size={20}/> } color='bright-sun.4' variant="light"  >Back</Button>
        </Link>
    <ApplyJobComp/>
    </div>
    
  )
}

export default ApplyJobsPage

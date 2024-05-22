import { Link, useLocation } from 'react-router-dom';
import ViewSupportDetails from '../../layouts/support/viewSupportDetails'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../../config/config';

export default function ViewSupportComp() {
  const [support, setsupport] = useState([]);
  const [commit, setCommit] = useState(null);
  const location = useLocation();
  const id = location.state?.id;

  const fetchSupport = async () => {
    await axios.get(`${baseUrl}support/${id}`)
      .then(res => {
        setsupport(res.data.data);
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect(() => {
    fetchSupport();
  }, [])
  return (
    <div className='max-w-screen-2xl' style={{ marginTop: '-180px' }}>
      <ViewSupportDetails support={support} />
      <div className='w-full max-w-xl my-8'>
        <div className='bg-white px-8 py-4 shadow-lg rounded overflow-hidden'>
          <h4>Activity</h4>
          <div className='my-2 border-t w-full space-y-3'>
            <p>{support?.details}</p>
            <p><Link to={support?.attachments} target="_blank" className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>{support?.attachments}</Link></p>
          </div>
        </div>
        {support?.activities?.map((act) => {
          return (
            <div key={act?.id} className='my-6'>
              <div className='bg-white rounded-md shadow-lg'>
                <div className='px-2 py-1'>
                  <div className='font-medium text-sm py-2 flex justify-between items-center'>
                    <div className='flex justify-center items-center'>
                      {act?.userId ?
                        <img className='rounded-full w-7 h-7 object-cover' src={act?.userId?.image} alt='...' />
                        :
                        <img className='rounded-full w-7 h-7 object-cover' src={act?.specialistId?.image} alt='...' />
                      }
                      <span className='pl-4'>{act.userId ? `${act?.userId?.firstName} ${act?.userId?.lastName}` : `${act?.specialistId?.firstName} ${act?.specialistId?.lastName}`}</span>
                    </div>
                    <span>{new Date(act.createdAt).toLocaleDateString()} {new Date(act.createdAt).toLocaleTimeString()}</span>
                  </div>
                </div>
                <hr />
                <div className='my-4 p-3'>
                  <span className=' text-lg font-medium'>{act?.message}</span>
                  <p><a href={act?.attachments} target="_blank" className=' text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline'>{act?.attachments}</a></p>
                </div>
              </div>
            </div>
          )
        })}
        {support?.requestStatus === 'Close' ?
          ''
          :
          <form>
            <div className='rounded-full bg-white shadow-lg py-2 px-8 text-xs w-full'>
              <div className='flex justify-between items-center'>
                <input type='text' placeholder='Add a comment' onChange={e => setCommit(e.target.value)} className='border-0 w-full mr-2 rounded' />
                <div className='rounded-full bg-blue-950 h-8 w-8 inline-flex justify-center items-center'>
                  <img src='images/navigation-2.png' alt='...' />
                </div>
              </div>
            </div>
          </form>
        }
      </div>
    </div>
  )
}

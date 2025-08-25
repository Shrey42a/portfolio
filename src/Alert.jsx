import { useEffect } from 'react';

function Alert({alert}) {
    useEffect(function(){
        if(alert) {
            const stopTimer = setTimeout(removeAlert, 4 * 1000);
            return function (){
                clearTimeout(stopTimer);
            }
        }
    }, [alert]);

  return (
    <>
    <div className='w-full h-max fixed top-4 flex justify-center items-center'>
        <div className="w-max  h-max z-20 animate__animated animate__backInUp animate__repeat-1">
          <div className="justify-between px-4 bg-green-100 space-x-2 rounded-lg py-4 text-green-700 text-base flex items-center w-full">
            <div className="flex items-center justify-center gap-2 lg:text-xl text-xs ">
                <div><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg></div>
                Message Sent Successfully
            </div>
          </div>
        </div>
    </div>
    </>
  )
}
export default Alert;
import { Dialog, Transition } from '@headlessui/react'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { Fragment, useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { db } from '../firebase/firebaseConfig';
export default function AddFAQ({ isOpen, setIsOpen, existingFAQ }) {
  const [editorHtml, setEditorHtml] = useState('');
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [faqId, setFaqId] = useState(null);
  useEffect(() => {
    if (existingFAQ) {
      setQuestion(existingFAQ.question);
      setEditorHtml(existingFAQ.answer);
      setFaqId(existingFAQ.id);
    }
  }, [existingFAQ]);
  const handleEditorChange = (value) => {
    setEditorHtml(value);
  };

  var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }],
    [{ 'direction': 'rtl' }],

    [{ 'size': ['small', false, 'large', 'huge'] }],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean']
  ];

  const modules = {
    toolbar: {
      container: toolbarOptions
    }
  }
  function closeModal() {
    setIsOpen(false)
  }
  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (faqId) {
        // Update existing FAQ
        const faqRef = doc(db, 'faqs', faqId);
        await updateDoc(faqRef, {
          question: question,
          answer: editorHtml,
          updatedAt: new Date()
        });
        console.log("Document updated with ID: ", faqId);
      } else {
        // Add new FAQ
        const docRef = await addDoc(collection(db, 'faqs'), {
          question: question,
          answer: editorHtml,
          createdAt: new Date()
        });
        console.log("Document written with ID: ", docRef.id);
      }
      setIsOpen(false);
    } catch (e) {
      console.error("Error updating/adding document: ", e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add FAQ
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className='my-4 space-y-8'>
                      <div className="relative z-0">
                        <input
                          type="text"
                          id="floating_standard"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          value={question}
                          onChange={(e) => setQuestion(e.target.value)}
                        />
                        <label
                          htmlFor="floating_standard"
                          className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Question
                        </label>
                      </div>
                      <div className='bg-white'>
                        <ReactQuill
                          theme="snow"
                          value={editorHtml}
                          onChange={handleEditorChange}
                          modules={modules}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    {loading ? (
                      <div className="flex justify-center items-center">
                        <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 4V1L7 6l5 5V7h6v4h-6v3.41L12 11V8H6v6h6v4.41L12 14V4zm0-2h1V1h-1v1zm-4.95 2.05l-1.41-1.41 1.41-1.41 1.41 1.41-1.41 1.41zM2.05 12l1.41-1.41 1.41 1.41L3.46 13.46 2.05 12zm16.95 0l-1.41-1.41 1.41-1.41 1.41 1.41-1.41 1.41zM12 21h-1v1h1v-1zm6.95-2.05l1.41-1.41-1.41-1.41-1.41 1.41 1.41 1.41zM21.95 12l-1.41 1.41-1.41-1.41 1.41-1.41 1.41 1.41z" /></svg>
                      </div>
                    ) : (
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-black w-full px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}
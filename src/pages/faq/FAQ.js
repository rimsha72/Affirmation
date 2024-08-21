import React, { useEffect, useState } from 'react'
import Header from '../../components/header/header'
import AddFAQ from "../../components/AddFAQ"
import { getAllFaqs } from '../../config/config';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
export default function FAQ() {
  const [isOpen, setIsOpen] = useState(false);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFAQ, setSelectedFAQ] = useState(null);
  useEffect(() => {
    const fetchFaqs = async () => {
      const fetchedFaqs = await getAllFaqs();  // Fetch FAQs using getAllFaqs function
      setFaqs(fetchedFaqs);
      setLoading(false);
    };

    fetchFaqs();
  }, []);
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
  };
  const filtered = faqs?.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) // Filter FAQs based on search query
  );
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this FAQ?");

    if (confirmDelete) {
      try {
        const faqDocRef = doc(db, 'faqs', id); // Reference to the specific FAQ document
        await deleteDoc(faqDocRef); // Delete the FAQ document
        setFaqs(faqs.filter(faq => faq.id !== id)); // Update state to remove the deleted FAQ
      } catch (error) {
        console.error("Error deleting FAQ: ", error);
      }
    }
  };
  const handleEditClick = (faq) => {
    setSelectedFAQ(faq);
    setIsOpen(true); // Open the modal
  };
  return (
    <div>
      <Header header={"Manage FAQs"} />
      <div className="max-w-screen-2xl mx-auto lg:ml-64" style={{ marginTop: '-180px' }}>
        <div className="mx-4 sm:mx-9 mt-3">
          <div className="flex flex-wrap gap-4 justify-between bg-white px-4 py-2 rounded">
            <button className="rounded-md w-full sm:w-auto border text-sm bg-black text-white px-6 py-2 font-medium capitalize" onClick={() => setIsOpen((pre) => !pre)}>Add FAQ</button>
            <div className="flex flex-col w-full sm:flex-row sm:max-w-xs sm:items-center gap-4">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  value={searchQuery}
                  onChange={handleSearch}
                  className="block w-full px-4 py-2 outline-none pl-10 text-sm text-gray-900 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search FAQ..."
                  required
                />
              </div>
            </div>
          </div>
          <div className='py-3'>
            <div className="relative overflow-x-auto drop-shadow-xl bg-white sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase border-b-2 bg-white">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Questions
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Answer
                    </th>
                    <th scope="col" className="px-6 py-3 flex justify-center">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="2" className="text-center py-4">
                        <div className="flex justify-center items-center space-x-2">
                          <div className="flex justify-center items-center">
                            <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 4V1L7 6l5 5V7h6v4h-6v3.41L12 11V8H6v6h6v4.41L12 14V4zm0-2h1V1h-1v1zm-4.95 2.05l-1.41-1.41 1.41-1.41 1.41 1.41-1.41 1.41zM2.05 12l1.41-1.41 1.41 1.41L3.46 13.46 2.05 12zm16.95 0l-1.41-1.41 1.41-1.41 1.41 1.41-1.41 1.41zM12 21h-1v1h1v-1zm6.95-2.05l1.41-1.41-1.41-1.41-1.41 1.41 1.41 1.41zM21.95 12l-1.41 1.41-1.41-1.41 1.41-1.41 1.41 1.41z" /></svg>
                          </div>
                          <span className="text-lg text-gray-500">Loading FAQs...</span>
                        </div>
                      </td>
                    </tr>
                  ) : filtered.length > 0 ? (
                    filtered.map((faq) => (
                      <tr key={faq.id} className="bg-white border-b hover:bg-gray-250/30">
                        <td className="px-6 py-4">{faq.question}</td>
                        <td className="px-6 py-4">{faq.answer}</td>
                        <td className="px-6 py-4 space-x-4 flex justify-center">

                          <a
                            href="#"
                            className="font-medium text-gray-250 text-green-600"
                            onClick={() => handleEditClick(faq)} // Pass the FAQ to handleEditClick
                          >
                            Edit
                          </a>
                          <button
                            onClick={() => handleDelete(faq.id)}
                            className="font-medium text-red-600"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="2" className="text-center py-4 text-red-600">
                        No FAQs found for "{searchQuery}"
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <AddFAQ isOpen={isOpen} setIsOpen={setIsOpen} existingFAQ={selectedFAQ} />
    </div>
  )
}
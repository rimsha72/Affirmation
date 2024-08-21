import React, { useEffect, useState } from 'react'
import Header from '../../components/header/header'
import AddFAQ from "../../components/AddFAQ"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
export default function Terms() {
  const [editorHtml, setEditorHtml] = useState('');

  const handleEditorChange = (value) => {
    setEditorHtml(value);
  };

  var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean']                                         // remove formatting button
  ];

  const modules = {
    toolbar: {
      container: toolbarOptions
    }
  }

  useEffect(() => {

    const fetchTerms = async () => {
      const docRef = doc(db, 'settings', 'termsConditions'); // Adjust the path to your Firestore document
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setEditorHtml(docSnap.data().content); // Assuming the content is stored under the 'content' field
      } else {
        console.log('No such document!');
      }
    };

    fetchTerms();
  }, []);

  const handleSave = async () => {
    try {
      const docRef = doc(db, 'terms', 'conditions'); // Adjust the path to your Firestore document
      await updateDoc(docRef, {
        content: editorHtml // Save the content to the 'content' field
      });
      alert('Terms and Conditions updated successfully!');
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };
  return (
    <div>
      <Header header={"Manage Terms and Conditions"} />
      <div className="max-w-screen-2xl mx-auto lg:ml-64" style={{ marginTop: '-180px' }}>
        <div className="mx-4 sm:mx-9 mt-3">
          <div className='bg-white'>
            <ReactQuill
              theme="snow"
              value={editorHtml}
              onChange={handleEditorChange}
              modules={modules}
              style={{ height: '300px' }}
            />
          </div>
          <button
            onClick={handleSave}
            className="mt-24 px-4 py-2 bg-black text-white rounded"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}